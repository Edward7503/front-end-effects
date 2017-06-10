/**
 * Created by Administrator on 2017/6/9.
 */
var app = angular.module('studentScope',[]);
app.service('studentData',function(){
        return [
            {
                'id':1,
                'name':'袁老',
                'age':18,
                'class':'hzit',
                'Chinese':100,
                'Math':99,
                'English':98
            },{
                'id':2,
                'name':'罗老',
                'age':18,
                'class':'hzit',
                'Chinese':100,
                'Math':99,
                'English':98
            },{
                'id':3,
                'name':'黄老',
                'age':18,
                'class':'hzit',
                'Chinese':100,
                'Math':99,
                'English':98
            },{
                'id':4,
                'name':'陈老',
                'age':18,
                'class':'hzit',
                'Chinese':100,
                'Math':99,
                'English':98
            },{
                'id':5,
                'name':'方老',
                'age':18,
                'class':'hzit',
                'Chinese':100,
                'Math':99,
                'English':98
            },{
                'id':6,
                'name':'曾老',
                'age':18,
                'class':'hzit',
                'Chinese':100,
                'Math':99,
                'English':98
            }
        ]
    });

app.controller('studentScopeController',['$scope','studentData',function($scope,studentData){
    // 允许使用Math方法
    //$scope.Math = window.Math;
    $scope.persons = studentData;

    // 获取index
    $scope.getIndex = function(id){
        var index = 0;
        angular.forEach($scope.persons,function(item,i){
            if($scope.persons[i].id == id){
                    index = i;
                }
            });
            return index;
        };

    // 操作分数
    $scope.addScope = function(id,subject){
        var index = $scope.getIndex(id);
        if(index != -1){
            $scope.persons[index][subject]++;
        }
    };
    $scope.reduceScope = function(id,subject){
        var index = $scope.getIndex(id);
        if(index != -1){
            $scope.persons[index][subject]--;
        }
    };


    // 删除某一个学生
    $scope.remove = function(id){
        var index = $scope.getIndex(id);
        if(index != -1){
            $scope.persons.splice(index,1);
        }
    };

    // 语文平均分
    $scope.subAvg = function(sub){
        var subsAvg = 0;
        angular.forEach($scope.persons,function(stu){
            subsAvg += stu[sub];
        });
        return (subsAvg/$scope.persons.length).toFixed(2);
    };

    // 总平均分
    $scope.allScope = function(){
        var total=0;
        angular.forEach($scope.persons, function(stu,i){
            total += stu.Chinese + stu.Math + stu.English;
        });
        total = (total/($scope.persons.length*3)).toFixed(2);
        return total;
    };

    // 添加数据
    var isPush = true;
    $scope.addInfo = function(){
        if(isPush){
            $scope.modalTitle = "添加学生成绩";
            var info = {
                'id':$scope.persons.length+1,
                'name':$scope.name,
                'age':parseFloat($scope.age),
                'class':$scope.class,
                'Chinese':parseFloat($scope.Chinese),
                'Math':parseFloat($scope.Math),
                'English':parseFloat($scope.English)
            };
            $scope.persons.push(info);
        }else{
            $scope.modalTitle = "编辑学生成绩";
            var editData = {
                'id':$scope.persons.length+1,
                'name':$scope.name,
                'age':parseFloat($scope.age),
                'class':$scope.class,
                'Chinese':parseFloat($scope.Chinese),
                'Math':parseFloat($scope.Math),
                'English':parseFloat($scope.English)
            };
            $scope.persons.splice(editIndex,1,editData);
            isPush = true;
        }
    };

    // 编辑数据
    var editIndex = 0;
    $scope.editeData = function(id){
        isPush = false;
        var index = $scope.getIndex(id);
        editIndex = index;
        if(index != -1){
            $scope.id = $scope.persons[index].id;
            $scope.name = $scope.persons[index].name;
            $scope.age = $scope.persons[index].age;
            $scope.class = $scope.persons[index].class;
            $scope.Chinese = $scope.persons[index].Chinese;
            $scope.Math = $scope.persons[index].Math;
            $scope.English = $scope.persons[index].English;
        }
    }
}]);
