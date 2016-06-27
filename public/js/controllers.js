'use strict'

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $http, Item){
  console.log("mainCtrl!");
  $scope.items = $scope.items || [];
 
  Item.getItems()
  .then(items=>{
   // let id = $scope.id;
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
    })
    .catch(err=>{
    console.log("error: ", err );
    });
  }

  $scope.$watch('total', function() {
        console.log('hey, myVar has changed in main!');
  });

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

   $scope.$watch('total', function() {
        console.log('hey, myVar has changed!');
        $scope.total= getTotal();
    });

   /* $scope.deleteItem = function(ind){
      console.log("in delete Item");
    Item.deleteItem(ind)
      .then(item => {
      console.log("item to add", item);
      $scope.items.splice(ind,1);
    })
    .catch(err=>{
    console.log("error: ", err );
    });
    }*/

    //$scope.storage.items.push(item);
  };



});


app.controller('byRoomItemsCtrl', function($scope, $stateParams){
  console.log("byRoomItemsCtrl");
  console.log('$stateParams:', $stateParams);
});

