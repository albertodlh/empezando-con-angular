(function(){
  angular.module('avengers', []);

  angular.module('avengers').factory('avengerFactory', [function(){
    var avengers = [
      {
        name: 'Captain America',
        real_name: 'Steve Rogers',
        image: 'http://img3.wikia.nocookie.net/__cb20120523070608/disney/images/1/12/Captain_America_Face.jpg'
      },
      {
        name: 'Iron Man',
        real_name: 'Tony Stark',
        image: 'http://cdn.instructables.com/FFV/Y7ZI/FGUEUPUO/FFVY7ZIFGUEUPUO.SMALL.jpg'
      },
      {
        name: 'Thor',
        real_name: 'Thor Odinson',
        image: 'http://images.sodahead.com/profiles/0/0/3/5/5/0/0/7/7/Chris-Hemsworth-as-Thor-98902165933.jpeg'
      },
      {
        name: 'The Hulk',
        real_name: 'Bruce Banner',
        image: 'http://i0.wp.com/www.cgmeetup.net/home/wp-content/uploads/2013/01/Hulk-face-13.jpg?resize=1280%2C720'
      },
      {
        name: 'Hawkeye',
        real_name: 'Clint Barton',
        image: 'http://i.newsarama.com/images/i/000/144/155/i02/Hawkeye_AAoU.jpg?1425313998'
      },
      {
        name: 'Black Widow',
        real_name: 'Natasha Romanova',
        image: 'http://www.tales2astonish.com/wp-content/uploads/04_AvengerCountdownBlackWidow.jpg'
      },
    ];
    return {
      getAvengers: function(){
        return avengers;
      },
      removeAvenger: function(inx){
        avengers.splice(inx, 1);
      },
      createAvenger: function(newAvenger){
        avengers.push(newAvenger);
      }
    };
  }]);

  angular.module('avengers').component('avengerReport', {
    templateUrl: '/scripts/templates/avenger_report_template.html',
    controller: ['$scope', 'avengerFactory', function($scope, avengerFactory){
      this.avengers = avengerFactory.getAvengers();
      this.selectAvenger = function(name){
        $scope.displayCtrl.avengerFilter = name;
      };
      this.removeAvenger = function(inx){
        avengerFactory.removeAvenger(inx);
      };
    }],
    controllerAs: 'reportCtrl'
  });

  angular.module('avengers').directive('avengerDisplay', ['avengerFactory', function(avengerFactory){
    return {
      restrict: 'E',
      templateUrl: '/scripts/templates/avenger_display_template.html',
      controller: function($scope){
        this.avengerFilter = '';
        this.avengers = avengerFactory.getAvengers();
        this.removeAvenger = function(inx){
          avengerFactory.removeAvenger(inx);
        };
      },
      controllerAs: 'displayCtrl'
    };
  }]);

  angular.module('avengers').directive('avengerCreate', ['avengerFactory', function(avengerFactory){
    return {
      restrict: 'E',
      templateUrl: '/scripts/templates/avenger_create_template.html',
      controller: function($scope){
        var _this = this;
        this.newAvenger = {
          name: '',
          real_name: '',
          image: ''
        };
        this.createAvenger = function(){
          avengerFactory.createAvenger(_this.newAvenger);
          this.newAvenger = {
            name: '',
            real_name: '',
            image: ''
          };
        };
      },
      controllerAs: 'createCtrl'
    };
  }]);
})();


