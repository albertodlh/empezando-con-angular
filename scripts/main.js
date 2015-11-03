(function(){
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
      image: 'http://cinergetica.com.mx/wp-content/uploads/2012/04/hulk-wallpaper-avengers.jpg'
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

  var app = angular.module('prueba', []);

  app.controller('TestCtrl', [function(){
    var selectedAvengerId = 0;
    this.avengers = avengers;

    this.selectAvenger = function(inx){
      selectedAvengerId = inx;
    };

    this.selectedAvenger = function(){
      return this.avengers[selectedAvengerId];
    };
  }]);

})();


