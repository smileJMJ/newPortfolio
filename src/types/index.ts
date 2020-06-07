export interface IProjectListItem {
    title: string;
    term: string;
    category: string[];
    url: string;
    thumbnail: string;
}

export interface IProjectContent {
    title: string;
    term: string;
    visual: string;
    introduce: string;
    client?: string;
    category: string[];
    role: string;
    devEnv: string;
    result?: string;
    experience: string;
}