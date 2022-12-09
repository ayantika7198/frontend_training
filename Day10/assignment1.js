function move(arr, index1, index2){
    if(index1<0 && index2<0){
        index1=arr.length-((-1)*index1);
        index2=arr.length-((-1)*index2);

        let val1=arr[index1];

        for(let i=arr.length-2; i>=index2; i--){
            arr[i+1]=arr[i];
        }
        arr[index2]=val1;
        console.log(arr);
    }else{
    let val1=arr[index1];
    for(let i=1; i<=index2; i++){
        arr[i-1]=arr[i];
    }
    arr[index2]=val1;
    console.log(arr);
}
}

let arr=[10, 20, 30, 40, 50];
//move(arr, 0,2);
move(arr,-1,-2);

