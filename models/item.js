'use strict';

//  models/post.js  -  Post model

const db = require('../config/db');

const uuid = require('uuid');
const moment = require('moment');

db.query(`create table if not exists items(
  id TEXT,
  name TEXT,
  createdAt Text,
  value INT,
  room TEXT
)`);

exports.getAll = () => {
  return new Promise(function(resolve, reject) {
    db.query('select * from items', function(err, items) {
      if(err) {
        reject(err);
      } 
        resolve(items);
    });
  });
};

exports.create = itemObj => {

  return new Promise(function(resolve, reject) {
    //set id, user, createdAt, descriprion, type and sums
    itemObj.id = uuid();
    itemObj.createdAt = moment().toISOString();

    db.query('insert into items set ?', itemObj,
      function(err) {
        if(err){ 
          console.log("errror: ", err);
          return reject(err);
        }
        db.query('select * from items order by createdAt desc limit 1', function(err, item) {
          if(err){
            console.log("select error: ", err);
            return reject(err);
          } 
          console.log("item: ", item);

          resolve(item[0]);
        });
      })
  });
};

exports.delete = (id, cb) =>{
      db.query(`delete from items where id = "${id}"`, cb);
}

