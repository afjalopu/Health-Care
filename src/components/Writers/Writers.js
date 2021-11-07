import React from 'react';
import './Writer.css';

const Writers = (props) => {
    console.log( 'p', props);
    const { name, age } = props.person;
    return (
        <div>
            <h2> name { name } </h2>
        </div>
    );
};

export default Writers;