function takeInverse(arr,id){
	var newId = parseInt(id)
	var newArray= $.grep(arr,function (n, i){
		if(arr[i]== newId){
			return n;
		}
	},true);
	return newArray;
}