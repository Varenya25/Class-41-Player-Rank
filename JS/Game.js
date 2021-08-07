class Game{
    constructor(){

        
    }

    // function getGameState .. reads the gameState from DB
    getGameState () {
        //refer to gameState location in DB
        var gameStateRef = database.ref ("/gameState");
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
                        function(data){
                            gameState = data.val ();
                        }
        );
    }

    // function updateGameState .. updates gameState in the DB
    updateGameState (state) {
        var gameStateRef = database.ref ("/");
        gameStateRef.update ({"gameState" : state}) ;
    }

    // function start
    start () {
        if (gameState == 0) {
            player = new Player ();
            var startCount = player.getPlayerCount ();
            
            form = new Form () ;
            form.display () ;
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Image);
        
        car2 = createSprite(300,200);
        car2.addImage(car2Image);
       
        car3 = createSprite(500,200);
        car3.addImage(car3Image);
       
        car4 = createSprite(700,200);
        car4.addImage(car4Image);
        
        cars =[car1,car2,car3,car4];
    
    }
    play (){
        form.hide()
        textSize(30);
        text("GAME START!", 120, 100);
        Player.getPlayerInfo (); // gets info of all players
        player.getPlayerRank();
        
        if (allPlayers != undefined) {
            background(groundImage);
            image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5 );
            var display_position = 130;
            var index = 0;
            var x1 = 175;
            var y1 = 0;

            for (var plr in allPlayers){
                index = index + 1;
                x1=x1+200;
                y1= displayHeight-allPlayers[plr].distance;
                
                // assign position for car sprites
                cars[index-1].x= x1;
                cars[index-1].y= y1;
/*
                if (plr == "Player"+player.index)
                    fill("red");
                else
                    fill ("black");
  */              
                //marking the player car and setting the camera position
                    if (index == player.index){
                    stroke(10);
                    fill("lightYellow");
                    ellipse(x1, y1, 60, 100);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                //display_position+=20;
                //textSize (15) ;
                //text (allPlayers[plr].Name+": " + allPlayers[plr].distance, 120, display_position);
            }
            if (keyIsDown (UP_ARROW) && player.index != null) {
                player.distance+=10;
                player.updatePlayerNameAndDistance ();
    
            }
            if(player.distance>3860){
                gameState = 2;
                player.playerRank = player.playerRank + 1;
                console.log ("RANK = "+ player.playerRank);
                Player.updatePlayerRank(player.playerRank);
                push();
                stroke("yellow");
                textSize(40);
                text("Your Rank : " + player.playerRank, displayWidth/2, camera.position.y);
                pop();
            }
        }
    }
    end(){
       console.log("ended");
    }
}