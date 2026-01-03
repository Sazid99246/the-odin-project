function unique(arr) {
    /* your code */
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (!newArr.includes(e)) {
            newArr.push(e);
        }
    }
    return newArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O