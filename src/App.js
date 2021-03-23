import React from 'react';
import './App.css';
import Product from './Product';

function App() {
  return (
    <main>
        <Product
           image = "https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg"
           title="Lemon"
           description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
        />
        <Product
            image = "https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg"
            title="Lime"
            description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
        />
        <Product
        image = "https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg"
        title="Icecubes"
        description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
        />
        // <article className="product">
        //     <img src="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg" alt="picture of a lemon"/>
        //     <h2 className="product-name">Lemon</h2>
        //     <p className="product-description">A lemon is too sour for most people to eat out of hand. You can use the pulp, juice and zest of lemon. The juicy, light yellow sour pulp enhances the flavor of other foods.</p>
        // </article>
        // <article className="product">
        //     <img src="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg" alt="picture of a lemon"/>
        //     <h2 className="product-name">Lime</h2>
        //     <p className="product-description">A lemon is too sour for most people to eat out of hand. You can use the pulp, juice and zest of lemon. The juicy, light yellow sour pulp enhances the flavor of other foods.</p>
        // </article>
        // <article className="product">
        //     <img src="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg" alt="picture of a lemon"/>
        //     <h2 className="product-name">Icecubes</h2>
        //     <p className="product-description">A lemon is too sour for most people to eat out of hand. You can use the pulp, juice and zest of lemon. The juicy, light yellow sour pulp enhances the flavor of other foods.</p>
        // </article>
    </main>
  );
}

export default App;
