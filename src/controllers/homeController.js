import db from '../models/index';
import CRUDService from '../services/CRUDservice';

let getHomePage = async (req, res) => {
    try{ 
        let data = await db.Users.findAll();

        return res.render('homepage.ejs',{data: JSON.stringify(data)});
        //data: JSON.stringify(data);
    } catch(e) {
        console.log(e); //TCPView
    }
    
    return res.render('test/about.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.send('post CRUD from server');
}
let displayGetCRUD = async (req,res) => {
    let data = await CRUDService.getAllUser();
    console.log('--------------------')
    console.log(data)
    console.log('--------------------')

    return res.render('displayCRUD.ejs',{
      dataTable: data  
    })
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
}
