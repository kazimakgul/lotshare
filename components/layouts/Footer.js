import Link from 'next/link';
import Copyright from '../Copyright';
import ScrollUp from './ScrollUp';
import ThemeSwitcher from './ThemeSwitcher';

const Footer = ({footerSetting = {}}) => {

   return (
        <footer className="uni-footer uk-section uk-section-xlarge@m">
            <div className="uk-container">
                <div className="uk-panel">
                    <img className="uk-position-top-left" width="32" src="images/objects/ethereum-01.png" alt="object"  style={{top: "32%", left: "16%"}} />
                    <img className="uk-position-top-right" width="16" src="images/objects/x.png" alt="object" style={{top: "8%", right: "16%" }}/>
                    <img className="uk-position-bottom-right" width="16" src="images/objects/circle-01.png" alt="object" style={{bottom: "24%", right: "40%"}}/>
                    <img className="uk-position-bottom-left" width="24" src="images/objects/circle-03.png" alt="object" style={{bottom: "-8%", left: "30%"}} />
                    <div className="uk-grid uk-flex-center uk-text-center">

                    </div>

                </div>
            </div>
        <ThemeSwitcher/>
    </footer>
    
    );
};

export default Footer;
