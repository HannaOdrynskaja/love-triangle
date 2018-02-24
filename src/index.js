/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
var count=0;
l=preferences.length;
for (i=1;i<=l;i++){
var a1 = i;
var a2 = preferences[a1-1];
var a3 = preferences[a2-1];
var a4 = preferences[a3-1];

if (a1 == a4){
	count++;
	console.log(a1+" loves " + a2 + ", loves "+ a3+", loves "+a4+".  count= "+ count);	
	}else{
	console.log(a1+" - " + a2 + " - " + a3 + " - "+a4+ " - no");
} 
}
return("rezult = "+count/3);
};
