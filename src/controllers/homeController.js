import db from '../models/index';


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

// object {
//     key: ''
//     value: ''
// }

let getAboutPage = async (req, res) => {
    // Define your logic for the about page here
    return res.render('test/about.ejs');
}

// const data = "Dữ liệu mẫu từ controller";
// res.render('homepage', { data: data });


module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}
//export ra để sử dụng ở file khác