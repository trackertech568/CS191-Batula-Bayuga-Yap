angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [ {
    id: 0,
    name: 'March 18, 2016',
    lastText: '',
  }, {
    id: 1,
    name: 'December 23, 2016',
    lastText: 'Meeting with the commander',
  }, {
    id: 2,
    name: 'April 1, 2017',
    lastText: 'I should buy a boat',
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
