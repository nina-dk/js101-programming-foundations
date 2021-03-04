let title = "Flintstone Family Members";
let remainderHalf = Math.floor((40 - title.length) / 2);
let centeredTitle = " ".repeat(remainderHalf) + title;
console.log(centeredTitle);
//2nd way
let centeredTitleAlt = title.padStart(remainderHalf + title.length, " ");
console.log(centeredTitleAlt);