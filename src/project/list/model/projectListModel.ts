import {action, observable} from "mobx";
import {IProjectListItem} from "../../../types";
import ProjectList from '../../../resource/json/project.json';


export default class ProjectListModel {
    @observable private _projectList: IProjectListItem[] = [];

    get projectList(): IProjectListItem[] {
        return this._projectList;
    }

    @action
    load() {
        /*const self = this;
        import('../../../resource/json/project.json')
            .then(module => {
                self._projectList = module.default;
                console.log('list', self._projectList);
            });*/
        this._projectList = ProjectList;
    }
}