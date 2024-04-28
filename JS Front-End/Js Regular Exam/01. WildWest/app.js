function solve(array) {
    const playersCount = array.shift();

    let players = {};

    for (let i = 1; i <= playersCount; i++) {
        //"{hero name} {HP} {bullets}"
        const [heroName, hp, bullets] = array.shift().split(' ');

        players[heroName] = {
            hp: Number(hp),
            bullets: Number(bullets),
        }
    }

    let commandline = array.shift();

    while(commandline != "Ride Off Into Sunset") {
        const commandArgs = commandline.split(' - ');
        
        //always valid
        const command = commandArgs[0];
        const heroName = commandArgs[1];
        
        const currentPlayer = players[heroName];

        switch (command) {
            case 'FireShot':
                const target = commandArgs[2];

                if(currentPlayer.bullets > 0) {
                    currentPlayer.bullets--;
                    console.log(`${heroName} has successfully hit ${target} and now has ${currentPlayer.bullets} bullets!`);
                } else {
                    console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
                }

                break;
            case 'TakeHit':
                const damage = commandArgs[2];
                const attacker = commandArgs[3];

                if (currentPlayer.hp - damage > 0) {
                    currentPlayer.hp -= damage;
                    console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${currentPlayer.hp} HP!`);
                } else {
                    delete players[heroName];
                    console.log(`${heroName} was gunned down by ${attacker}!`);
                }
                break;
            case 'Reload':
                if(currentPlayer.bullets < 6) {
                    const reloadedBullets = 6 - currentPlayer.bullets;
                    currentPlayer.bullets = 6;
                    console.log(`${heroName} reloaded ${reloadedBullets} bullets!`);
                } else if(currentPlayer.bullets === 6) {
                    console.log(`${heroName}'s pistol is fully loaded!`);
                }
                break;
            case 'PatchUp':
                const amount = Number(commandArgs[2]);
                const currentHp = currentPlayer.hp; 
                
                if(currentHp === 100) {
                    console.log(`${heroName} is in full health!`);
                }else if(currentHp + amount > 100){
                    const amountRecovered = 100 - currentPlayer.hp;
                    currentPlayer.hp = 100;
                    console.log(`${heroName} patched up and recovered ${amountRecovered} HP!`);
                } else if(currentPlayer.hp + amount < 100) {
                    currentPlayer.hp += amount;
                    console.log(`${heroName} patched up and recovered ${amount} HP!`); 
                } 
                break; 
        }

        if(Object.keys(players).length === 0) {
            break;
        }

        commandline = array.shift();
    }

    for (const player in players) {
        console.log(player);
        console.log(` HP: ${players[player].hp}`);
        console.log(` Bullets: ${players[player].bullets}`);
    }
}

solve((["1",
"Gus 100 0",
"FireShot - Gus - Bandit", // bullets -> 5,
"Reload - Gus",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 30 - Bandit", // hp -> 20,
"Reload - Gus", // bullets -> 6
"Reload - Gus",
"PatchUp - Gus - 500",
"PatchUp - Gus - 500",
"Ride Off Into Sunset"]) 
);