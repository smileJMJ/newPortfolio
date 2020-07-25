import {action, observable} from "mobx";
import ProjectViewRepository from "../repository/ProjectViewRepository";
import ProjectViewModel from "../model/ProjectViewModel";


class ProjectViewStore {
    @observable private _projectContent: ProjectViewModel = {};

    get projectContent(): ProjectViewModel {
        return this._projectContent;
    }

    @action
    load(id: string) {
        const self = this;
        ProjectViewRepository.load(id)
            .then(res => {
                self._projectContent = new ProjectViewModel(res.data);
            }).catch(rej => { location.href = "/error" });
    }
}

export default new ProjectViewStore();