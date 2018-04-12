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
  return a.push(element);
}
function destructivelyAddElementToEndOfArray(a,element){
  a=[...a,element];
  return a;

}

