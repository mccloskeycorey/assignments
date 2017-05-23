var user = {
    name: "Sammy",
    age: 19,
    address: {
        street: "123 Main St.",
        city: "Capital City",
        State: "AZ"
    },
    favFruits: ["apples", "bananas"],
    speak: function() {
        console.log("Hi my name is " + this.name + ". I live at " + this.address.street);
    },
    birthday: function() {
        this.age++;
        console.log("Happy birthday! you are now years old!");
    }
}

user.birthday();

