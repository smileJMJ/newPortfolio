export interface IInfo {
    category: string;
    client?: string;
    devenv: string;
    role: string;
}

export interface INext {
    name: string;
    link: string;
}

export interface IProjectContent {
    title: string;
    term: string;
    visual: string;
    info: IInfo;
    link?: string;
    introduce?: string;
    result?: string;
    experience?: string;
    next?: INext;
}