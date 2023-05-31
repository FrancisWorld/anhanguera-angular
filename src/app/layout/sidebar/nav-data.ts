import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        rota: 'inicio',
        icon: 'home',
        label: 'Inicio'
    },
    {
        rota: 'ava',
        icon: 'book',
        label: 'AVA',
        items: [
            {
                rota: 'ava/unidade1',
                label: 'Unidade 1'
            },
            {
                rota: 'ava/unidade2',
                label: 'Unidade 2'
            },
            {
                rota: 'ava/unidade3',
                label: 'Unidade 3'
            },
            {
                rota: 'ava/unidade4',
                label: 'Unidade 4'
            },
        ]
    },
    {
        rota: 'nota',
        icon: 'grade',
        label: 'Minhas Notas'
    },
]