const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

const getWorthyWorkers = function(workersArr) {
  
  const WorthyWorkers = [];

  for (let i = 0; i < workersArr.length; i++) {
    const corrent = workersArr[i];
    
    if (corrent.salary > 1000) {
      WorthyWorkers.push(corrent.name)
    }
  }

  return WorthyWorkers
}
console.log(getWorthyWorkers(workers));