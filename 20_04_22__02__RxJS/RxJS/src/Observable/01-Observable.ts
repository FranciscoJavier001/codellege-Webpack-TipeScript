import { Observable, Observer } from "rxjs";
import { displayLog } from ".././utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] $(JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observale] ", error),
  complete: () => console.warn("[Complete]"),
};

// const obs$ = Observable.create();

const obs$ = new Observable((subscriber) => {
  subscriber.next("Hola Mundo");
  subscriber.next(["Jose", "Carlos"]);
  subscriber.next(0);
  subscriber.next({ a: 1, b: 2 });

  // Forzando un Error
  // const a: any = undefined;
  // a.nombre = 'Jose Carlos';

  // const b: any = undefined;
  // b.apellido = 'Gonzalez'
  // subscriber.next('Paso Error')

  subscriber.complete();
});

obs$.subscribe(observer);