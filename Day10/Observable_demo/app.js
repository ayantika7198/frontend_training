import {Observable} from 'rxjs';

const obsr= new Observable(
    subscriber=>{
        subscriber.next("Stream_1");
        subscriber.next("Stream_2");
        subscriber.next("Stream_3");
        subscriber.next("Stream_4");

        setTimeout(()=>{
            subscriber.next("Stream_next");
            subscriber.complete();
        });
    }
);

console.log("Before the Subscription");

obsr.subscribe({
    next(i){
        console.log(i+" streaming")
    },
    error(e){
        console.log(e)
    },
    complete(){console.log("All Values Received")}
});
