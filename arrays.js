var chocolateBars=['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(a,element){
      return  a=[element,...a];
}
function destructivelyAddElementToBeginningOfArray(a,element){
  return a.unshift(element);
}

destructivelyAddElementToBeginningOfArray(chocolateBars,"tob");
console.log(chocolateBars);