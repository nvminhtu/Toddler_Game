
/**
 * Func1.1: Advanced sliding puzzle controller
 */
app.controller('slidingAdvancedCtrl', function($scope, CacheService, $state, $ionicPopup, Levels, $window) {
    
    var puzzles =  [
      { src: './img/sc-01.png', title: 'Christmas', rows: 3, cols: 3 , level: 1 }
    ];
    $scope.puzzles = puzzles;

    var 
      theme = CacheService.get('theme'),
      gotLevel = CacheService.get('gotLevel'),
      level = CacheService.get('level');
      
    // variables: Setup store data for theme and level
    $scope.theme = theme;
    $scope.level = level;
    $scope.gotLevel = gotLevel;
    $scope.isRefer = false;

    // variables: Loading Level Data to Ctrl
    $scope.levels = Levels.all();
    $scope.maxLevel = $scope.levels.length;

    $scope.setTheme = function(theme, mLevel){
      CacheService.set('theme', theme);
      CacheService.set('level', mLevel);
      $scope.theme = theme;
      $state.go('screenplay', {}, {reload: true});
    }

    $scope.setItemTheme = function(theme, mLevel){
      var nextLevel = parseInt(mLevel) + 1 ;
      CacheService.set('theme', theme);
      CacheService.set('level', nextLevel);
      $scope.theme = theme;
      $scope.level = nextLevel;
      // increase gotLevel by SlidingPuzzle directive
      // document.getElementById('finishscr').style.display = "none";
      $state.go('screenplay', {}, {reload: true});
    }

    $scope.openReference = function(){
      $scope.isRefer = true;
    }
    
    $scope.closeReference = function(){
      $scope.isRefer = false;
    }

    $scope.reloadPage = function(){
      window.location.reload();
    }

    $scope.setLevel = function(mlevel){
      CacheService.set('level',mlevel);
    }
    
    // Func: An alert dialog
    $scope.showAlert = function(){
      var alertPopup = $ionicPopup.alert({
        title: 'This level is blocked now!',
        template: 'You must finish previous level!'
      });

      alertPopup.then(function(res) {
      });
    };

    // Func: Exit App
    $scope.exitApp = function(){
      ionic.Platform.exitApp();
    };
 
});

/**
 * Func1.2: Word search puzzle controller
 */
app.controller('wordSearchCtrl', function($scope) {
    $scope.matrix = [
        ['N', 'I', 'G', 'O', 'R', 'Y', 'G', 'S', 'T', 'T', 'A', 'N'],
        ['O', 'G', 'G', 'U', 'L', 'C', 'O', 'E', 'P', 'E', 'A', 'S'],
        ['I', 'N', 'N', 'R', 'M', 'N', 'O', 'R', 'I', 'M', 'E', 'C'],
        ['T', 'I', 'A', 'I', 'O', 'E', 'G', 'V', 'R', 'P', 'V', 'E'],
        ['C', 'T', 'T', 'E', 'D', 'D', 'L', 'I', 'C', 'L', 'I', 'N'],
        ['E', 'S', 'J', 'P', 'U', 'N', 'E', 'C', 'S', 'A', 'T', 'A'],
        ['J', 'E', 'O', 'O', 'L', 'E', 'I', 'E', 'A', 'T', 'C', 'R'],
        ['N', 'T', 'V', 'C', 'E', 'P', 'J', 'B', 'V', 'E', 'E', 'I'],
        ['I', 'S', 'I', 'S', 'S', 'E', 'S', 'A', 'A', 'W', 'R', 'O'],
        ['O', 'K', 'S', 'I', 'M', 'D', 'E', 'S', 'J', 'O', 'I', 'M'],
        ['R', 'E', 'L', 'L', 'O', 'R', 'T', 'N', 'O', 'C', 'D', 'E']
    ];
    $scope.words = [
        'BINDING', 'CONTROLLER', 'DEPENDENCY', 'DIRECTIVE', 'GOOGLE', 'IGOR', 'INJECTION', 'JAVASCRIPT',
        'MISKO', 'MODULES', 'SCENARIO', 'SCOPE', 'SERVICE', 'TEMPLATE', 'TESTING', 'VOJTA'
    ];
});

/**
 * Func2: Account Controller
 */
app.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

app.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
});

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
