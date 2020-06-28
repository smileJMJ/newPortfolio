import {action} from "mobx";
import ProjectViewModel from "../model/projectViewModel";
import {IProjectContent} from "../types";

export default class ProjectViewVM {
    private _projectViewModel: ProjectViewModel;

    constructor() {
        this._projectViewModel = new ProjectViewModel();
    }

    get projectContent(): IProjectContent {
        return this._projectViewModel.projectContent;
    }

    @action
    load(id: string) {
        this._projectViewModel.load(id);
    }
}