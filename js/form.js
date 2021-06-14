class Form {
    constructor(){
        this.input = createInput("Name");
        this.input.position (130,160);

        this.button = createButton("Play !!!");
        this.button.position (250,200);

        this.greeting = createElement("h3");

        this.title = createElement("h2");
        this.title.html ("Car Racing Game");
        this.title.position (130,0);


    }

    display(){
        // code for play button 
        this.button.mousePressed(()=>  {
        // hide all display elements            
        this.input.hide();
        this.button.hide();
        
        // get racer name  
        player.name = this.input.value();
        playerCount = playerCount + 1 ;
        player.index = playerCount;
        // update player Count and Name in DB thro player Object
        player.update();
        player.updateCount(playerCount);

        // greet the player
        this.greeting.html("Welcome Racer " + player.name);
        this.greeting.position(150,160);
            }
        );
    

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}