'use strict'

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $http, Item){
  console.log("mainCtrl!");
  $scope.items = $scope.items || [];
 
  Item.getItems()
  .then(items=>{
     console.log("items: ", items);
     $scope.items = items;
  })
  .catch(err=>{
    console.log("error: ", err );
  });


  $scope.deleteItem = function(ind, item){
      console.log("in delete Item");
      console.log("ind: ", ind);
      console.log("id: ", item.id);
    Item.deleteItem(ind, item)
      .then(item => {
      //console.log("item to add", item);
      $scope.items.splice(ind,1);
      $scope.total = getTotal();
    })
    .catch(err=>{
    console.log("error: ", err );
    });
  }



});


app.controller('allItemsCtrl', function($scope, $stateParams, Item){
  console.log("allItemsCtrl");
  console.log('$stateParams:', $stateParams);
   //$scope.total = $scope.total || 0;
  $scope.total= getTotal()|| 0;

  function getTotal(){
    console.log("in total");
    var total = 0;
    console.log("items: ", $scope.items[0]);
    for(var i =0; i<$scope.items.length; i++){
      total+= $scope.items[i].value;
      console.log("total:" , total);
    }
    return total;
  }

  app.filter('filterRooms', function(){
    return function(room, rooms){
      return 
    }
  })

  $scope.$watch(function(){
    return angular.tJson($scope.search);
  }, function(){
      let sum =0;
      $scope.items.forEach(item =>{
        if(item.room === $scope.searchFilter){
          sum += item.value;
        }
      });
      $scope.total = sum;
  })

    $scope.addItem = () => {
    Item.addItem($scope.newItem)
    .then(item=>{
      $scope.total= getTotal();
      console.log("item to add", item);
      $scope.items.push(item);
      $scope.newItem = {};
    })
    .catch(err=>{
    console.log("error: ", err );
    });
  };



});


app.controller('byRoomItemsCtrl', function($scope, $stateParams){
  console.log("byRoomItemsCtrl");
  console.log('$stateParams:', $stateParams);
});

