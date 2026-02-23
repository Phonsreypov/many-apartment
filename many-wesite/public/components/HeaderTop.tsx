"use client"
import React from 'react'

export default function HeaderTop() {
  return (
    <>
  {/* Header Section Begin */}
  <header className="header-section header-normal">
    <div className="top-nav">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ul className="tn-left">
              <li>
                <i className="fa fa-phone" /> (12) 345 67890
              </li>
              <li>
                <i className="fa fa-envelope" /> info.colorlib@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="tn-right">
              <div className="top-social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-tripadvisor" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <a href="#" className="bk-btn">
                Booking Now
              </a>
              <div className="language-option">
                <img src="img/flag.jpg" alt="" />
                <span>
                  EN <i className="fa fa-angle-down" />
                </span>
                <div className="flag-dropdown">
                  <ul>
                    <li>
                      <a href="#">Zi</a>
                    </li>
                    <li>
                      <a href="#">Fr</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="menu-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="logo">
              <a href="/">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="nav-menu">
              <nav className="mainmenu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/rooms">Rooms</a>
                  </li>
                  <li className="active">
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="/room-details">Room Details</a>
                      </li>
                      <li>
                        <a href="/blog-details">Blog Details</a>
                      </li>
                      <li>
                        <a href="#">Family Room</a>
                      </li>
                      <li>
                        <a href="#">Premium Room</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/blog">News</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="nav-right search-switch">
                <i className="icon_search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Header End */}
</>

  )
}
