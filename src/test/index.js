import React from 'react';

import css from './test.scss';

const Test = () => {
    const obj = Object.assign({}, {name: 'JMJ1'});
    console.log('obj', obj);
    const arr = [1, 2, 3];
    arr.map(v => console.log(v));

    new Promise(function() {
        console.log('promise');
    });

    return(
        <>
            <p className={css.test}>TEST</p>
        </>
    );
};

export default Test;