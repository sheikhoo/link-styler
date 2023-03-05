interface Setting {
    bg: boolean;
    bgColor: string;
    textColor: string;
    borderRadius: number;
    showIcon: boolean;
}
export declare function start(s?: Setting): void;
export declare function convert(text: string, s?: Setting): string;
export {};
