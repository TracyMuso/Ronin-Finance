import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { FaArrowCircleRight } from 'react-icons/fa';

const Home = () => {
  const { points } = useSelector((state) => state.crypto);
  const [search, setSearch] = useState('');

  return (
    <>
      <div id="nav">
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <NavLink to="/" className="logo">
            <h1>RF</h1>
          </NavLink>
          <input placeholder="search" id="search-bar" type="text" onChange={(e) => setSearch(e.target.value)} />
          <BsSearch className="search-icon" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div id="cont">
        <h1>Real time data of the top 50 cryptocurrencies</h1>
        <div id="stock-container">
          <>
            {points
              .filter((crypto) => {
                if (search === '') {
                  return crypto;
                }
                if (crypto.name.toLowerCase().includes(search.toLowerCase())) {
                  return crypto;
                }
                return null;
              })
              .map((crypto) => (
                <div key={crypto.id} className="stock">
                  <h2>{crypto.name}</h2>
                  <img src={crypto.image} className="coin-img" alt="coin" />
                  <p>
                    price: $
                    {crypto.current_price}
                  </p>
                  <NavLink
                    className="align-self-center arrow"
                    to={`/details/${crypto.id}`}
                  >
                    <FaArrowCircleRight />
                  </NavLink>
                </div>
              ))}
          </>
        </div>
        <div id="about">
          <h2>About</h2>
          <p>
            Welcome to Ronin Finance, this is a simple web  app that shows the
            real time data of the top 50 cryptocurrencies. It consumes the
            CoinGecko Api and with that, displays various real time data about
            cryptocurrencies like the current price, price change, market cap etc. You
            can also search for a specific cryptocurrency by name in the searchbar on top.
            Once you click on the arrow, you will be redirected to a page that shows
            more data about the cryptocurrency you clicked on. You can also navigate
            back using another arrow.
          </p>
        </div>
      </div>
      <footer>
        <p>Designed with love by Tracy</p>
        <span role="img" aria-label="heart">❤️</span>
        <span>copyright &#169; 2022</span>
        <p>powered by CoinGecko</p>
      </footer>
    </>
  );
};

export default Home;
