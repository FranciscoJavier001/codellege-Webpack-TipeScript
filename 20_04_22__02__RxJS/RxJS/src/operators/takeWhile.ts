import { Observer, fromEvent } from "rxjs";
import { displayLog } from "../utils/utils";
import { take, map, takeWhile } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error('[Error Observable] ', error),
    complete: () => displayLog('[Complete]'),
};

const click$ = fromEvent<MouseEvent>(document,'click');

const src$ = of<number>(1,2,3,4,3,5,1,7);

src$.pipe(
    takeWhile((numero) => numero <4));
// .subscribe(observer);

click$.pipe(
    map(({x,y})=>({x,y}))
    takeWhile(({y})=>y<=150)
)
.subscribe(observer);