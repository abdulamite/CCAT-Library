// The app code block is used to laod the books into books variable so that it may be used by angular
var app = angular
          .module("myModule",[])
          .controller("myController",function($scope){
            $scope.books = bound;
          });
