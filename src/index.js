const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

/**
 * set thư mục file tĩnh
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 2 thằng giúp đóng vai trò như middle ware giữa client và controller
 * - giúp xử lý dữ liệu và để lấy được qua thằng req.body
 * - 1 thằng dùng cho post bình thường form html
 * - thằng dùng cho các thằng gửi qua các thư viện js XMLHttpRequest, fetch, axios,..
 */
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

//template engine
const handlebarsConfig = {
    extname: 'hbs'
}
app.engine('hbs', handlebars(handlebarsConfig));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// route init
route(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))