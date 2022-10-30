import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <p><small>House: {house}</small></p>
            <Special ></Special>
        </div>
    );
};

export default MySelf;