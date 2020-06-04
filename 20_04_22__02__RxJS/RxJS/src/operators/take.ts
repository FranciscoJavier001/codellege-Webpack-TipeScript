import { Observer } from "rxjs";
import { displayLog } from "./utils/utils";
import { take } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(take(2)).subscribe(observer);
