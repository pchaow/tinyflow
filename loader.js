/**
 * Created by chaow on 4/12/2015 AD.
 */
angular.module('AppConfig', [])
    .config(function ($httpProvider, $provide) {
        $provide.factory('httpInterceptor', function ($q, $rootScope) {
            return {
                'request': function (config) {
                    // intercept and change config: e.g. change the URL
                    // config.url += '?nocache=' + (new Date()).getTime();
                    // broadcasting 'httpRequest' event
                    $rootScope.$broadcast('httpRequest', config);
                    return config || $q.when(config);
                },
                'response': function (response) {
                    // we can intercept and change response here...
                    // broadcasting 'httpResponse' event
                    $rootScope.$broadcast('httpResponse', response);
                    return response || $q.when(response);
                },
                'requestError': function (rejection) {
                    // broadcasting 'httpRequestError' event
                    $rootScope.$broadcast('httpRequestError', rejection);
                    return $q.reject(rejection);
                },
                'responseError': function (rejection) {
                    // broadcasting 'httpResponseError' event
                    $rootScope.$broadcast('httpResponseError', rejection);
                    return $q.reject(rejection);
                }
            };
        });
        $httpProvider.interceptors.push('httpInterceptor');
    })
    .controller('loadCtrl', function ($scope) {

        $scope.active = false;

        $scope.$on('httpRequest', function (e) {
            $scope.active = true;
        });
        $scope.$on('httpResponse', function (e) {
            $scope.active = false;
        });
        $scope.$on('httpRequestError', function (e) {
            $scope.active = false;
        });
        $scope.$on('httpResponseError', function (e) {
            $scope.active = false;
        });
    })