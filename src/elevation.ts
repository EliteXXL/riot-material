// @ts-ignore
import module = require("module");

let elevationCSS: string = (module as any).uri.split("/").slice(0, -1).join("/") + "/lib/material/elevation/mdc.elevation.min.css";
let linkEl: HTMLLinkElement = document.createElement("link");
linkEl.rel = "stylesheet";
linkEl.href = elevationCSS;
document.head.appendChild(linkEl);

export function elevation(element: HTMLElement, elevation: number | null): void {
    for (let i: number = 0; i <= 24; i++) {
        if (i === elevation) {
            continue;
        }
        element.classList.remove("mdc-elevation--z" + i);
    }
    if (elevation != null) {
        element.classList.add("mdc-elevation--z" + elevation);
    }
}