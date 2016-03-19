angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup) {
   $scope.showPopup = function() {
      $scope.data = {}
      var myPopup = $ionicPopup.show({
         template: '<input type = "date" id="date_id" ng-model = "data.model">',
         title: 'Enter Date',
         scope: $scope,
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Next</b>',
               type: 'button-positive',
                  onTap:  function(e) {
                  	showNextPop(); 
			

                     
                     
                  }
            }
         ]
      });

      myPopup.then(function(res) {
      console.log('Tapped!', res);
      
      });    
   };
   function showNextPop() {
      var myPopup2 = $ionicPopup.show({
         template: '<input type = "time" id="time_id" ng-model = "chat.lastText">',
         title: 'Enter Time',
         scope: $scope,
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
                  onTap: function(e) {
						
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }

                     
                     
                  }
            }
         ]
      });

    myPopup2.then(function(res) {
    console.log('Tapped!', res);
      });    
   };


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});




