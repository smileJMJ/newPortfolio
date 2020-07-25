import {IInfo, INext, IProjectDetailRs} from "../type";

class ProjectViewModel {
    private readonly _title: string;
    private readonly _term: string;
    private readonly _visual: string;
    private readonly _info: IInfo;
    private readonly _introduce: string | undefined;
    private readonly _result: string | undefined;
    private readonly _experience: string | undefined;
    private readonly _next: INext | undefined;

    constructor(data: IProjectDetailRs) {
        this._title = data.title;
        this._term = data.term;
        this._visual = data.visual;
        this._info = data.info;
        this._introduce = data.introduce;
        this._result = data.result;
        this._experience = data.experience;
        this._next = data.next;
    }

    get title(): string {
        return this._title;
    }

    get term(): string {
        return this._term;
    }

    get visual(): string {
        return this._visual;
    }

    get info(): IInfo {
        return this._info;
    }

    get introduce(): string | undefined {
        return this._introduce;
    }

    get result(): string | undefined {
        return this._result;
    }

    get experience(): string | undefined {
        return this._experience;
    }

    get next(): INext | undefined {
        return this._next;
    }
}

export default ProjectViewModel;