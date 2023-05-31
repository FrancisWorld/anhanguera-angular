export interface INavbarData {
    rota: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    items?: INavbarData[];
}