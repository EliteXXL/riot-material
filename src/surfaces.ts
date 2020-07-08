let style: HTMLStyleElement = document.createElement("style");

style.innerHTML = `
.rm-black-surface {
    background: rgb(0, 0, 0);
    background: rgb(var(--color-black-surface, 0, 0, 0));
    color: rgb(255, 255, 255);
    color: rgb(var(--color-on-black, 255, 255, 255));
}
.rm-dark-surface {
    background: rgb(10, 10, 10);
    background: rgb(var(--color-dark-surface, 10, 10, 10));
    color: rgb(255, 255, 255);
    color: rgb(var(--color-on-dark, 255, 255, 255));
}
.rm-light-surface {
    background: rgb(250, 250, 250);
    background: rgb(var(--color-light-surface, 250, 250, 250));
    color: rgb(0, 0, 0);
    color: rgb(var(--color-on-light, 0, 0, 0));
}
.rm-white-surface {
    background: rgb(255, 255, 255);
    background: rgb(var(--color-white-surface, 255, 255, 255));
    color: rgb(0, 0, 0);
    color: rgb(var(--color-on-white, 0, 0, 0));
}
`;

document.head.appendChild(style);

export const black: string = "rm-black-surface";
export const dark: string = "rm-dark-surface";
export const light: string = "rm-light-surface";
export const white: string = "rm-white-surface";