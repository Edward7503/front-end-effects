/**
 * Created by Administrator on 2017/6/7.
 */
var myApp=angular.module("myApp",[]);
    myApp.service("data",function(){
            return [
                {
                    id:1357,
                    name:"libai",
                    price:18888
                },
                {
                    id:22323,
                    name:"daji",
                    price:13888
                },
                {
                    id:32223,
                    name:"houyi",
                    price:8888
                },
                {
                    id:4899,
                    name:"diaochan",
                    price:5888
                }
            ]
    });
myApp.controller("cartController",function($scope,data){
    $scope.order = '';
    $scope.cart=data;
    $scope.sort= function(type){
        $scope.myVar=type;
        if($scope.order===""){
            $scope.order = 'up';
        }else{
            $scope.order = '';
        }

    };



});