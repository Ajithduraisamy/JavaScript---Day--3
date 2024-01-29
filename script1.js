let obj1 = {Name: "Person 1", Age: 5} 
let obj2 = {Age: 5, Name: "Person 1"}

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
  for(var key in obj1){
    if (obj1[key]==obj2[key]){
    continue;
    }
    else{
      flag=false;
      break;
      }
  }
}
  else{
    flag=False;
    }
    console.log("Both object keys are equal is "+flag);