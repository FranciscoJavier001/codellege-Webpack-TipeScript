import { Observable, Observer } from 'rxjs';
import { displayLog } from './../utils/utils';

const observer: Observer<any> = {
    next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error('[Error Observale] ', error),
    complete: () => console.warn('[Complete]'),
};

const intervalo$ = new Observable((subscriber) => {
    let count = 0;

    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    // setTimeout(() => {
    //     subscriber.complete()
    // }, 2500);

    return ()=>{
        clearInterval(interval)
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

setTimeout(() => {
    subs1.unsubscribe();
    subs1.unsubscribe();
    console.log(`se ejecuto el unsubscribe`);
}, 3000);