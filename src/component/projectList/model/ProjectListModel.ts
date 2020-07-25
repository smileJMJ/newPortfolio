import {EThumbnailType, IProjectListItem} from "../type";

class ProjectListModel {
    private readonly _title: string;
    private readonly _term: string;
    private readonly _category: string[];
    private readonly _url: string;
    private readonly _thumbnailType: EThumbnailType;
    private readonly _thumbnail: string[];

    constructor(data: IProjectListItem) {
        this._title = data.title;
        this._term = data.term;
        this._category = data.category;
        this._url = data.url;
        this._thumbnailType = data.thumbnailType;
        this._thumbnail = data.thumbnail;
    }

    get title(): string {
        return this._title;
    }

    get term(): string {
        return this._term;
    }

    get category(): string[] {
        return this._category;
    }

    get url(): string {
        return this._url;
    }

    get thumbnailType(): EThumbnailType {
        return this._thumbnailType;
    }

    get thumbnail(): string[] {
        return this._thumbnail;
    }
}

export default ProjectListModel;