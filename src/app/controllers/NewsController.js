class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('1111111111111');
    }
}

module.exports = new NewsController;

