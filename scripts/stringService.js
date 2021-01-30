myApp.factory('stringService',function(){

   return  {
       processString : function(input) {
        return input.split('').map((x,i) => {
            if (x == ' ' && input[i]){
                return   input[i+1].toUpperCase()
            }   
            return x 
        }
        ).join('')
       }
   }

})