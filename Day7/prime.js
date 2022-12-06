function prime(num){
    console.log("Prime numbers are\n");
    let count=2;
    while(count<=num){
        let flag=0;
        for(let i=2; i<=(count/2); i++){
            if(count%i==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
            console.log(count);
        }
        count++;
    }
}

console.log(prime(17));
