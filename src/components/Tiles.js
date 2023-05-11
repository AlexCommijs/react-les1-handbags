import React from 'react';

function Tiles({title, paragraph, tileImage, children}) {


    return (
        <section>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            {tileImage}
            {children}
        </section>
    )
}

export default Tiles
