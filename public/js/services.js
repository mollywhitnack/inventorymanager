'use strict'

var app = angular.module('myApp')

.service('Item', function($http, $q) {
  this.items = [] ;

  this.getItems = () =>{
    return $http.get(`/items`)
      .then(res => {
        //console.log("transactions: ", this.transactions);
        var items = [];
        res.data.forEach(item =>{

          let itemy = {
            id:  item.id,
            name: item.name,
            createdAt: item.createdAt,
            value: item.value,
            room: item.room
          };

        items.push(itemy)
        
        })
        return $q.resolve(items);
      })
      .catch(err => {
        console.log('err:', err);
      }) 
    };


  this.addItem = itemObj =>{
    return $http.post(`/items`, itemObj)
      .then(res => {
        return $q.resolve(res.data);
      })
      .catch(err => {   
        console.log('err:', err);
      })
    };

 this.deleteItem = (ind, item) =>{
    return $http.delete(`/items/${item.id}`)
      .then(() => {
        console.log(" in delete");
        return $q.resolve();
      })
      .catch(err => {   
        console.log('err:', err);
      })
    };


});