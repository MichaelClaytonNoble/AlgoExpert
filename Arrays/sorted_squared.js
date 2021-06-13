function sortedSquaredArray(array) {
  // Write your code here.
	if( !array.length ) return []
	//quicksort
	
	let pivot = array.pop();
	let left = array.filter( num => num*num < pivot*pivot);
	let right = array.filter( num => num*num >= pivot*pivot); 
	
	let leftSort = sortedSquaredArray(left);
	let rightSort = sortedSquaredArray(right);
	
	
  return leftSort.concat([pivot*pivot], rightSort);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
