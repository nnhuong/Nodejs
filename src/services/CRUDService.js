import bcrypt from 'bcryptjs';
import db from '../models/index';

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
            resolve('ok create users');
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

module.exports = {
    createNewUser: createNewUser
};
