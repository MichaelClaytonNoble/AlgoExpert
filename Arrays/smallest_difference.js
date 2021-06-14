function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	
	//sort both arrays 
	arrayOne.sort( (a,b)=> a-b );
	arrayTwo.sort( (a,b)=> a-b );
	
	let moveFlag = true;
	
	//cursors
	let cursorOne = Math.floor(arrayOne.length/2);
	let cursorTwo = Math.floor(arrayTwo.length/2);
	
	let oneCheck = ['',''];
	let twoCheck = ['',''];
	

	//there are "better" moves 
	while( moveFlag ){
		
		moveFlag = false;
		
		//find the current difference
		let currentDifference = getDiff(arrayOne[cursorOne], arrayTwo[cursorTwo]);
	
		console.log(cursorOne, cursorTwo)
		//check top 
		oneCheck[0] = cursorOne-1 >= 0 ? getDiff(arrayOne[cursorOne-1],arrayTwo[cursorTwo]) : null;
		// oneCheck[1] = cursorOne < arrayOne.length && cursorOne >= 0 ? getDiff(arrayOne[cursorOne], arrayTwo[cursorTwo]) : null;
		oneCheck[1] = cursorOne+1 < arrayOne.length ? getDiff(arrayOne[cursorOne+1], arrayTwo[cursorTwo]) : null;
		
		//check bottom
		twoCheck[0] = cursorTwo-1 >= 0 ? getDiff(arrayOne[cursorOne],arrayTwo[cursorTwo-1]) : null;
		// twoCheck[1] = cursorTwo < arrayTwo.length && cursorTwo >= 0 ? getDiff(arrayOne[cursorOne], arrayTwo[cursorTwo]) : null;
		twoCheck[1] = cursorTwo+1 < arrayTwo.length ? getDiff(arrayOne[cursorOne], arrayTwo[cursorTwo+1]) : null;
		

		let checks = oneCheck.concat(twoCheck); 
		let smallest = 0;
		for(let x = 0; x< checks.length; x++){
			smallest = checks[smallest] && checks[x] < checks[smallest] ? x : smallest;
		}
		
		if( checks[smallest] < currentDifference){
			moveFlag = true;
			console.log(checks[smallest], currentDifference); 
			if( smallest === 0) cursorOne--;
			if( smallest === 1) cursorOne++;
			if( smallest === 2) cursorTwo--;
			if( smallest === 3) cursorTwo++; 
		}
		
		console.log(arrayOne[cursorOne], arrayTwo[cursorTwo]);

	}

	console.log( oneCheck);
	console.log(twoCheck); 
	console.log(cursorOne, cursorTwo); 
}

function getDiff( a, b){
	return Math.abs(a-b);
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
