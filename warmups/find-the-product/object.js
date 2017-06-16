var donors = [
    {name: "a", donation: 10},
    {name: "b", donation: 100},
    {name: "c", donation: 4},
    {name: "d", donation: 9000}
];

/*
 * Given an array of donor objects (name and donation amount), return the
 * total amount of donations
 * */


function donationAmount(arr) {
    var sumDonation = arr.reduce(function (acc, current) {
        return acc + current.donation;
    }, 0);
    return sumDonation;
};

console.log(donationAmount(donors));