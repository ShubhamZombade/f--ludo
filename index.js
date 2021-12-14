var score1=0, score2=0;


function logic(){
 var num1= Math.floor(Math.random() * 6) + 1;
 var num2= Math.floor(Math.random() * 6) + 1;

 changeImage('img1', num1);
 changeImage('img2', num2);

score1= score1+num1;
score2= score2+num2;

document.getElementById('name1').innerHTML = 'SHUBHAM score-' + score1;
document.getElementById('name2').innerHTML = 'TUSHAR score-' + score2;


if(score1>30){
 document.getElementById('name1').innerHTML ='SHUBHAM WIN';
 document.getElementById('name2').innerHTML ='';
}
if(score2>30){
 document.getElementById('name1').innerHTML ='TUSHAR WIN';
 document.getElementById('name2').innerHTML ='';
}
}



function changeImage (img,number){

 if (number==1) {
   document.getElementById(img).src = 'image/dice1.png';

 }
 else if(number==2) {
     document.getElementById(img).src = 'image/dice2.png';

   }
 else if(number==3) {
     document.getElementById(img).src = 'image/dice3.png';

   }
 else if(number==4) {
     document.getElementById(img).src = 'image/dice4.png';

   }
 else if(number==5) {
     document.getElementById(img).src = 'image/dice5.png';

  }
 else if(number==6) {
     document.getElementById(img).src = 'image/dice6.png';

   }
   var song1 = new Audio('ASMR_ORAL_SEX_PLUS_CLIMAX_FROM_ONLYFANS(128k) (mp3cut (mp3cut.net).mp3');
   song1.play();


}
