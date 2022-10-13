import React from 'react';

const Home = () => (
  <div>
    <div
      className="navbar"
    >
      <h1
        className="logo"
      >
        RN
      </h1>
      <input
        id="search-bar"
        onChange={(e) => e.target.value}
        placeholder="search"
        type="text"
      />
      <p>
        About
      </p>
      <p>
        Pricing
      </p>
      <p>
        Contact
      </p>
    </div>
    <div
      className="container"
    >
      <h1>
        Real time prices of the top 25 cryptocurrencies
      </h1>
      <div
        id="stock-container"
      >
        <h3
          className="company-name"
        >
          Coin name
        </h3>
        <h1>
          companiesData
        </h1>
        <img
          className="coin-img"
          alt="coin"
          src="image"
        />
        <p>
          price :
        </p>
      </div>
    </div>
  </div>
);

export default Home;
