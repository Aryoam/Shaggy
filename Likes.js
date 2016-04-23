var t = require('taringajs');
var _ = require('lodash');
var taringa = new t('aryoamgames', 'altoke');

taringa.on('logged', function() {

    LikearShouts();

});

var Unlike=[24466791,27484761,25249009,27683420,11160706,3098012,6623858,26934446,27689307,1218861,27719701,5615036,24281092,25556174,2737427,22904381,2670589,4110364,25824539,3552418,12691060,2681575,3556936,25685246,27080527,7711130,4669526,3321893,24275881,24127722,17835115];


function LikearShouts(){
 
            taringa.request('http://api.taringa.net/shout/public/view', function(err,response,body){
                    shout = JSON.parse(body);

                if(err){
                    console.log(err);
                }

for(i=0; i<3; i++){

    var str = shout[i].body.toLowerCase();
    var n = str.indexOf("aryoamgames");
    var a = str.indexOf("pasate");
    var b = str.indexOf("pásate");
    var g = str.indexOf("hola");
 //   var h = str.indexOf("taringaon");

    var comando = str.split(" ");

    var x = str.indexOf("1");

                  if((g != -1) || (h != -1)){
                    taringa.shout.add_comment ("Hola "+shout[i].owner.nick, shout[i].id , shout[i].owner.id , "shout")
                  }
                  if((n != -1 && a != -1 && x < 0) || (n != -1 && b != -1 && x < 0)){
                    taringa.shout.add_comment ("Ingresa un ID valido", shout[i].id , shout[i].owner.id , "shout")
                  }else if((n != -1 && a!= -1 ) || (n != -1 && b!= -1 )){
                    taringa.shout.add_comment (":buenpost:", comando[2] , shout[i].owner.id , "post")
                    taringa.shout.add_comment ("Listo Gato", shout[i].id , shout[i].owner.id , "shout")                    
                  }else if(n != -1){
                       taringa.shout.add_comment ("Hola Papu \n [img=https://k60.kn3.net/2/C/9/0/9/3/88F.gif]", shout[i].id , shout[i].owner.id , "shout")
                  }

          if(_.includes(Unlike,shout[i].owner.id)){
            console.log("[",shout[i].owner.nick,"]","Este usuario no quiere ser likeado");           
            i++;
          }
                    taringa.shout.like(shout[i].id, shout[i].owner.id)

/**
                   if(shout[i].attachment == null){ 
                        console.log("--> likeaste un shout de -->[", shout[i].owner.nick ,"]");
                   }else if(shout[i].attachment.type == 'image'){
                        console.log("--> likeaste una imagen de -->[", shout[i].owner.nick ,"]");                   
                   }else if(shout[i].attachment.type == 'link'){
                        console.log("--> likeaste un enlace de -->[", shout[i].owner.nick ,"]");
                   }else{
                        console.log("--> likeaste un video de -->[", shout[i].owner.nick ,"]");
                   }      
**/

}  //Cerramos el for                      
           });    //Cerramos request           

         setTimeout(LikearShouts, 9 * 1000)
}      //Cerramos funcion principal  

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));
//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'OnLine'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('Bot Iniciado', app.get('port'));
});