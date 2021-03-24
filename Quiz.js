class Quiz {
    constructor(){

    }
    display(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
}
update(){
    database.ref('/').update({
        gameState: state
    });
}
async start(){
    if (gameState === 0){
        contestant = new Contestant();
        var contestantRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
    }
    question = new Question();
    question.display();
}
play(){
    question.hide();
    background("yellow");
    textSize(20);
    text("RESULTS",450,150);
    text("CORRECT ANSWER: '1",400,200);
    Contestant.getContestantInfo();
    if(allContestants ; ==undefined){
        var displayPosition = 100;
        for(var plr in allcontestants) {

    displayPosition+=30;
if (allContestants{plr}.answer==="1"){
    fill("green");
}   else{
    fill("red");
}
textSize(20);
text(allcontestants{plr}.name+":"+ allContestants{plr}.answer,120,displayPosition);
        }
    }
}