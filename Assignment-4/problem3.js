function  bestTeam( player1, player2 ) {
    if(typeof player1 !=="object"||player1 ===null || typeof player2 !=="object"||player2===null){
        return "Invalid"
    }
    let data1=["foul","cardY","cardR"];
    for(let i of data1){
        if(typeof player1[i] !=="number"|| typeof player2[i] !=="number"){
            return "Invalid"
        }
        
    }
    
   
    let team1=player1.foul+player1.cardY+player1.cardR;
    let team2=player2.foul+player2.cardY+player2.cardR;
     
       if(team1<team2){
        return player1.name;
       }
       else if(team1===team2){
        return "Tie";
       }
       else{
        return player2.name;
       }
     
}
console.log(bestTeam("abir"))