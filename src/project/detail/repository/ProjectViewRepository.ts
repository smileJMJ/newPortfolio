import axios, {AxiosResponse} from 'axios';
import {IProjectDetailRs} from "../type";

class ProjectViewRepository {
    load(id: string): Promise<AxiosResponse<IProjectDetailRs>> {
        return axios({
            method: 'get',
            url: `/resource/json/${id}.json`
        });
    }
}

export default new ProjectViewRepository();