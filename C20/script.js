function wordRank(w) {
  let arr = w.split("");
  let highest = arr[0];


  for(let i = 1; i < arr.length; i++){
    if(highest.toLowerCase().charCodeAt(0) < arr[i].toLowerCase().charCodeAt(0)){
      highest = arr[i];
    }
  }

  console.log(highest);
}

wordRank("zvasdZ");
