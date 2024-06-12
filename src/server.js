import express from "express";
//luôn phải import controller vào
import bodyParser from "body-parser";
// import homeController from "../controllers/homeController";
//hỗ trợ lấy các tham số từ phía client gửi lên
import viewEngine from "./config/viewEngine";
//import viewEngine vào để sử dụng
import initWebRoutes from './route/web'
//import initWebRoutes vào để sử dụng
require('dotenv').config();
// gọi hàm config của thư viện dotenv



let app = express(); 

//config app

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}))

//hỗ trợ lấy các tham số từ phía client gửi lên

viewEngine(app);
initWebRoutes(app); 

//Port === undefined => port = 6969

let port = process.env.PORT || 6969 ;
app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port: " + port)
})
//chạy server ở port 6969