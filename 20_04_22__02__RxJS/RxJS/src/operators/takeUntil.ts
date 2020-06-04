import { Observer, fromEvent } from "rxjs";
import { displayLog } from "../utils/utils";
import { take, tap, first, pluck, map, takeWhile, takeUntil } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
    error: (error) => console.error('[Error Observable] ', error),
    complete: () => displayLog('[Complete]'),
};

const boton = document.createElement('button');
boton.innerHTML='Detener tiempo';
document.querySelector('body')?.insertBefore(boton, document.querySelector
    ('#log-container'));

    const counter$ = interval(1000);

    const clickBtn$ = fromEvent<MouseEvent>(boton, 'click');

    // counter$.pipe(takeUtil(clickBtn$)).subscriber(observer);