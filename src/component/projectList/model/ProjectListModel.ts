import {action, observable} from "mobx";
import {IProjectListItem} from "../types";
import ProjectList from '../../../resource/json/project.json';


class ProjectListModel {
    @observable private _projectList: IProjectListItem[] = [];

    constructor() {
        this.load();
    }

    get projectList(): IProjectListItem[] {
        return this._projectList;
    }

    @action
    load() {
        this._projectList = ProjectList;
    }
}

// singleton
const projectListModel = new ProjectListModel();
export default projectListModel;