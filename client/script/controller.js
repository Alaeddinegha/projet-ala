<<<<<<< HEAD
/*'use strict';
var app=angular.module("myApp",[]);

app.controller('questionsControll',['$scope','monService',function($scope,monService){
=======
'use strict';
var app=angular.module("myApp",[]);
app.controller('questionsController',['$scope','monService',function($scope,monService){
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9

    //console.log('stor')
   // console.log(sessionStorage.user);

   var u=sessionStorage.user;
   console.log('mon id')
   console.log(u);
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        $scope.w="Bienvenu";
     
               
        localStorage.setItem("lastname",$scope.w +"  "+name);
        // Retrieve
        document.getElementById("result").innerHTML =localStorage.getItem( "lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

  
    //initialiser le text d'une reponse et le id de l'utilisateur vide
    $scope.text_resp = '';
        $scope.id_uti ='';
        //initialiser la variable showResponsesTable avec la valeur false
        $scope.showResponsesTable = false;
    monService.getQuestions($scope);
 
               
    
               
   
    
    $scope.responses = '';
    
    //les reponses d'une question 
    $scope.getQuestion = function(id, currentQ){
        //currentQuestion est la question courante
        $scope.currentQuestion = currentQ;
        $scope.showResponsesTable = true;
        monService.getQuestion($scope, id);  
    } 
    //supp
    $scope.delQuestion = function(index, id, currentQ){
        //monService.getQuestions($scope);
        
        if (confirm("vous voulez supprimer?")){
           
            
<<<<<<< HEAD
        monService.delQuestion($scope,index,id)
=======
        monService.delQuestion($scope,index, id)
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
        location.reload();
     }
        
 
    }
<<<<<<< HEAD
    $scope.delR=function(index,id){
        if (confirm("vous voulez supprimer?")){
            monService.delReponse($scope,index,id);
        }
    }
=======
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
    
 //Fonction ajouter une question
    $scope.ajoutques = function () {
        console.log('mes variables')
        console.log($scope.text_ques)
        console.log(u)
        
     monService.sendQuestion($scope,$scope.text_ques, $scope.id_uti );
     alert("Question enregister");
     location.href='questions.html';
        
    }
    //Fonction ajouter une reponse
    $scope.ajoutRep = function () {
        console.log($scope.text_resp)
        console.log($scope.id_uti)
        console.log($scope.id_response)
        
        monService.sendResponse($scope,$scope.text_resp, $scope.id_uti , $scope.id_response);

alert("reponse enregister")
    }

    
  //recuperer mes données dans un init 

    $scope.init = function() {
        console.log('init')
        $scope.showResponsesTable = false;
        
        monService.getQuestions($scope);
        monService.getQuestion($scope, $scope.id_response);
        monService.auto($scope,$scope.user);
    }
$scope.log=function(){
    $scope.con=true;
    
    console.log('utilisateur')
    console.log($scope.user)
    console.log('mot de passe')
    console.log($scope.pw)
    
   monService.auto($scope,$scope.user,$scope.pw);
  
 
}
  

}])
app.controller('searchController', function ($scope, $http) {

    $http({
        method:'GET',
<<<<<<< HEAD
        url:'http://serve/api/questions'
=======
        url:'http://forum/api/questions'
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
    }).then(function successCallback(response) {
        $scope.questions = [];
        $scope.questions = response.data;
    
})
$http({
    method:'GET',
<<<<<<< HEAD
    url:'http://serve/api/question/'+id_temp
=======
    url:'http://forum/api/question/'+id_temp
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
}).then(function successCallback(response) {
    this.question = response.data;
    $scope.responses = response.data;
  });
});
<<<<<<< HEAD
*/
=======

>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
