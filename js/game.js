class Game {
    constructor(){

    }
    // get game State from DB
    getGameState () {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on ("value", function (data) {gameState= data.val ();});
    }

    // update state in DB
    update(state) {
        database.ref("/").update({gameState : state});
    }

    start () {
        if ( gameState == 0){
             player = new Player ();
             player.getPlayerCount();

             form = new Form ();
             form.display();

        }
    }
    //Add play GameState
    play () {
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        
        // get player info from DB
        Player.getPlayerInfo();
        if (allPlayers != undefined){
            var displayPosition = 130;

            for (var plr in allPlayers){
                if (plr == "player"+player.index)
                    fill("red");
                else
                    fill ("black");
                displayPosition+=20;
                textSize (15) ;
                text (allPlayers[plr].name+": " + allPlayers[plr].distance, 120, displayPosition);
            }
        }
        //Increase the distance of the Players
        if ( keyIsDown(UP_ARROW) && player.index != null){
            player.distance+= 25 ;
            player.update();
        }

    }

}