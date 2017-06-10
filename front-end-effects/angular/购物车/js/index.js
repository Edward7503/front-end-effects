/**
 * Created by Administrator on 2017/6/6.
 */
var store = angular.module("storeModel",[]);
store.controller("storeController",function($scope){
    $scope.items = [
        {'id':1,'name':'Google Glass','count':2,'price':111},
        {'id':2,'name':'iphone6s','count':4,'price':222},
        {'id':3,'name':'iphone6 plus','count':5,'price':333},
        {'id':4,'name':'iphone6s plus','count':14,'price':444},
        {'id':5,'name':'iphone7','count':32,'price':555}
    ];


    // 查找产品的index
    $scope.getIndex = function(id){
        var index = -1;
        angular.forEach($scope.items, function(item,i){
            if($scope.items[i].id == id){
                index = i;
            }
        });
        return index;
    };

    // 减少购买数量
    $scope.reduce = function(id){
        var index = $scope.getIndex(id);
        if(index != -1){
            if($scope.items[index].count >1){
                $scope.items[index].count--;
            }else{
                var rm = confirm('确定删除所选商品');
                if(rm){
                    $scope.remove(id);
                }
            }
        }
    };

    // 移出某一个产品
    $scope.remove = function(id){
        var index = $scope.getIndex(id);
        $scope.items.splice(index,1);
    };

    // 添加购买数量
    $scope.add =function(id){
        var index = $scope.getIndex(id);
        if(index != -1){
            $scope.items[index].count++;
        }
    }

    // 购买总计
    $scope.totalPrice = function(){
        var total = 0;
        angular.forEach($scope.items,function(item){
            total += item.price*item.count;
        })
        return total;
    }

    // 购买总数
    $scope.totalCount = function(){
        var total = 0;
        angular.forEach($scope.items,function(item){
            total += item.count;
        })
        return total;
    }

});