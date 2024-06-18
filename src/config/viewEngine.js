import express from 'express';


let configViewEngine = (app) => {
    //cấu hình
    app.use(express.static("./src/public"));//cấp quyền truy cập vào file
    app.set("view engine", "ejs");
    app.set("views", "./src/views")//bắt buộc viết phía bên clint
}

module.exports = configViewEngine;