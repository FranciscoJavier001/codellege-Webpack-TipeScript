import { Observer, fromEvent } from "rxjs";
import { displayLog } from "../utils/utils";
import { take, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error('[Error Observable] ', error),
    complete: () => displayLog('[Complete]'),
};

const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe(
    tap(()=>console.log('tap')),
    first((event)=>event.clientX>350)
    map(  ({clientX,clientY})=({clientX,clientY})>  )
    )
    .subscribe((value) => console.log(value);

    /*Map*/
    /*
    map( (event)=>{
        return {
            clientX:event.clientX
            clientY:event.clientY
        }
    })
    */