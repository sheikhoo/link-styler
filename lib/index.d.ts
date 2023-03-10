import { Setting } from "./interface";
export declare function start(s?: Setting): void;
export declare function convert(text: string, s?: Setting): string;
export declare const linkStyler: {
    start: typeof start;
    convert: typeof convert;
};
