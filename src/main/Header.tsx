import React from 'react'

export default function Header() {
  return (
    <div>
       <header
                id="masthead"
                className="header header-3 without-mobile-search header-dynamic-typo extended-menu"
                data-header-fixed="true"
                data-fixed-initial-offset="250"
            >
                <div className="header-wrap">
                    <div className="header-wrap-inner">
                        <div className="left-part">
                            <div className="mobile-hamburger -left">
                                <div
                                    className="hamburger btn-round btn-round-light dark-mode-reset"
                                tabIndex={1}
                                >
                                    <i className="ion">
                                        <a
                                            href="#"
                                            className="hamburger-holder"
                                            aria-controls="site-navigation"
                                            aria-expanded="false"
                                        >
                                            <span className="_shape"></span>
                                            <span className="_shape"></span>
                                        </a>
                                    </i>
                                </div>
                            </div>
                            <div className="branding">
                                <a
                                    className="branding-title font-titles"
                                    href="https://tamalsen.dev/"
                                    rel="home"
                                >
                                    <div className="logo" style={{ display: "flex" }}>
                                        <img
                                            src={""}
                                            className=" main-logo"
                                        // srcset={"https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light@2x.png 2x"}
                                        // alt="Poonam_Ghewande"
                                        />
                                        <img
                                           src={""}
                                            className=" dark-scheme-logo"
                                            // srcset="
                                            //   https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-dark@2x.png 2x
                                            // "
                                            alt="Poonam_Ghewande"
                                        />
                                    </div>
                                    <div className="fixed-logo">
                                        <noscript>
                                            <img
                                               src={""}
                                                //   srcset="
                                                //     https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light@2x.png 2x
                                                //   "
                                                alt="Poonam_Ghewande"
                                            />
                                        </noscript>
                                        <img
                                            className=" ls-is-cached lazyloaded"
                                            src={""}
                                            // data-src="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light.png"
                                            // data-srcset="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light@2x.png 2x"
                                            alt="Poonam_Ghewande"
                                        // srcset="
                                        //   https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light@2x.png 2x
                                        // "
                                        />
                                    </div>
                                    <div className="for-onepage">
                                        <span className="dark hidden">
                                            <noscript>
                                                <img
                                                   src={""}
                                                    // srcset="
                                                    //   https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light@2x.png 2x
                                                    // "
                                                    alt="Poonam_Ghewande"
                                                />
                                            </noscript>
                                            <img
                                                className="lazyload"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                //   data-src="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light.png"
                                                //   data-srcset="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-light@2x.png 2x"
                                                alt="Poonam_Ghewande"
                                            />
                                        </span>
                                        <span className="light hidden">
                                            <noscript>
                                                <img
                                                   src={""}
                                                    // srcset="
                                                    //   https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-dark@2x.png 2x
                                                    // "
                                                    alt="Poonam_Ghewande"
                                                />
                                            </noscript>
                                            <img
                                                className="lazyload"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                //   data-src="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-dark.png"
                                                //   data-srcset="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-dark@2x.png 2x"
                                                alt="Poonam_Ghewande"
                                            />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="right-part right">
                            <nav
                                id="site-navigation"
                                className="nav with-counters with-mobile-menu visible"
                                data-mobile-menu-second-click-link="1"
                            >
                                <div className="mbl-overlay menu-mbl-overlay">
                                    <div className="mbl-overlay-bg"></div>
                                    <div className="close-bar text-left">
                                        <div
                                            className="btn-round btn-round-light clb-close"
                                        tabIndex={0}
                                        >
                                            <i className="ion ion-md-close"></i>
                                        </div>
                                    </div>
                                    <div className="mbl-overlay-container">
                                        <div id="mega-menu-wrap" className="nav-container">
                                            <ul id="primary-menu" className="menu">
                                                <li
                                                    id="nav-menu-item-218049-669cfb8f4e264"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        // href="/#hero-section"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// home</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218047-669cfb8f4e2d7"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#expertise"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// expertise</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218045-669cfb8f4e325"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#work"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// work</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218046-669cfb8f4e370"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#experience"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// experience</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218048-669cfb8f4e3b5"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#contact"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// contact</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul id="mobile-menu" className="mobile-menu menu">
                                                <li
                                                    id="nav-menu-item-218049-669cfb8f4eb90"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#hero-section"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// home</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218047-669cfb8f4ec1d"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#expertise"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// expertise</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218045-669cfb8f4ec64"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#work"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// work</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218046-669cfb8f4eca6"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#experience"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// experience</span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="nav-menu-item-218048-669cfb8f4ece7"
                                                    className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                                                >
                                                    <a
                                                        href="/#contact"
                                                        className="menu-link main-menu-link item-title"
                                                    >
                                                        <span>// contact</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="copyright">
                                            © 2021. Made with passion by
                                            <a href="#" target="_blank">
                                                Poonam_Ghewande
                                            </a>
                                            . <br />
                                            All right reserved.
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="close-menu" style={{ right: "-100%" }}></div>
                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}
