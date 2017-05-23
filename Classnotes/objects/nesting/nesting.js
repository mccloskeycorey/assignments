var superHero = {
    hero: "Deadpool",
    age: 39,
    powers: ["Snarky Sarcasm", "healing factor", "Above average strength"],
    favoriteHeroes: [
        {
            hero: "Wolverine",
            age: 157,
            powers: ["Healing Factor", "Ability to track by scent", "bone claws"],
            favoriteHeroes: [
                {
                    hero: "Spiderman",
                    age: 17,
                    powers: ["Spider Sense", "The ability to stick to almost any surface", "The proporsionate strength of a spider", "Also he is crazy smart"],
                    favoriteHeroes: [
                        {
                            hero: "Iron Man",
                            age: 46,
                            powers: ["Super Tech Savy", "One of the smartest men in the world", "Super rich"],
                            favoriteHeroes: [
                                {

                                }
                            ]
                        }
                    ]
                }
            ]
    }
    ]
}

console.log(superHero());
