var shopper = {
    name: "Samantha",
    age: 19,
    checkAge: function () {
        console.log("Under age! Illegal to purchase alcohol")
    },
    type: "Window Shopper",
    member: true,
    subTotalOfAllItems: 73.38,
    items: ['apples', 'oranges', 'and other stuff'],
    groceryCart: ['apples', 'oranges', 'movies']
}
shopper.checkAge();
console.log(shopper.name());