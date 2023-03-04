interface Setting {
    bg: boolean;
    bgColor: string;
    textColor: string;
    borderRadius: number;
    showIcon: boolean;
}
export declare function linkStyler(s?: Setting): Promise<void>;
export {};
