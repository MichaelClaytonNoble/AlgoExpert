//solution 1
function moveElementToEnd1(array, toMove) {
  // Write your code here.
	let length = array.length
	for( let i = 0; i < length; i++){
		if( array[i] === toMove){
			array.push(array[i]);
			array[i] = null;
		}
	}
	return array.filter( num => num); 
}

//solution 2
function moveElementToEnd2(array, toMove) {
  // Write your code here.
	let j = array.length -1;
	
	for(let i = 0; i<array.length; i++){
		while(i < j && array[j] === toMove) j--;
		if( array[i] === toMove && i < j ){
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
