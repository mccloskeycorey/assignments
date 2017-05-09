var lookTheEnemie = []

function Enemies(type, hitPoints, enemieDefense) {
    this.type = enemieType();
    this.hitPoints = enemieAttack();
    this.enemieDefense = defense();
}
//function Person(eyeColor, age, favoriteColor){
//    this.eyeColor = getEyecolor();
//    this.age = age;
//    this.favoriteColor = favoriteColor;
//}



function enemieType() {
    if (Math.floor((Math.random() * 10) + 1) <= 3.3333) {
        var enemyType = "Ancient Dragon";
    } else if (Math.floor((Math.random() * 10) + 1) <= 6.6666) {
        var enemyType = "Prowler";
    } else {
        var enemyType = "Mighty Grunt";
    }
    return enemyType;
}

function enemieAttack() {
    if (enemieType() === "Ancient Dragon") {
        var attack = Math.floor((Math.random() * (100 - 80 + 1) + 80));
    } else if (enemieType() === "Prowler") {
        var attack = Math.floor((Math.random() * (79 - 50 + 1) + 50));
    } else {
        var attack = Math.floor((Math.random() * (49 - 20 + 1) + 20));
    }
    return attack;
}

function defense() {
    var defense = enemieAttack() * 3;
    return defense;
}



for (var i = 0; i < 100; i++) {
    //        return "The is a: " + enemieType + " with an attack of: " + enemieAttack + " and a defense of: " + defense
    var logThis = new Enemies();
    lookTheEnemie.push(logThis);
}

console.log(lookTheEnemie);

//
//console.log(Enemies());
//console.log(enemieType());



//var enemies = []
//
//function Enemy(type, hitPoints, defense) {
//    this.type = typeGen();
//    this.hitPoints = hp();
//    this.defense = (this.hitPoints * 3);
//}
//
//function typeGen() {
//    var rand = Math.random();
//    if (rand <= .33) {
//        return "Ancient Dragon";
//    } else if (rand >= .66) {
//        return "Prowler";
//    } else {
//        return "Mighty Grunt";
//    }
//};
//
//function hp() {
//    var gen = typeGen();
//    if (gen === "Ancient Dragon") {
//        return (Math.floor((Math.random() * 20)) + 81);
//    } else if (gen === "Prowler") {
//        return (Math.floor((Math.random() * 20)) + 50);
//    } else {
//        return (Math.floor((Math.random() * 20)) + 20);
//    }
//}
//
//for (var i = 0; i < 100; i++) {
//    var bad = new Enemy();
//    enemies.push(bad);
//}
//console.log(enemies);
