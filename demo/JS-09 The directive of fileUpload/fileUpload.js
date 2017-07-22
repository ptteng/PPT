var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function ($scope) {

});

myApp.directive('imgUpload', function ($http) {
    return {
        restrict: 'AEC',
        replace: true,
        transclude: true,
        templateUrl: "imgLoad.html",
        link: function (scope, ele, attr) {

            scope.imgFile = document.getElementById('imgFile');
            scope.img = document.getElementById('img');
            scope.progress='';

            scope.imgFile.onchange = function () {
                if(scope.imgFile.files[0].size>=2000000){
                    alert('图片大小超限~')
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(scope.imgFile.files[0]);

                    scope.$apply(function () {
                        scope.hasImg = scope.imgFile.files[0];
                        scope.name = scope.imgFile.files[0].name;
                        scope.size = scope.imgFile.files[0].size > 1024 * 1024 ? (scope.imgFile.files[0].size / 1024 / 1024).toFixed(2) + 'MB' : (scope.imgFile.files[0].size / 1024).toFixed(2) + 'KB';
                    })
                }
            };

            scope.delete = function () {
                scope.img.src = '';
                scope.hasImg = false;
                scope.upDisabled = false;
            };

            scope.upLoad = function () {
                $http({
                    method: 'post',
                    url: '/carrots-admin-ajax/a/u/img/task',
                    headers: {'content-type': undefined},
                    uploadEventHandlers:{
                        progress: function(e) {
                            if (e.lengthComputable) {
                                scope.progress = Math.round(e.loaded * 100 / e.total);
                            }
                        }
                    },
                    transformRequest: function () {
                        var formData = new FormData();
                        formData.append('file', scope.hasImg);
                        return formData;
                    }
                }).then(function successCallback(res) {
                    scope.status = res.data.message;
                    scope.src = res.data.data.url;
                    scope.upDisabled = true;
                },function errorCallback(res) {
                    scope.status = res.data.message;
                    scope.upDisabled = true;
                })
            }
        }
    };
});