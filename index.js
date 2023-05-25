function minPlane(fuel) {
	if(fuel[0] === 0){
		return -1;
	}
	
	let planesNeeded=1;
	let maxReach=fuel[0];
	let currentFuel=fuel[0];

	for(let i=1;i<fuel.length;i++){
		currentFuel--;
		if(currentFuel<0){
			return -1;
		}
		if(i>maxReach){
			planesNeeded++;
			maxReach=currentFuel+i;
		}
		currentFuel= Math.max(currentFuel,fuel[i]);
	}
	return planesNeeded;
	
}
 
const fuel=[1,6,3,4,5,0,0,0,6];
const result= minPlane(fuel);
console.log("Minimum number of plane needed to reach destination : " + result);