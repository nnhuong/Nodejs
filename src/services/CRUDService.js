import bcrypt from 'bcryptjs';
import db from '../models/index';
import { raw } from 'body-parser';

// Generate salt once and pass it to the hash function
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password, salt);
            await db.Users.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                image: data.image,
                typeRole: data.roleId,
                positionId: data.positionId,
            });
            resolve('successfully create an user');
        } catch (e) {
            reject(e);
        }
    });
};


let hashUserPassword = (password, salt) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};
let getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let users = db.Users.findAll({
                raw: true,
            });
            resolve(users)
        }catch(e) {
            reject(e)
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async(resolve, reject)=>{
       try{
            let user = await db.Users.findOne({
                where: {id: userId},
                raw: true,
            })

            if(user){
                resolve(user)
            }
            else{
                resolve({})
            }
       } catch(e) {
        reject(e);
       }
    })

}
let updateUserData = (data) => {
   return new Promise(async(resolve, reject)=>{
    try{
        let user = await db.Users.findOne({
            where: {id: data.id},
        })
        if(user){
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.address = data.address;

            await user.save();

            let allUsers = await db.Users.findAll();
        
            resolve(allUsers);
        } else{
            resolve();
        }
    
    }catch(e) {
        console.log(e);
    }
   })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
};
