const knex = require('knex');

function getKeywordId(keyword) {
    return knex('keywords').select('id').where('keyword', keyword.replace('-', ' '));
}

function getRelatedProducts(keywordObject) {
    return knex.select('postTitle').from('keywords_products_relevance').where('originalKeywordId', keywordObject.id);
}

function getRelatedProductsData(keywordObject) {
    return knex('products').select('url, imageUrl').where('originalKeywordId', keywordObject.id);
}

module.exports = {
};