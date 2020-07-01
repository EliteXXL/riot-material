/**
 * Giuliano Collacchioni: 2020
 */

// i punti di interruzione dell'altezza delle barre sono struttati nel seguente modo:
// {
//     min-width-1: {
//         min-height-1: height,
//         min-height-2: height,
//         ...,
//         min-height-n: height
//     },
//     ...,
//     min-width-n: {
//         min-height-1: height,
//         min-height-2: height,
//         ...,
//         min-height-n: height
//     }
// }
let breakpoints: { [key: number]: { [key: number]: number } } = {
    0: {
        0: 48,
        560: 56
    },
    600: {
        0: 48,
        560: 56,
        640: 64
    }
};
let height: number;

function get_height(): number {
    let documentHeight: number = document.documentElement.clientHeight;
    let documentWidth: number = document.documentElement.clientWidth;
    let barHeight: number = 48;
    let heightBreakpoints: any;
    // iterazione su tutti i punti di interruzione della larghezza,
    // per recuperare i punti di interruzzione dell'altezza
    (Object as any).entries(breakpoints).some(entry => {
        let [minWidth, heightBreakpoints_] = entry;
        // se il punto d'interruzione supera la larghezza attuale della finestra
        // usare i punti di interruzione dell'altezza precedentemente salvati
        if (documentWidth < minWidth) {
            return true;
        }
        // salvataggio dei punti di interruzione dell'altezza
        // dell'attuale punto di interruzione della larghezza
        heightBreakpoints = heightBreakpoints_;
        return false;
    });
    // iterazione su tutti i punti di interruzione dell'altezza,
    // per impostare l'altezza delle barre
    (Object as any).entries(heightBreakpoints).some(entry => {
        let [minHeight, height] = entry;
        // se il punto di interruzione supera l'altezza attuale della finestra
        // uscire dalle iterazioni e usare l'ultima altezza delle barre salvata
        if (documentHeight < minHeight) {
            return true;
        }
        // salvataggio dell'altezza delle barre dell'attuale punto di interruzione
        barHeight = height;
        return false;
    });
    return barHeight;
}

function getHeight(): number {
    setup();
    return height;
}

// funzione di setup delle utilità del modulo
let done: boolean = false;
let listeners: { listener: () => void, thisArg: any, once: boolean }[] = [];
function setup(): void {
    if (done) {
        return;
    }
    // associare il calcolo dell'altezza delle barre al ridimensionamento della finestra
    window.addEventListener("resize", function (): void {
        height = get_height();
        for (let i: number = 0; i < listeners.length;) {
            let actual: typeof listeners[0] = listeners[i];
            actual.listener.call(actual.thisArg);
            if (actual.once) {
                listeners.splice(i, 1);
            } else {
                i++;
            }
        }
    });
    height = get_height();
    done = true;
}

function onChange<T>(listener: (this: T) => void, thisArg?: T): void {
    listeners.push({
        listener,
        thisArg,
        once: false
    });
}
function onceChange<T>(listener: (this: T) => void, thisArg?: T): void {
    listeners.push({
        listener,
        thisArg,
        once: true
    });
}
function offChange<T>(listener: (this: T) => void, thisArg?: T): void {
    let index: number = -1;
    if (listeners.some((l, i) => {
        if (
            listener === l.listener &&
            thisArg === l.thisArg
        ) {
            index = i;
            return true;
        }
        return false;
    })) {
        listeners.splice(index, 1);
    }
}

export {
    getHeight,
    setup,
    onChange,
    offChange,
    onceChange
};