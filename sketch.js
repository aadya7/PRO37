var canvas;
var gameState=0 , contestantCount, database, quiz, question, contestant;
var allContestants =[];

function setup(){
  canvas = createCanvas(900,500);
database=firebase.database()
  
quiz = new Quiz ();
  quiz.getState();
  quiz.start();
  //question = new Question();

}


function draw(){
  background("pink");
  textSize(25);
  fill(0);
text("Question:- who directed the flim GULLYBOY?",70,140);
textSize(20);
text("Option 1: Zoya Akhtar",100,200);
text("Option 2: Karan Johar",100,250);
text("Option 3: Hardik Mehata",100,300);
text("Option 4: NONE OF THESE",100,350);

if (contestantCount === 4){
  gameState = 1;
}
if (gameState === 1){
  quiz.play();
}
  
}

