//1st way
let famousWords = "seven years ago...";
let beggining = "Four score and ";
famousWords = beggining + famousWords;
console.log(famousWords);
//2nd way
famousWords = "seven years ago...";
let fullString = beggining.concat(famousWords);
console.log(fullString);