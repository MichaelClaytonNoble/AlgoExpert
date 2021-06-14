function threeNumberSum(array, targetSum) {
  // Write your code here.
	array.sort( (a,b) => a-b);
	let result = []; 
	//iterate over the array 
	for( let i = 0; i< array.length-2; i++ ){
		//keep track of the 2nd and 3rd numbers 

		let left = i+1;
		let right = array.length-1;		
		let first = array[i];
		
		let complement = targetSum - first;
 
		while(left < right ){
		
			let second = array[left];
			let third = array[right]; 
		
			//then find 2 pairs that sum up to the complement of array[i]
			let guess = second + third; 
			if( guess === complement ){
				
				result.push([first,second,third]);
				left++;
				right--;
			}
			else if (guess < complement){
				//move the 2nd and 3rd numbers based on if the complement is greater or less than the 
				//current try
				left++;
			}
			else{
				right--;
			}
		}
	}
	console.log(result); 
	return result;
}

// [-8, -6, 1, 2, 3 ,4 ,5, 6, 12]
// 	X		@										  &  		= -8 = -6+ 12 ===> false and 8 > 12 
//   X			 @								  &	 		= -8 = 1 + 12 ===> false and 8 < 13
// 	X			 @						  &					= -8 = 1 + 6 ===> false and 8 > 7
//   X.        @						&					= -8 = 2 + 6 ===> true SAVE THE TRIO
// 	X 					 @     &						= -8 = 3 + 5 ===> true SAVE THE TRIO
// 	X							  @&						because @ < & === false increment i and reset @ & 
// 		 X.  @									&			= -6 = 1 + 12 ===> false and 6 < 13
// 		 X   @							&					= -6 = 1 + 6 ===> false and 6 < 7
//      X	 @					 &						= -6 = 1 + 5 ===> true SAVE THE TRIO 
// 		 X      @			 & 							= -6 = 2 + 4 ===> true SAVE THE TRIO 
		 



// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
