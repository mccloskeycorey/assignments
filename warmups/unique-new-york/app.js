// write a function that takes two arrays for comparison.

function unique(arr1, arr2) {
    // once the function excepts the it removes the duplications. once they are removed return a new array.
    for (var i = 0; i < arr1.length; i++)
        if (arr1[i] === arr1[i++]) {
            arr1.slice(i, 1);
            i--;
            for (var j = 0; j < arr2.length; j++)
                if (arr1[i] === arr2[j])

        }

}
