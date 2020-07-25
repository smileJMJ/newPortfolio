import {action, observable} from "mobx";
import ProjectListRepository from '../repository/ProjectListRepository';
import ProjectListModel from "../model/ProjectListModel";

class ProjectListStore {
    @observable private _projectList: ProjectListModel[] = [];

    constructor() {
        this.load();
    }

    get projectList(): ProjectListModel[] {
        return this._projectList;
    }

    @action
    load() {
        const self = this;
        ProjectListRepository.load()
            .then(res => {
                const data = res.data.list;
                self._projectList = data.map(v => new ProjectListModel(v));
            }).catch(rej => { location.href = "/error" });
    }
}

// singleton
export default new ProjectListStore();