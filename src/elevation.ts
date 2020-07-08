/// <use asset="@material/elevation/dist/mdc.elevation.min.css" />

import "@material/elevation/dist/mdc.elevation.css";

// let elevationCSS: string = (import.meta as any).url.split("/").slice(0, -1).join("/") + "/assets/mdc.elevation.min.css";
// let linkEl: HTMLLinkElement = document.createElement("link");
// linkEl.rel = "stylesheet";
// linkEl.href = elevationCSS;
// document.head.appendChild(linkEl);

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