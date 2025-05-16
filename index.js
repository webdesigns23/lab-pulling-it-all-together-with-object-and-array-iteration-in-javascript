function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

//1. Player Information: 

//Take Players Name and Return Points
function numPointsScored(playerName) {
    const game = gameObject();
    let homePlayers = game.home.players;
    let awayPlayers = game.away.players;
    let points;

    Object.keys(homePlayers).forEach((key) => {
        if(playerName === key) {
            points = homePlayers[key].points;
        }
    }) 

     Object.keys(awayPlayers).forEach((key) => {
        if(playerName === key) {
            points = awayPlayers[key].points;
        }
    }) 

    return points;
}

const playerPoints = numPointsScored('Alan Anderson');
console.log(playerPoints);

//Take Players Name and Return Shoe Size
function shoeSize(playerName) {
    const game = gameObject();
    let homePlayers = game.home.players;
    let awayPlayers = game.away.players;
    let shoe;

    Object.keys(homePlayers).forEach((key) => {
        if(playerName === key) {
            shoe = homePlayers[key].shoe;
        }
    }) 

     Object.keys(awayPlayers).forEach((key) => {
        if(playerName === key) {
            shoe = awayPlayers[key].shoe;
        }
    }) 

    return shoe;
}

const playerShoe = shoeSize('Jeff Adrien');
console.log(playerShoe);

//2. Team Information:

//Take Team Name and Returns ARRAY of Team Colors
function teamColors(teamName) {
    const game = gameObject();
    if(game.home.teamName === teamName) {
        return game.home.colors;
    }
    else{
        return game.away.colors;
    }
}

const colors = teamColors('Brooklyn Nets');
console.log(colors);

//Returns an ARRAY of Both Team Names
function teamNames() {
    const teamNamesArray = []
    let game = gameObject()
    teamNamesArray.push(game.home.teamName)
    teamNamesArray.push(game.away.teamName)

    return teamNamesArray
}

console.log(teamNames());

//3. Retrieve Players Numbers and Stats

//Takes a Team Name and Returns an ARRAY of All Players Jersey Numbers on that team
function playerNumbers(teamName) {
    const game = gameObject();
    let homePlayers = game.home.players
    let awayPlayers = game.away.players
    const jerseyNumbers = []

    if(game.home.teamName === teamName) {
        for (const key in homePlayers){
            jerseyNumbers.push(homePlayers[key]['number'])
        }
    } 
    else {
        for (const key in awayPlayers)
            jerseyNumbers.push(awayPlayers[key]['number'])
        }

      return jerseyNumbers
    }
    
const playerNum = playerNumbers('Charlotte Hornets');
console.log(playerNum);

// Takes a Players Name and Returns an OBJECT with All Stats for That Player
function playerStats(playerName) {
    let game = gameObject()
    let homePlayers = game.home.players
    let awayPlayers = game.away.players

    if(Object.keys(homePlayers).includes(playerName)) {
        return homePlayers[playerName]
    } else {
        return awayPlayers[playerName]
    }
}
const stats =playerStats("Brook Lopez");
console.log(stats);

//4. Advanced Challenge:

//Returns the number of rebounds for the player with the largest shoe size
//Identify the player with the largest shoe size
function bigShoeRebounds() {
    const game = gameObject();
    let homePlayers = game.home.players;
    let awayPlayers = game.away.players;
    let shoeSizes = [];
   
    

    for(const key in homePlayers){
        shoeSizes.push(homePlayers[key]['shoe']);
    }

    for(const key in awayPlayers){
            shoeSizes.push(awayPlayers[key]['shoe']);
        }

    //Find Max Shoe Size
     let maxShoe = shoeSizes[0];

    for(let i =1; i < shoeSizes.length; i++) {
        if (shoeSizes[i] > maxShoe){
            maxShoe = shoeSizes[i];
        }
    }
    
    //Max shoe size display number of rebounds
    let numRebounds;
      for (const key in homePlayers) {
        if(homePlayers[key].shoe === maxShoe){
            return homePlayers[key].rebounds
        }
    }

    for (const key in homePlayers) {
        if(awayPlayers[key].shoe === maxShoe){
            return awayPlayers[key].rebounds
        } 
    }

    return numRebounds;
}
console.log(bigShoeRebounds());


