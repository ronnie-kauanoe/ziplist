function zipList(list1, list2) {
  let zipped = [];
  for (let i = 0; i < list1.length; i++) {
    zipped.push(list1[i]);
    zipped.push(list2[i]);
  }
  return zipped;
}

function zipListTheSimpleWay(list1, list2) {
  let zipped = [];
  let compactList = _.zip(list1, list2);
  _.each(compactList, function(entry) {return _.each(entry, function(element) {return zipped.push(element)})});
  return zipped;
}

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));