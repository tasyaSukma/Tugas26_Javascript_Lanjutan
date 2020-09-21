var num = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

for(var i = 0; i<num.length;i++){
	if(Number.isFinite(num[i])){
		console.log("Angka : ", num[i], " Infinity")
	}else{
		console.log("Angka : ", num[i], " NOT Infinity")
	}
}