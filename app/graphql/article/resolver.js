/*
 * @Author: quling
 * @Date: 2023-09-18 21:41:10
 * @LastEditors: quling
 * @LastEditTime: 2023-09-19 21:24:53
 * @Description:
 * @FilePath: \egg\app\graphql\article\resolver.js
 */
'use strict';
const list = [
  {
    id: 1,
    content: 'aaa',
    title: '',
    author: {
      name: 'aaa',
      age: 18,
    },
  },
  {
    id: 2,
    content: 'bbb',
    title: '',
    author: {
      name: 'aaa',
      age: 18,
    },
  },
];
module.exports = {
  Query: {
    articleList: () => {
      return list;
    },
    getArticleById: (root, params) => {
      const { first } = params;
      const result = list.filter(item => {
        return item.id === Number(first);
      });
      return result;
    },
  },
  Mutation: {
    addArticle(root, params) {
      console.log(root, params);
      params.id = list.length + 1;
      list.push(params);
      return params;
    },
  },
};

