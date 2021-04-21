//self-executing anynonymos function
//Imediatlry Invoked Function Expression
//let host to declaration and puts it in the spot
//let myGlobalVaribale = 0;
"use strict";
(function(){ 
    //let start = function
      function Start(){
        let myGlobalVaribale = 0;
          //Template strength, inject the value of opertation
          console.log(`App Started ...${myGlobalVaribale}`);
      }

      //inline function 

      window.addEventListener("load", Start)
})();