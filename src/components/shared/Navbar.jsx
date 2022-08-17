import React, { useState } from 'react';
import '../styles/navbar.css';
import { BsSearch } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  let searchCategories = [
    'All categories',
    ' Alexa Skills',
    'Amazon Devices',
    'Amazon Fashion',
    'Amazon Fresh',
    'Amazon Pharmacy',
    'Appliances',
    'Apps & Games',
    'Baby',
    'Beauty',
    'Books',
    'Car & Motorbike',
    'Clothing &Accessories',
    'Collectibles',
    'Computers & Accessories',
    'Deals',
    'Electronics',
    'Furnitures',
    'Garden & Outdoors',
    'Gift Cards',
    'Grocery & Gourmet Foods',
    'Health & Personal Care',
    'Industrial & scientific',
    'Jewwllery',
    'Kindle Store',
    'Luggage & bags',
    'Luxury Beauty',
    'Movies & TV Shows',
    'Music',
    'Musical Instruments',
    'Office Products',
    'Pet Supplies',
    'Shoe & Handbags',
    'Software',
    'Sports, Fitness & Outdoors',
    'Tools & Home Improvements',
    'Toys & Games',
    'Under ₹500',
    'Video Games',
    'Watches',
  ];

  return (
    <div className="nav">
      <div className="navbar">
        <div className="nav-left">
          <div className="nav-logo">Ecom</div>
        </div>
        <div className="nav-fill">
          <div className="nav-search">
            <form id="nav-search-form">
              <div className="search-left">
                {/* <div id="search-dropdown-card"> */}
                <div className="search-scope">
                  <div className="search-facade">
                    <div className="search-label">
                      {/* All
                      <IoMdArrowDropdown /> */}
                      <select className="search-dropdown">
                        {searchCategories.map((category, index) => {
                          return (
                            <option
                              key={index}
                              // value="search-alias=aps"
                              select="selected"
                              current="parent">
                              {category}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className="search-fill">
                <div className="search-field">
                  <input
                    type="text"
                    id="twotabsearchtextbox"
                    value={search}
                    name="field-keywords"
                    autoComplete="off"
                    placeholder=""
                    className="search-input"
                    dir="auto"
                    tabIndex="0"
                    aria-label="Search"
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </div>
              </div>
              <div className="search-right">
                <div className="search-submit">
                  <button className="search-submit-button">
                    <BsSearch />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="nav-right">
          <div id="nav-tools">
            <a href="/" className="nav-a account-list">
              <span id="account-list-line-1">Hello, John</span>
              <div id="account-list-line-2">
                <span>Account & Lists</span>
                <IoMdArrowDropdown />
              </div>
            </a>
            <a href="/" className="nav-a orders">
              <span id="orders-line-1">Returns</span>
              <span id="orders-line-2">& Orders</span>
            </a>
            <a href="/" className="nav-a cart">
              <FiShoppingCart id="cart-logo" />
              <span id="cart-line-1">Cart</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-nav">
        <div className="nav-left">
          <div className="nav-logo">Ecom</div>
        </div>
        {open ? (
          <AiOutlineClose
            className="hamburger-icon"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <GiHamburgerMenu
            className="hamburger-icon"
            onClick={() => setOpen(!open)}
          />
        )}
        {open && (
          <div>
            <div id="nav-tools">
              <a href="/" className="nav-a account-list">
                <span id="account-list-line-1">Hello, John </span>
                <div id="account-list-line-2">
                  <span>Account & Lists</span>
                  <IoMdArrowDropdown />
                </div>
              </a>
              <a href="/" className="nav-a orders">
                <span id="orders-line-1">Returns</span>
                <span id="orders-line-2">& Orders</span>
              </a>
              <a href="/" className="nav-a cart">
                <FiShoppingCart id="cart-logo" />
                <span id="cart-line-1">Cart</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
