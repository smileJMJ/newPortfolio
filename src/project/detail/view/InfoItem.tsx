import React from 'react';
import { IInfo } from '../type';

interface IProps {
    data: IInfo;
}
const InfoItem = (props: IProps) => {
    const {data} = props;

    if(data) {
        const element = [];
        const info = (function() {
            for(let key in data) {
                let val = data[key];
                element.push(
                    <li key={key}><dl>
                        <dt>{key}</dt>
                        <dd>{ key === 'link' ? <a href={val} target="_blank">{val}</a> : val}</dd>
                    </dl></li>
                );
            }
            return element;
        })();

        return <ul>{info}</ul>;
    } else return <></>;
};

export default InfoItem;