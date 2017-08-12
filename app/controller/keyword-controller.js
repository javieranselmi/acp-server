var articleFinder = require('../services/article-finder');
let dots = require('dot').process({
    path: (__dirname + '/../templates')
});

exports.applyProductFilter = function (req, res, next) {

    let keyword = req.params.keyword;
    return articleFinder.getRelatedArticles(keyword)
        .then(function (result) {
console.log(result);
            return res.status(200).send(dots.hello({articles: result}));
            return res.status(200).json(result);
        })
        .catch(function (err) {
            next(err);
        });
};