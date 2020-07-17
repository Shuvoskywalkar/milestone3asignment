        //!!feetToMile Calculator!!//

        function feetToMile(feetvalue) {
          result=feetvalue*0.000189393939
          return result
      }
      input=feetToMile();
      
      console.log(input)
      
         //!!woodCalculator!!//    
      
      function woodCalculator(numberofchairs,numberoftables,numberofbeds) {
          var bricksofchairs=numberofchairs*1 //cubic feet//;
          var bricksoftables=numberoftables*3 //cubic feet//;
          var bricksofbeds=numberofbeds*5 //cubic feet//;
          var totalbricks=bricksofchairs+bricksoftables+bricksofbeds
          return totalbricks
      }
      input=woodCalculator()
      console.log(input)
         
        ///!!!brickCalculator!!!///
      
      function brickCalculator(numberofFloor) {
          var firstTenFloor=10;
          var tenToTwentyFloor;
          var moreThanTwentyFloor;
          if (numberofFloor<=0) {
           return 'Number of floor must have be greater than zero'  
          } else{
            if (numberofFloor<=10) {
              firstTenFloor=numberofFloor;
              return firstTenFloor *15*1000;
               } else if((numberofFloor>10)&&(numberofFloor<=20)) {
                 tenToTwentyFloor=numberofFloor;
                return((firstTenFloor*15*1000)+(tenToTwentyFloor*12*1000));
              } else if(numberofFloor>20){
                tenToTwentyFloor=10;
                moreThanTwentyFloor=numberofFloor-20;
                return((firstTenFloor*15*1000)+(tenToTwentyFloor*12*1000)+(moreThanTwentyFloor*10*1000))
              }
          } 
          }
          input=brickCalculator();
          console.log(input)
          
        //!!!!tinyFriend!!!!////
       
      function tinyFriend(friendlist){
      
        var tiny =friendlist[0];
        for(var i=0; i<friendlist.length; i++){
        var element = friendlist[i];
        if(element.length < tiny.length){
        tiny = element;
        
        }
        }
        
        return tiny;
        }
        
        var friendsList = [];
        
        console.log(tinyFriend(friendsList))