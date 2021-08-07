class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.playerRank = null;
    }

    getPlayerCount () {
        //refer to gameState location in DB
        var playerCountRef = database.ref ('/playerCount');
        // listen to gameState changes in DB
        playerCountRef.on ("value", 
                        function(data){
                            playerCount = data.val ();
                        }
        );        
    }
    updatePlayerCount (count) {
         
    var playerCountRef = database.ref ("/");
        playerCountRef.update ({"playerCount" : count}) ;
    }
    
    updatePlayerNameAndDistance () {
        
        var playerIndex = "Players/Player"+this.index;
        database.ref (playerIndex).set ({Name : this.name, distance : this.distance});
    }
    
    static getPlayerInfo (){
        //fetch all players info to global var allPlayers
        var playerInfoRef = database.ref("/Players")
        playerInfoRef.on("value", (data)=>{allPlayers = data.val ();});
    }
        
    getPlayerRank () {
            //refer to playerRank location in DB
            var playerRankRef = database.ref ('/carsAtEnd');
            // listen to playerRank changes in DB
            playerRankRef.on ("value", (data)=>{
            //playerRankRef.on ("value", 
                            //function(data){
                                this.playerRank = data.val ();
                            }
            );        
        }
       
    static updatePlayerRank (rank) {
        database.ref('/').update ({carsAtEnd : rank});
        //var playerRankRef = database.ref ("/");
        //playerRankRef.update ({"carsAtEnd" : rank}) ;
    }
}

