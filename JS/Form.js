class Form{
    constructor(){
        var title = createElement ("h2");
        title.html ("Car Racing Game");
        title.position (displayWidth/2 - 50,0);

        this.input = createInput("NAME");
        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
    
        this.button = createButton("LOG IN")
        this.button.position(displayWidth/2 + 30, displayHeight/2);
       
        this.greeting = createElement ("h3");
    
       // creating the reset button
        this.resetButton = createButton("Reset Game")
        this.resetButton.position(displayWidth - 120, 20);
    }

    display ()  {
       this.button.mousePressed (()=> {
        this.input.hide ();
        this.button.hide ();

        player.name = this.input.value ();

        playerCount+=1;
        player.index = playerCount;
        player.updatePlayerNameAndDistance();
        player.updatePlayerCount (playerCount);

       this.greeting.html ("Hello! " + player.name);
        this.greeting.position (displayWidth/2 - 70, displayHeight/4);
    });
    
    this.resetButton.mousePressed (()=> {
        player.updatePlayerCount (0);
        game.updateGameState(0);
    });
}
    hide (){
        this.greeting.hide();
        this.input.hide ();
        this.button.hide ();
    }
}