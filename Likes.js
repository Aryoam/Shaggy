var t = require('taringajs');
var taringa = new t('aryoamgames', 'altoke');

taringa.on('logged', function() {

		LikearShouts();

});

i = 0;
j = 1;
function LikearShouts(){
 

          	taringa.shout.getshouts( function(err, shout){

                if(err){
                    console.log(err);
                }
for(i=0; i<3; i++){
var str = shout[i].body;
var n = str.indexOf("aryoamgames");
var m = str.indexOf("Aryoamgames");
var a = str.indexOf("pasate");
var b = str.indexOf("pásate");


var buffer_completo = new Buffer(shout[i].body);
var buffer_small = buffer_completo.slice(18, 30);
var buffer_smallll = buffer_completo.slice(19, 30);
//console.log(buffer_small.toString());



                  if(n != -1 && a != -1){
                    taringa.shout.add_comment (":buenpost:", buffer_small.toString() , shout[i].owner.id , "post")
                    taringa.shout.add_comment ("Listo Gato", shout[i].id , shout[i].owner.id , "shout")                    
                  }else if(m != -1 && a!= -1){
                    taringa.shout.add_comment (":buenpost:", buffer_small.toString() , shout[i].owner.id , "post") 
                    taringa.shout.add_comment ("Listo Gato", shout[i].id , shout[i].owner.id , "shout")                   
                  }else if(n != -1 && b!= -1){
                    taringa.shout.add_comment (":buenpost:", buffer_smallll.toString() , shout[i].owner.id , "post") 
                    taringa.shout.add_comment ("Listo Gato", shout[i].id , shout[i].owner.id , "shout")      
                  }else if(m != -1 && b!= -1){
                    taringa.shout.add_comment (":buenpost:", buffer_smallll.toString() , shout[i].owner.id , "post") 
                    taringa.shout.add_comment ("Listo Gato", shout[i].id , shout[i].owner.id , "shout")      
                  }else if(n != -1){
                       taringa.shout.add_comment ("Hola Papu \n [img=https://k60.kn3.net/2/C/9/0/9/3/88F.gif]", shout[i].id , shout[i].owner.id , "shout")
                  }else if(m != -1){
                       taringa.shout.add_comment ("Hola Papu \n [img=https://k60.kn3.net/2/C/9/0/9/3/88F.gif]", shout[i].id , shout[i].owner.id , "shout")                       
                  }


          if((shout[i].owner.id == '24466791') || (shout[i].owner.id == '27484761') || (shout[i].owner.id == '25249009') || (shout[i].owner.id == '27683420') || (shout[i].owner.id == '11160706') || (shout[i].owner.id == '3098012') || (shout[i].owner.id == '6623858') || (shout[i].owner.id == '26934446') || (shout[i].owner.id == '27689307') || (shout[i].owner.id == '1218861') || (shout[i].owner.id == '27719701') || (shout[i].owner.id == '5615036') || (shout[i].owner.id == '24281092') || (shout[i].owner.id == '25556174') || (shout[i].owner.id == '2737427') || (shout[i].owner.id == '22904381') || (shout[i].owner.id == '2670589') || (shout[i].owner.id == '4110364') || (shout[i].owner.id == '25824539') || (shout[i].owner.id == '3552418') || (shout[i].owner.id == '12691060') || (shout[i].owner.id == '2681575') || (shout[i].owner.id == '3556936') || (shout[i].owner.id == '25685246') || (shout[i].owner.id == '27080527') || (shout[i].owner.id == '7711130') || (shout[i].owner.id == '4669526') || (shout[i].owner.id == '000000') || (shout[i].owner.id == '00000') || (shout[i].owner.id == '0000') || (shout[i].owner.id == '000') || (shout[i].owner.id == '00') || (shout[i].owner.id == '0')){
            console.log("[",shout[i].owner.nick,"]","Este usuario no quiere ser likeado");           
            i++;
          }
                    taringa.shout.like(shout[i].id, shout[i].owner.id)

                 	 if(shout[i].attachment == null){ 
                 	 	console.log(j,"--> likeaste un shout de -->[", shout[i].owner.nick ,"]");
                 	 }

                	 else if(shout[i].attachment.type == 'image'){
               	        console.log(j,"--> likeaste una imagen de -->[", shout[i].owner.nick ,"]");                   
                     }

                     else if(shout[i].attachment.type == 'link'){
                        console.log(j,"--> likeaste un enlace de -->[", shout[i].owner.nick ,"]");
                     }

                     else{
                        console.log(j,"--> likeaste un video de -->[", shout[i].owner.nick ,"]");
                     }
          j++;                     
}                      
           });          
            

         setTimeout(LikearShouts, 9000)
}