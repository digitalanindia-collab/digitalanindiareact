import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function NavSlider() {
          useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);
    return (
        <>
 <div className="offcanvas offcanvas-top bg-dark border-0 h-100" tabindex="-1" id="sidebarnav"
        aria-labelledby="sidebarnavLabel">
        <div className="offcanvas-header d-flex justify-content-between">
            <div className="position-relative d-flex align-items-center gap-2 site-brand">
                <i className="ri-rocket-line fs-2 lh-1 text-white"></i>
                <div className="lh-1">
                    <h5 className="fw-bold m-0 text-white">Web Agency</h5>
                    <small className="text-dark-50 text-white">Template</small>
                </div>
                <Link className="stretched-link" to="/index"></Link>
            </div>
            <Link to="/#" className="text-white" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    className="ri-close-line ri-lg"></i></Link>
        </div>
        <div className="offcanvas-body">
            <div className="sidebar-nav text-center">
                <ul className="navbar-nav justify-content-end flex-grow-1 my-5">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/index"><i className="ri-apps-2-line"></i> Home</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                    <li className="nav-item dropdown osahan-mega-menu position-static">
                        <Link className="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false"> Elements </Link>
                        <ul
                            className="dropdown-menu w-100 m-0 border-opacity-10 border-dark border-top border-bottom p-0 start-0 end-0 rounded-0">
                            <li>
                                <div className="dropdown-mega-content container">
                                    <div className="row g-0">
                                        <div className="col-lg-3 p-5 border-end border-start border-opacity-10 border-dark">
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold">Elements 1</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-accordions-toggles">Accordions &
                                                        Toggles</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-tabs">Tabs</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-icons">Icons</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-pagination">Pagination</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-cards">Cards</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-carousels">Carousels</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-modals">Modals</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-placeholders">Placeholders</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-medias">Medias</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-maps">Maps</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-forms-basic">Forms</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 p-5 border-end border-opacity-10 border-dark">
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold">Elements 2</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-buttons">Buttons</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-badges">Badges</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-lists">Lists</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-offcanvas">Offcanvas</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-image-frames">Image Frames</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-testimonials">Testimonials</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-blockquotes">Blockquotes</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-borders">Borders</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-process">Process</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-countdowns">Countdowns</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-spinners">Spinners</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 p-5 border-end border-opacity-10 border-dark">
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold">Elements 3</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-call-to-action">Call to Action</Link>
                                                </li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-pricing-tables">Pricing Tables</Link>
                                                </li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-tables">Tables</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-progress-bars">Progress Bars</Link>
                                                </li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-colors">Colors</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-dropdowns">Dropdowns</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-tooltips-popovers">Tooltips &
                                                        Popovers</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-sticky-elements">Sticky
                                                        Elements</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-typography">Typography</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/elements/elements-alerts">Alerts</Link></li>
                                            </ul>
                                        </div>
                                        <div
                                            className="col-lg-3 dropdown-mega-sub-content-block d-none d-lg-block bg-light p-5 osahan-dropdown-box border-end border-opacity-10 border-dark">
                                            <img src="/img/logo.png"
                                                className="img-fluid content-block-image osahan-dropdown-box-logo" alt="#"
                                                width="110" />
                                            <h5 className="text-dark mt-5 mb-2"> Multi-Purpose</h5>
                                            <h1 className="text-primary fw-bold">And Powerful Bootstrap based </h1>
                                            <p className="lead mb-5">
                                                Template with 180+ Valid Multi-Page & One-Page Layouts

                                            </p>
                                            <Link className="btn btn-primary px-5 py-3" to="/">GET STARTED</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown osahan-mega-menu position-static">
                        <Link className="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false"> Extra Pages </Link>
                        <ul
                            className="dropdown-menu w-100 m-0 border-opacity-10 border-dark border-top border-bottom p-0 start-0 end-0 rounded-0">
                            <li>
                                <div className="dropdown-mega-content container">
                                    <div className="row g-0">
                                        <div className="col-lg-3 p-5 border-end border-start border-opacity-10 border-dark">
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold">Portfolio</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/portfolio-full-width">Portfolio Full Width</Link>
                                                </li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/portfolio-boxed">Portfolio Boxed</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/portfolio-classNameic">Portfolio classNameic</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/portfolio-masonry">Portfolio Masonry</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/single-project">Single Project</Link></li>
                                            </ul>
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold mt-4">Additional Pages</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-coming-soon">Coming Soon</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-coming-soon-simple">Coming Soon:
                                                        Simple</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-error-404">Maintenance</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-error-404">Error 404</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-terms">Terms & Conditions</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-privacy">Privacy & Policy</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 p-5 border-end border-opacity-10 border-dark">
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold">Blog</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-grid">Blog Grid</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-grid-classNameic">Blog Grid classNameic</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-list">Blog List</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-list-sidebar">Blog List Right Sidebar</Link>
                                                </li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-left-sidebar">Blog List Left Sidebar</Link>
                                                </li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-full-width">Blog Full Width</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-post">Blog Post</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/blog-author-profile">Author Profile</Link></li>
                                            </ul>
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold mt-4">Help</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-help-center">Help Center</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-help-center-categories">Help Center:
                                                        Categories</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-help-center-article">Help Center:
                                                        Article</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 p-5 border-end border-opacity-10 border-dark">
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold">Shop</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/shop-product-grid">Product Grid</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/shop-product-list">Product List</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/shop-product-full-three-coulmn">Product Three
                                                        Coulmns</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/shop-product-full-four-coulmn">Product Four
                                                        Coulmns</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/shop-product-detail">Product Detail</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/shop-cart">Shop Cart</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/shop-checkout">Shop Checkout</Link></li>
                                            </ul>
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold mt-4">Company</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-hire-us">Hire Us</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-careers">Careers</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-careers-role-overview">Careers: Role
                                                        Overview</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-careers-apply">Careers: Apply</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 p-5 border-end border-opacity-10 border-dark">
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold">My Account</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-login">Log In v.1</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-login-2">Log In v.2</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-signup">Sign Up v.1</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-signup-2">Sign Up v.2</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/page-reset-password">Forgot Password</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/account-orders">Orders</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/account-settings">Settings</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/account-address">Address</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/my-wallet">My Wallet</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/account-notification">Notification</Link></li>
                                            </ul>
                                            <h6 className="dropdown-mega-sub-title mb-3 fw-bold mt-4">FAQ</h6>
                                            <ul className="dropdown-mega-sub-nav list-unstyled">
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/faq">FAQ v.1</Link></li>
                                                <li><Link className="dropdown-item px-0 py-1 bg-transparent"
                                                        to="/pages/faq-2">FAQ v.2</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
                <div className="d-flex align-items-center gap-3">
                    <Link to="/" className="border rounded-circle link-light icon-sm"><i
                            className="ri-facebook-circle-fill"></i></Link> <Link to="/"
                        className="border rounded-circle link-light icon-sm"><i className="ri-twitter-fill"></i></Link>
                    <Link to="/" className="border rounded-circle link-light icon-sm"><i className="ri-instagram-fill"></i></Link>
                    <Link to="/" className="border rounded-circle link-light icon-sm"><i
                            className="ri-linkedin-box-fill"></i></Link>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}