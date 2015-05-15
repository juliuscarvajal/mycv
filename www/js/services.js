angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Julius Carvajal',
    lastText: 'You on your way?',
    face: 'http://graph.facebook.com/v2.3/julius.carvajal/picture' //'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Athena Carvajal',
    lastText: 'Hey, it\'s me',
    face: 'http://graph.facebook.com/v2.3/athena.carvajal/picture'
    //'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Juliana Carvajal',
    lastText: 'I should buy a boat',
    face: 'http://graph.facebook.com/v2.3/juliana.g.carvajal/picture' //'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Usana',
    lastText: 'Look at my mukluks!',
    face: 'http://graph.facebook.com/v2.3/julius.usana/picture' //'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'Jonathan Garsano',
    lastText: 'This is wicked good ice cream.',
    face: 'http://graph.facebook.com/v2.3/jogarz.garz/picture' //'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
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
