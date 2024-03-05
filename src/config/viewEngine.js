const path = require('path')
const express = require('express')
const configViewEngine = (app) => {
    //config template engine
app.set('views', path.join('./src', 'views')) //  đặt thư mục mà ứng dụng của bạn sẽ tìm kiếm các view (templates) để render. 
app.set('view engine','ejs') //  đặt engine view cho ứng dụng Express của bạn. Express hỗ trợ nhiều template engine, và ở đây nó được đặt thành EJS (Embedded JavaScript)
// config static files
app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;