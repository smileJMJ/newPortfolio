export interface IInfo {
    category: string;
    client?: string;
    devenv: string;
    role: string;
    link?: string;
}

export interface INext {
    name: string;
    link: string;
}

export interface IProjectDetailRs {
    title: string;
    term: string;
    visual: string;
    info: IInfo;
    introduce?: string;
    result?: string;
    experience?: string;
    next?: INext;
}