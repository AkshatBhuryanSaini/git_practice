
/////--------Check_Prime------


var num=13;
var count=0;

for(var i=1; i<=num; i++){
	if(num%i==0){
	count++;
	}
}

if(count==2){
console.log("Yes");
}
else{
console.log("No");
}


/////----------Palindrome---------


var str="naman";
var bag="";

for(var i=str.length-1; i>=0; i--){
	bag+=str[i];
}

if(bag==str){
console.log("Yes");
}
else{
console.log("No");
}

