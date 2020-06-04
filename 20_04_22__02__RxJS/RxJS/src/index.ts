import { Observer, fromEvent, asyncScheduler, interval } from 'rxjs';
import { displayLog } from './utils/utils';
import { sample, switchMap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error('[Error Observable] ', error),
    complete: () => displayLog('[Complete]'),
};

const click$ = fromEvent<MouseEvent>(document, 'click');

const timer$ = timer(0, 1000);

// click$.subscribe((valor) => {
//     timer$.subscribe((valor) => console.log(valor));
// });
click$.pipe(
    switchMap((x) => timer$)
    ).subscribe((valor) => console.log(valor));