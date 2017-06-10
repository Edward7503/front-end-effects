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


    // ���Ҳ�Ʒ��index
    $scope.getIndex = function(id){
        var index = -1;
        angular.forEach($scope.items, function(item,i){
            if($scope.items[i].id == id){
                index = i;
            }
        });
        return index;
    };

    // ���ٹ�������
    $scope.reduce = function(id){
        var index = $scope.getIndex(id);
        if(index != -1){
            if($scope.items[index].count >1){
                $scope.items[index].count--;
            }else{
                var rm = confirm('ȷ��ɾ����ѡ��Ʒ');
                if(rm){
                    $scope.remove(id);
                }
            }
        }
    };

    // �Ƴ�ĳһ����Ʒ
    $scope.remove = function(id){
        var index = $scope.getIndex(id);
        $scope.items.splice(index,1);
    };

    // ��ӹ�������
    $scope.add =function(id){
        var index = $scope.getIndex(id);
        if(index != -1){
            $scope.items[index].count++;
        }
    }

    // �����ܼ�
    $scope.totalPrice = function(){
        var total = 0;
        angular.forEach($scope.items,function(item){
            total += item.price*item.count;
        })
        return total;
    }

    // ��������
    $scope.totalCount = function(){
        var total = 0;
        angular.forEach($scope.items,function(item){
            total += item.count;
        })
        return total;
    }

});