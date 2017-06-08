/**
 * Created by Administrator on 2017/6/7.
 */
var myApp=angular.module("myApp",[]);
myApp.controller("cartController",function($scope){
        $scope.cart=[
            {
                id:1,
                name:"李白",
                num:5,
                price:18888
            },
            {
                id:2,
                name:"后裔",
                num:8,
                price:13888
            },
            {
                id:3,
                name:"妲己",
                num:15,
                price:8888
            },
            {
                id:4,
                name:"貂蝉",
                num:50,
                price:5888
            }
        ];

    //��加一
    $scope.added=function(id){
        var index=$scope.findIndex(id);
        if(index!= -1){
            $scope.cart[index].num++
        }
    };

    //��减-
    $scope.dec=function(id){
        var index=$scope.findIndex(id);
        if(index!=-1){
            --$scope.cart[index].num;
            if($scope.cart[index].num==0){
                var x=confirm("你要移除此商品吗");
                if(x){
                    $scope.cart.splice(index,1)
                }
            }
        }

    };

    //�移除
    $scope.remove=function(id){
        var index=$scope.findIndex(id);
        $scope.cart.splice(index,1)
    };
    //总数量����
    $scope.num=function(){
        var num=0;
        angular.forEach($scope.cart,function(item){
            num+=item.num;
        });
        return num
    };
    //总价格
    $scope.prices=function(){
        var num=0;
        angular.forEach($scope.cart,function(item){
            num+=item.num*item.price;
        });
        return num
    };
    //清空购物车�ﳵ
     $scope.myVar=false;
    $scope.myVar1=true;
    $scope.hidden=function(){
        $scope.cart=[];
        $scope.myVar = !$scope.myVar;
        $scope.myVar1 = !$scope.myVar1;
    };
    //通过id名查找index
    $scope.findIndex=function(id){
        var index=-1;
        angular.forEach( $scope.cart,function(item,i){
            if( $scope.cart[i].id == id){
                 index = i
            }
        });
        return index;
    }


    });