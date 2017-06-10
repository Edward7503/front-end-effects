/**
 * Created by Administrator on 2017/6/7.
 */
// 模块
var app = angular.module('produceSearch',[]);
// 数据服务
app.service('prodoctData',function(){
        return [
            {
                'id':1,
                'name':'GOOGLE GLASS',
                'price':'34000'
            },{
                'id':2,
                'name':'MICROSOFT GLASS',
                'price':'32000'
            },{
                'id':3,
                'name':'IMAC',
                'price':'23000'
            }
        ];
    });
// 控制器
app.controller('produceSearchController',function($scope,prodoctData){
    $scope.items = prodoctData;
    $scope.isUp = false;
    $scope.orderChange = function(type){
        // 控制排序的类型
        $scope.orderType = type;

        // 控制小箭头的升序或降序
        if(!$scope.isUp){
            $scope.isUp = true;
        }else{
            $scope.isUp = false;
        }
    };
});