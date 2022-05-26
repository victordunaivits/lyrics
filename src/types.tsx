export interface ICard {
    title: string;
    pic_src: string;
    descr: string;
    link: string;
    id: string;
}

export interface NoticiaCard {
    headline: string;
    images:any;
    kicker: string;
    url: string;
    id: string;
}

export interface Musica {
    title: string;
    band: string;
    id: string;
}

export interface ILetra {
    name: string;
    text: string;
    translate: Array<ILetra>
}

export interface IMusica {
    name: string;
    url: string;
    rank: string;
    art: Art;
}

type Art = {
    name: string;
    pic_medium: string;
}