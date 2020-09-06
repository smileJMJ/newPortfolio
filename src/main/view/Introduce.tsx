import React from 'react';
import TitleBorderBottom from "../../component/titleBorderBottom";

import css from './Introduce.scss';

const Introduce = () => {
    return (
        <section className={css.introduce}>
            <TitleBorderBottom title="저는 ___________ 을(를) 잘합니다.">
                <ul>
                    <li>디자인대로 웹에 옮기는 꼼꼼한 퍼블리싱 작업과 퀄리티를 높이는 모션 작업</li>
                    <li>웹접근성, 반응형, 크로스 브라우징, 검색 최적화, 웹사이트 프론트 설계</li>
                    <li>Ajax, Axios 등으로 API 통신 및 데이터 바인딩, 구조 설계</li>
                    <li>강한 책임감을 바탕으로 일정 준수 및 과업 완수</li>
                    <li>문제 발생 시 원인 분석 및 해결책 제시</li>
                    <li>다른 동료들과 소통하고 분위기 메이커 역할</li>
                </ul>
            </TitleBorderBottom>
            <TitleBorderBottom title="앞으로 저는 ___________ 을(를) 하고 싶습니다.">
                <ul>
                    <li>React, Vue, ES6등을 이용한 신규 서비스 개발</li>
                    <li>정적인 디자인/데이터를 인터랙티브하게 만들고 시각화하는 것</li>
                    <li>다양하고 새로운 UI/컴포넌트를 개발</li>
                    <li>새로운 기능/모듈/플러그인을 개발하고 적용</li>
                </ul>
            </TitleBorderBottom>
        </section>
    );
};

export default Introduce;