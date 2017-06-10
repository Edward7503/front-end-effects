/**
 * Created by Administrator on 2017/6/8.
 */
var app = angular.module('myApp',[]);
app.controller('appController',['$scope',function($scope){
    $scope.greet = function(){
        $scope.message = 'hello ' +  $scope.user.name;
    }
    $scope.persons = [
        {
            'name':'Edward',
            'country':'China'
        },{
            'name':'Edward',
            'country':'China'
        },{
            'name':'Edward',
            'country':'China'
        }
    ]
}]);

app.directive('focus',function(){
    return{
        link: function(scope,element,attr){
            element[0].focus();
        }
    }
});

//app.directive('remove',function(){
//    return {
//        link: function(scope,element,attr){
//            element[0].onclick = function(){
//                alert(1);
//            }
//        }
//    }
//});