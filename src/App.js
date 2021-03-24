import React from 'react';
import Product from './Product';
import lemon from './assets/citroenen.jpeg';
import lime from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';
import './App.css';
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';

function App() {
    const [messageValue, setMessageValue] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    function sendForm() {
        console.log(`The message: "${messageValue}" has been sent successfully.`);
        setSubmitted(true);
    }

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
                          className={messageValue.length > 200 ? 'input-error' : ''}
                          value={messageValue}
                          onChange={(e) => setMessageValue(e.target.value)}
                      />
                      {messageValue.length > 200 && <p className="error-message">Your message is too long! Max. length: 200 character.</p>}

                      <label htmlFor="form-terms-and-conditions">
                          <input
                              type="checkbox"
                              id="form-terms-and-conditions"
                              name="terms-and-conditions"
                              checked={checkedTerms}
                              onChange={() => toggleCheckedTerms(!checkedTerms)}
                          />I agree with the terms and conditions
                      </label>

                  <button
                      type="submit"
                      disabled={!checkedTerms}
                      // onClick={() => setSubmitted(true)}
                      onClick={sendForm}
                  >SEND
                  </button>
                  </form>
              </div>
            </footer>
              </>
      );
}

export default App;