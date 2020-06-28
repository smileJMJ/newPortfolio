import {action, observable} from "mobx";
import {IProjectContent} from "../../../types";


export default class ProjectViewModel {
    @observable private _projectContent: IProjectContent = {};

    get projectContent(): IProjectContent {
        return this._projectContent;
    }

    @action
    load(id: string) {
        const self = this;
        import(`../../../resource/json/${id}.json`)
            .then(module => {
                self._projectContent = module.default;
            });
    }
}