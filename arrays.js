var chocolateBars=['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(a,element){
      return  a=[element,...a];
}
function destructivelyAddElementToBeginningOfArray(a,element){
  a.unshift(element);
  return a;
}

function addElementToEndOfArray(a,element){
  //a.push(element);
  a=[...a,element];
  return a;
}
function destructivelyAddElementToEndOfArray(a,element){
 a.unshift(element);
  return a;
}

addElementToEndOfArray(chocolateBars,"tob");
console.log(chocolateBars);
