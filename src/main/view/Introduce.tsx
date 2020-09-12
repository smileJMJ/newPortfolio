import React from 'react';
import TitleBorderBottom from "../../component/titleBorderBottom";

import css from './Introduce.scss';

const Introduce = () => {
    return (
        <section className={css.introduce}>
            <TitleBorderBottom title="저는 ___________ 을(를) 잘합니다.">
                <ul>
                    <li><p><strong>UI / Component 설계 및 개발</strong></p></li>
                    <li><p>Ajax, Axios 등으로 <strong>API 통신 및 데이터 바인딩</strong></p></li>
                    <li><p>디자인대로 웹에 옮기는 <strong>꼼꼼한 퍼블리싱</strong> 작업과 퀄리티를 높이는 <strong>모션</strong> 작업</p></li>
                    <li><p><strong>웹접근성, 반응형, 크로스 브라우징,</strong> 검색 최적화</p></li>
                    <li><p><strong>강한 책임감</strong>을 바탕으로 일정 준수 및 과업 완수</p></li>
                    {/*<li><p>문제 발생 시 <strong>원인 분석 및 해결책 제시</strong></p></li>*/}
                    <li><p>다른 동료들과 <strong>소통</strong>하고 <strong>분위기 메이커</strong> 역할</p></li>
                </ul>
            </TitleBorderBottom>
            <TitleBorderBottom title="앞으로 저는 ___________ 을(를) 하고 싶습니다.">
                <ul>
                    <li><p><strong>React, Vue, ES6</strong>등을 이용한 <strong>신규 서비스 개발</strong></p></li>
                    <li><p>정적인 디자인/데이터를 <strong>인터랙티브</strong>하게 만들고 <strong>시각화</strong>하는 것</p></li>
                    <li><p><strong>다양하고 새로운 UI/컴포넌트</strong>를 개발</p></li>
                    <li><p>새로운 <strong>기능/모듈/플러그인</strong>을 개발하고 적용</p></li>
                </ul>
            </TitleBorderBottom>
        </section>
    );
};

export default Introduce;