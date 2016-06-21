// Model Logic 
// 1. Factory
// 2. Service
module.factory("greetfactory",function(){
   // Here We Write Logic (Model) 
    // Factory is Like a Function and it returns always
    var object = {
      initCap:function(name){
          return name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
      }  
    };
    return object;
});