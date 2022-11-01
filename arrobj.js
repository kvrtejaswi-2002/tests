function toArray(obj) {
    let sol = [];
    for (let key in obj) {
      let newArray =[key,obj[key]]
      sol.push(newArray);
    }
    return sol;
  }
  console.log(toArray({a:1,b:2}))
  console.log(toArray({tesla:12,tats:112}))