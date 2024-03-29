import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import oberig from '../img/oberig.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home Page
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/program">
                        Program
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/speakers">
                        Speakers
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/registration">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/workshop">
                        Workshop
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/sponsors">
                        Sponsors
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Useful Info
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="Oberig" href="https://oberig.ua">
                  <img
                    className="fas fa-lg"
                    src={oberig}
                    alt="Oberig"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
