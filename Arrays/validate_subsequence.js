function isValidSubsequence(array, sequence) {
  // Write your code here.
	//use the sequence as an already full stack
	
	//iterate over the array starting at the end
	for( let i = array.length-1; i >= 0; i--){
		//as each number is encountered that is at the end of our stack 
		// pop the last element off of the stack 
		if( array[i] === sequence[sequence.length-1]){
			sequence.pop();
		}
		
		//early terminate if the sequence is emptied already
		if(!sequence.length) return true;
	}
	//if there are remaining elements in the sequence stack then 
		//we can assume that the sequence is not a sub sequence of the array 
	return (sequence.length === 0);
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
