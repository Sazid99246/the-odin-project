function camelize(str) {
    strArr = str.split("-");
    slicedArr = strArr.slice(1);
    for (let i = 0; i < slicedArr.length; i++) {
        slicedArr[i] = slicedArr[i].charAt(0).toUpperCase() + slicedArr[i].slice(1);
    }
    slicedArr.unshift(strArr[0]);
    return slicedArr.join("");
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
