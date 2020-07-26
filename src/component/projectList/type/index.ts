import {IThumbnail} from "../../thumbnail/type";

export interface IProjectListItem extends IThumbnail{
    title: string;
    term: string;
    category: string[];
    url: string;
}
export interface IProjectListRs {
    list: IProjectListItem[];
}