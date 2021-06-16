function isMonotonic(array) {
  // Write your code here.

	let lastTone;

	for(let i = 0; i<array.length-1; i++){

		if( array[i] < array[i+1] ) tone = true;
		if( array[i] > array[i+1] ) tone = false;
		
		if( lastTone === undefined ) lastTone = tone;
		
		if( tone !== lastTone ) return false;
	}
	return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
