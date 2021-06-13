//solution 1
function twoNumberSum1(array, targetSum) {
  // Write your code here.
	
	//create a catalog of numbers we have encountered
	let catalog = {};
	let result = [];
	//loop through the array 
	array.forEach( num => {
		//find the desired compliment to check for by 
			//subtracting the current number from the target sum
		let compliment = targetSum - num;
		
		//if the compliment exists in the catalog and has been encountered 
		// then return the [current number, compliment]
		if( catalog[compliment] ) result = [num, compliment];
	
		//add the current number to the catalog hash
		catalog[num] = true;
	});
	
	return result;
}

//solution 2
function twoNumberSum2(array, targetSum) {
  // Write your code here
	array.sort( (a,b)=> a-b );
	//until the left  > right  
	let addedValue = 0;
	let left = 0;
	let right = array.length-1;
	
	while( left < right ){
	
		//add array[left] + array[right] to find the pair 
		let value = array[left] + array[right];
		
		//if the pair is found return 
		if( value === targetSum ) return [array[left], array[right]]; 
		
		//since the array is sorted we can add to our current value by 
			//incrementing the left index 
			//and we can subtract from our current value by 
			//decrementing the right index 
	
		//if the added amount is greater than the target, decrease added value
		if( value > targetSum ) right--;
	
		//if the added amount is smaller than the target, increase added value 
		if( value < targetSum ) left++;
	}
	
	//nothing found
	return [];
		
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
