declare module "*.riot" {
    import { RiotComponentShell } from "riot";
    const componentShell: RiotComponentShell;

    export default componentShell;
}

declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}