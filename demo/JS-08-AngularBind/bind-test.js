var app = angular.module("test", []);
// 子
app.directive("increasea", function() {

    return function (scope, element, attr) {
        element.on("click", function() {
            scope.a++;
            scope.$digest();
            // scope.$apply();
        });
    };
    
});
// 父
app.directive("increaseb", function() {
    return function (scope, element, attr) {
        element.on("click", function() {
            scope.b++;
            // digest只触发当前作用域及其子作用域上的监控。
            scope.$digest();
            // apply触发所有作用域树上的监控。
            // scope.$apply();
        });
    };
});

app.controller("OuterCtrl", ["$scope", function($scope) {
    $scope.a = 1;

    $scope.$watch("a", function(newVal) {
        console.log("父a:" + newVal);
    });

    $scope.$on("test", function(evt) {
        $scope.a++;
        console.log("点击b后a="+$scope.a);
    });
}]);
// 子
app.controller("InnerCtrl", ["$scope", function($scope) {
    $scope.b = 2;

    $scope.$watch("b", function(newVal) {
        console.log("子b:" + newVal);
        $scope.$emit("test", newVal);
    });
}]);