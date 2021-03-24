import React from 'react';
import Product from './Product';
import lemon from './assets/citroenen.jpeg';
import lime from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';
import './App.css';
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';

function App() {
    const [messageValue, setMessageValue] = React.useState('');
    const [termsAndConditionsValue, seTermsAndConditionsValue] = React.useState(false);
      return (
          <>
              <nav>
                      <ul>
                          <li>
                              <a href="/">Shop</a>
                          </li>
                          <li>
                              <a href="/">Our story</a>
                          </li>
                          <li>
                              <a href="/">Blog</a>
                          </li>
                      </ul>
                      <ShoppingCart className="shopping-cart-icon" />
                  </nav>
          <header>
              <h1>Fruit perfection</h1>
              <button type="button"
                      onClick={() => console.log("You would love to buy something!")}
                 >
                  Shop now!
              </button>
          </header>
          <main>
                <Product
                    image={lemon}
                    title="Lemon"
                    description="A lemon is too sour for most people to eat out of hand. You can use the pulp, juice and zest of lemon. The juicy, light yellow sour pulp enhances the flavor of other foods."
                />
                <Product
                    image={lime}
                    title="Lime"
                    description="Lime is related to the lemon and orange and belongs to the citrus fruit (rue family). Limes are round and smaller than lemons. The skin is thin, quite smooth and green."
                />
                <Product
                    image={ijsblokjes}
                    title="Icecubes"
                    description="An ice cube or ice cube is frozen water in the shape of a small cube. It is made in a freezer by freezing water in a plastic mold."
                />
          </main>

          <footer>
              <div className="form-container">
                  <h2>Contact form</h2>
                  <form>
                      <input
                          type="text"
                          placeholder="Type your message here"
                          name="message"
                          value={messageValue}
                          onChange={(e) => setMessageValue(e.target.value)}
                      />
                      <label htmlFor="form-terms-and-conditions">
                          <input
                              type="checkbox"
                              id="form-terms-and-conditions"
                              name="terms-and-conditions"
                              checked={termsAndConditionsValue}
                              onChange={() => seTermsAndConditionsValue(!termsAndConditionsValue)}
                          />I agree with the terms and conditions
                      </label>
                  </form>
                  <button type="submit">SEND
                  </button>
              </div>
            </footer>
              </>
      );
}

export default App;