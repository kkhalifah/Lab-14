(function() { // <-- It's an IIFE
var app = angular.module("megaApp", ["ngRoute"]); // create the module

// TODO Set up routing.
    app.config(function($routeProvider){
      $routeProvider.when("/cat", {
        //object literal
        templateUrl: "view/cat.html"
      })
      // #!/band --> band-members.html view and bandMembersController

      .when("/dog", {
        templateUrl: "view/dog.html",
        // controller: "bandMembersController"
      }).otherwise({
        template: '<img src="images/spider.jpg" alt="spider">'
      })

    });
// #!/madlib --> madlib.html views


// Otherwise, display "Please select one of the links above."



})();
