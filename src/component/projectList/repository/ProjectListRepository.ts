import axios, {AxiosResponse} from 'axios';
import {IProjectListRs} from '../type';

class ProjectListRepository {
    load(): Promise<AxiosResponse<IProjectListRs>> {
        return axios({
            method: 'get',
            url: '/resource/json/project.json'
        });
    }
}

export default new ProjectListRepository();