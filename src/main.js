const Main = () => {
    const obj = Object.assign({}, {name: 'JMJ'});
    console.log('obj', obj);
    const arr = [1, 2, 3];
    arr.map(v => console.log(v));

    new Promise(function() {
        console.log('promise');
    }, 100);
};

export default Main;