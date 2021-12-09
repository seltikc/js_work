const string = "Привет! Как дела?";

const symbol = ["е", "а", "и"]

const get = function(stringToFilter) {

let save = "";  

for (let i = 0; i < stringToFilter.length; i++) {
  const curren = stringToFilter[i];

  if (symbol.includes(curren)) {
    save += curren;
  }
  
}
  return save;
};


console.log(get(string));


