var app = angular.module('menu', ['ngAnimate']);

app.controller('menuCtrl', function($scope){
  $scope.menuValue = false;
  $scope.contentValue = false;
  $scope.menuShow = function(){
    $scope.menuValue = true;
  };
  $scope.menuClear = function(){
    $scope.menuValue = false;
  };
});

app.controller('contentChange', function($scope){

  $scope.backHome = function(){
$scope.contentValue = false;
  };

  $scope.fitnessContent = function(){
    $scope.contentValue = false;
    $scope.profession = "Fitness Model & Personal Trainer"
    $scope.title = "Fitness & Fashion";
    $scope.graphic = "../Images/Fitness & Fashion/menatBackFlex.jpg";
    $scope.paragraph1 = "Personal trainer, fitness enthusiast & fitness model";
    $scope.paragraph2 = "I'm not currently taking clients for online personal training. However;";
    $scope.paragraph3 = "It is still worth contacting me for advice, enquiries or a chat!";
    $scope.paragraph4 = "Feel free to e-mail me at menatpink@gmail.com.";
    if($scope.contentValue == false){
      $scope.contentValue = true;
    };
  };
  $scope.musicContent = function(){
    $scope.contentValue = false;
    $scope.profession = "Session Musician";
    $scope.title = "Music";
    $scope.graphic = "../Images/MusicSlide/QueensHead.jpg";
    $scope.paragraph1 = "Self-taught bassist; also proficient in vocals, guitar and drums.";
    $scope.paragraph2 = "Lead singer of a local cover band IMPACT: EDM, House & Dance.";
    $scope.paragraph3 = "Solo acoustic artist, performing in the thanet area.";
    $scope.paragraph4 = "For contact about bookings, send an e-mail to menatpink@gmail.com, or use one of the social platforms below.";
    if($scope.contentValue == false){
      $scope.contentValue = true;
    }
  };
  $scope.codeContent = function(){
    $scope.contentValue = false;
    $scope.profession = "Front-End Web Developer";
    $scope.title = "Code"
    $scope.graphic= "";
    $scope.paragraph1 = "Self-taught front- end web developer with 2 years of experience";
    $scope.paragraph2 = "Proficient in HTML5/CSS/Bootstrap/Javascript/Jquery/AngularJS/PHP/Adobe Photoshop and Illustrator.";
    $scope.paragraph3 = "I am currently taking on web development projects.";
    $scope.paragraph4 = "If interested, e-mail me at menatpink@gmail.com.";
    if($scope.contentValue == false){
      $scope.contentValue = true;
    }
  };
});
