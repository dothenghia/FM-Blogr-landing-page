import logo from '../../assets/images/logo.svg';
import './footer.scss'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="col-12 col-lg-3">
                        <div className="footer-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        <h1 className="footer-title">Product</h1>
                        <ul className="footer-list">
                            <li className="footer-item">Overview</li>
                            <li className="footer-item">Pricing</li>
                            <li className="footer-item">Marketplace</li>
                            <li className="footer-item">Features</li>
                            <li className="footer-item">Integrations</li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-3">
                        <h1 className="footer-title">Company</h1>
                            <ul className="footer-list">
                                <li className="footer-item">About</li>
                                <li className="footer-item">Team</li>
                                <li className="footer-item">Blog</li>
                                <li className="footer-item">Careers</li>
                            </ul>
                    </div>

                    <div className="col-12 col-lg-3">
                        <h1 className="footer-title">Connect</h1>
                            <ul className="footer-list">
                                <li className="footer-item">Contact</li>
                                <li className="footer-item">Newsletter</li>
                                <li className="footer-item">LinkedIn</li>
                            </ul>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Footer;
