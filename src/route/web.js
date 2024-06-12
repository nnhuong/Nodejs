import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
//để sử dụng controller thì phải import vào và gọi hàm của nó
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
// tạo tất cả các route thì viết ỏ đây
    router.get('/hoidanit', (req, res) => {
        return res.send('Hello world with hoidanit')
// khi truy cập vào /hoidanit thì sẽ trả về Hello world with hoidanit
    });

    //rest api
    return app.use("/", router);
}

module.exports = initWebRoutes;