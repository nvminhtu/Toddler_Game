app.factory('Levels', function() {
  // Might use a resource here that returns a JSON array
  var levels = [{
    id: 1,
    name: 'Level 1',
    pic: 'img/sc-01.png',
    lvpic: 'img/level/level-01.png',
    lvpiclock: 'img/level/level-01-lock.png'
  }, {
    id: 2,
    name: 'Level 2',
    pic: 'img/sc-02.png',
    lvpic: 'img/level/level-02.png',
    lvpiclock: 'img/level/level-02-lock.png'
  }, {
    id: 3,
    name: 'Level 3',
    pic: 'img/sc-03.png',
    lvpic: 'img/level/level-03.png',
    lvpiclock: 'img/level/level-03-lock.png'
  }, {
    id: 4,
    name: 'Level 4',
    pic: 'img/sc-04.png',
    lvpic: 'img/level/level-04.png',
    lvpiclock: 'img/level/level-04-lock.png'
  }, {
    id: 5,
    name: 'Level 5',
    pic: 'img/sc-05.png',
    lvpic: 'img/level/level-05.png',
    lvpiclock: 'img/level/level-05-lock.png'
  }, {
    id: 6,
    name: 'Level 6',
    pic: 'img/sc-06.png',
    lvpic: 'img/level/level-06.png',
    lvpiclock: 'img/level/level-06-lock.png'
  }];

  return {
    all: function() {
      return levels;
    },
    remove: function(chat) {
      levels.splice(levels.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < levels.length; i++) {
        if (levels[i].id === parseInt(chatId)) {
          return levels[i];
        }
      }
      return null;
    }
  };
});

// setup LocalStorate for storing levels and settings
app.factory('CacheService', [
  'localStorageService',

  function (localStorageService) {
    var CacheService = {
      get: function (key) {
        return localStorageService.get(key)
      },
      set: function (key, value) {
        localStorageService.set(key, value)
      },
    }
    return CacheService
  }
]);
