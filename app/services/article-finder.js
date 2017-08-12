const knex = require('../../knex');
const Promise = require('bluebird');
const _ = require('lodash');

function getKeywordId(keyword) {
    return knex('target_keywords').select('originalKeywordId').where('fromUrl', keyword);
}

function getRelatedProducts(keywordObject) {
    return knex.select('postTitle').from('keywords_products_relevance').where('originalKeywordId', keywordObject.originalKeywordId).limit(5);
}

function getRelatedProductsData(relatedProductsTitlesVector) {
    return knex('products').select('id', 'name', 'url','imageUrl').whereIn('name', relatedProductsTitlesVector);
}

module.exports = {
    getRelatedArticles: function(keyword) {
        return getKeywordId(keyword)
            .then(function(keywordObject) {
                console.log('KeywordObject', keywordObject);
                if (keywordObject.length === 0) {
                    throw new Error('Keyword was not found in database');
                }
                return getRelatedProducts(keywordObject[0]);
            })
            .then(function(relatedProducts) {
                if (relatedProducts.length === 0) {
                    throw new Error('No products were found in database for keyword');
                }

                var relatedProductsTitlesVector = _.map(relatedProducts, function(relatedProduct) {
                    return relatedProduct.postTitle;
                });

                console.log('relatedProductsIdsVector', relatedProductsTitlesVector);
                return getRelatedProductsData(relatedProductsTitlesVector);
            });
    }
};