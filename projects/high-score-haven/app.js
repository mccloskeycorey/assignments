var form = document.getElementById("myform");
document.getElementById("submit").addEventListener("click", onSubmit());
var arr = [];

function onSubmit() {
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var travelerDestination = form.elements["destination"].value;
    var vegetarian = form.elements["vegetarian"].value


    if (document.getElementById("vegetarian").checked) {
        arr.push(form.elements["vegetarian"].value)
    }
    if (document.getElementById("rawFood").checked) {
        arr.push(form.elements["rawFood"])
    } else if (form.elements["diet"].checked) {
        array.push(form.elements["diet"].value);
    } else if (form.elements["rawFood"].checked) {
        array.push(document.getElementById("rawFood").value)
    } else if (form.elements["paleolithic"].checked) {
        array.pus(document.getElementById("paleolithic").value)
    }


    alert("First name: " + firstName + " Last name: " + lastName + " Age: " + age + " Gender: " + gender + " Location: " + travelerDestination + " Dietary restrictions: " + )
}
