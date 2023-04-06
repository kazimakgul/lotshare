import Link from "next/link"

const MobileMenu = () => {
    return(
        <div id="uni_mobile_menu" className="uni-mobile-menu uk-offcanvas" data-uk-offcanvas="mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;">
        <div className="uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100">
            <div className="uni-mobile-menu-wrap uk-flex-column uk-flex-between" data-uk-height-viewport="offset-bottom: true;">
                <div className="uni-mobile-menu-content">
                    <header className="uk-card uk-card-2xsmall uk-flex-middle uk-flex-between">
                        <div className="uk-flex-1">
                            <button aria-label="Close Menu" className="uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle" type="button">
                                <i className="uk-icon uk-icon-small unicon-close"></i>
                            </button>
                        </div>
                        <div>
                            <h5 className="uk-h5 uk-text-uppercase uk-margin-remove">Navigation</h5>
                        </div>
                        <div className="uk-flex-1"></div>
                    </header>
                    <hr className="uk-margin-remove" />
                    <div className="uk-card uk-card-small">
                        <div className="uk-panel">
                            <ul className="uk-nav uk-nav-default">
                                <li className="uk-nav-header">LotShare</li>
                                <li><Link href="#uni_minting">About</Link></li>
                                <li><Link href="#uni_about">Process</Link></li>
                                <li><Link href="#uni_collection">Collection</Link></li>
                                <li><Link href="#uni_roadmap">RoadMap</Link></li>
                                <li><Link href="#uni_faq">FAQ</Link></li>
                                {/*<li className="uk-nav-header">Inner pages</li>                           
                                <li><Link href="contact">Contact</Link></li>
    <li><Link href="404">404 page</Link></li>   */}                           
                                <li className="uk-nav-header">Content &amp; Privacy</li>
                                <li><Link href="terms">Terms of use</Link></li>
                                <li><Link href="privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default MobileMenu