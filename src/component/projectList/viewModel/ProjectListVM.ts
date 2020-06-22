import {action, observable} from "mobx";
import projectListModel from "../model/ProjectListModel";
import {IProjectListItem} from "../types";

class ProjectListVM {
    get projectList(): IProjectListItem[] {
        return projectListModel.projectList;
    }

    @action
    filter(val: string) {
        // category 로 필터할 예정
    }
}

// singleton
const projectListVM = new ProjectListVM();
export default projectListVM;