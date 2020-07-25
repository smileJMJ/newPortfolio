export enum EThumbnailType { left = "left", right = "right" }
export interface IProjectListItem {
    title: string;
    term: string;
    category: string[];
    url: string;
    thumbnailType: EThumbnailType;
    thumbnail: string[];
}
export interface IProjectListRs {
    list: IProjectListItem[];
}