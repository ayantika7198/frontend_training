

function convert(temp: number, fromTo: string):number{
    let res: number;
    if(fromTo==='FtoC'){
        res=((temp-32)/9)*5;
    }else if(fromTo==='CtoF'){
        res=((temp/5)*9)+32;
    }else{
        res=0;
    }
    return Math.round(res);
}

console.log(convert(70,'FtoC'));

export {};