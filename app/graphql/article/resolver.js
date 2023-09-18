/*
 * @Author: quling
 * @Date: 2023-09-18 21:41:10
 * @LastEditors: quling
 * @LastEditTime: 2023-09-18 22:09:22
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

  },
  Mutation: {
    addArticle(root, params) {
      // console.log(params);
      params.id = list.length++;
      list.push(params);
      return params;
    },
  },
};

