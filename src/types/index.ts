export interface IProjectListItem {
    title: string;
    term: string;
    category: string[];
    url: string;
    thumbnail: string;
}

export interface ISpecs {
    category: string;
    client?: string;
    devenv: string;
    role: string;
}

export interface IProjectContent {
    title: string;
    term: string;
    visual: string;
    specs: ISpecs;
    introduce?: string;
    result?: string;
    experience?: string;
}