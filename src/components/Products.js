import React from 'react';

function Products ({advice, productImage, articleName, price}) {


    return (
        <article>
            <span>
              {advice}
            </span>
            {productImage}
            <p>
                {articleName}
            </p>
            <h4>
                {price}
            </h4>
        </article>

    )
}
export default Products