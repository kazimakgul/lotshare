import Link from "next/link";

const FaqOne = () => {
    return(
        <>
            <div id="uni_faq" className="uni-faq uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                        <div className="uk-panel">
                            <h2 className="uk-h3 uk-h1@m">FAQ</h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                        <ul className="uk-card uk-card-small uk-card-large@m uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto uk-box-shadow-xsmall dark:uk-background-white-5" data-uk-accordion="collapsible: false" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What is LotShare?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">LotShare is a pioneering platform that tokenizes land lots, providing unique investment opportunities for individuals.</p>
                                    
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">How does LotShare work?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">LotShare purchases land, divides it into smaller units, and sells each unit as an NFT. Investors can buy, sell, or trade these NFTs and earn revenue from land sales on the platform.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What is an NFT?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">An NFT, or non-fungible token, is a unique digital asset that represents ownership of a specific item, such as a piece of land in the case of LotShare.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">How can I invest in LotShare?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">You can invest in LotShare by buying LOT token, LotShare Prime NFTs, or Land/Lot NFTs.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What are the benefits of investing in LotShare?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">Investors can benefit from the democratization of land ownership, global access to valuable land investment opportunities, transparent and reliable transactions through smart contract technology, shared revenue model, expanding portfolio, and exclusive benefits through LotShare Prime NFTs.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What is LOT token?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">LOT token is a cryptocurrency that can be used for buying, selling, or trading land NFTs on the LotShare platform, providing a convenient and efficient payment method. LOT token holders may also receive discounts on transaction fees and share in the revenue generated from land sales.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What are LotShare Prime NFTs?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">LotShare Prime NFTs are unique NFTs that provide exclusive benefits, such as insurance, VIP membership to LotShare land NFT owners, transaction discounts, staking rewards, governance rights, early access to new land lots, and special offers.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What are Land/Lot NFTs?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">Land/Lot NFTs are NFTs that represent a share of a specific land lot, providing investors with ownership and investment opportunities in that land.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">How do I buy and sell NFTs on LotShare?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">You can buy and sell NFTs on LotShare through your digital wallet, such as MetaMask or Trust Wallet. Additionally, you can also trade your NFTs on OpenSea and other second hand markets. Simply connect your wallet to the desired platform and follow the instructions for buying or selling NFTs.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What happens if I lose my Land/Lot NFTs?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">It is the investor's responsibility to safeguard their Land/Lot NFTs. However, if they have LotShare Prime NFT, they will have an added layer of protection as they can benefit from insurance against lost or stolen NFTs through the VIP KYC service. Additionally, LotShare also offers the option for Land NFT holders to register their NFTs to the company, providing an additional layer of protection.</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqOne;