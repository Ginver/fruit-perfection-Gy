// Product.js
import React from 'react';

function Product({ image, title, description}) {
    return (
        <article className="product">
            // <img src="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg" alt="citroenen" />
            <img src={image} alt={title} />
            // <h2 className="product-name">Lemon</h2>
            <h2 className="product-name">{title}</h2>
            // <p className="product-description">
            //     A lemon is too sour for most people to eat out of hand.
            //     You can use the pulp, juice and zest of lemon.
            //     The juicy, light yellow sour pulp enhances the flavor of other foods.
            // </p>
            <p className="product-description">
                {description}
                </p>
        </article>
    );
}

export default Product;