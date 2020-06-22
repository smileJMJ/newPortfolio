import {action, observable} from "mobx";
import ProjectListModel from "../model/ProjectListModel";
import {IProjectListItem} from "../../../types";

export default class ProjectListVM {
    private _projectListModel: ProjectListModel;
    @observable private _listData: IProjectListItem[] = []; // 리스트에 노출할 데이터 - 필터 구현 위해 노출 리스트를 state로 만듬

    constructor() {
        this._projectListModel = new ProjectListModel();
    }

    get listData(): IProjectListItem[] {
        return this._listData;
    }

    @action
    load() {
        this._projectListModel.load();
        this._listData = this._projectListModel.projectList.slice();
        console.log('vm', this._listData);
    }

    @action
    filter(val: string) {
        // category 로 필터할 예정
    }
}