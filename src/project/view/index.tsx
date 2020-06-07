import React, {useEffect, useState} from 'react';

const View = (props: any) => {
    const id = props.match.params.id;
    const [data, setData] = useState({});
    console.log(id);
    useEffect(() => {
        import(`../../resource/json/${id}.json`)
            .then(module => setData(module.default)); // dynamic import
        console.log('mount', data);
    }, []);
    console.log('data', data);
    return(
        <>
            {   data &&
                <div>
                    <h1>{data.title}</h1>
                </div>
            }
        </>
    );
};

export default View;