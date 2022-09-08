import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faApple, faAndroid, faFacebook, faInstagram, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {HashLink as Link} from 'react-router-hash-link';

function Footer(){
    return (
        <div className="footer">
            <div className="footerHeader">
                <div className="footerContainer">
                    <div className="mobilelogo">
                        <img
                            alt="deepologo"
                            className="mobile"
                            src="https://d1xkbitcv5i7vd.cloudfront.net/Assets/mobile+mockup.webp"
                        />
                    </div>

                    <div className="footerDescription">
                        <h1>Depo24 App Coming Soon!</h1>
                        <div style={{display: 'flex'}} className='store'>
                            <div>
                                <img
                                    alt="deepologo"
                                    src="https://d1xkbitcv5i7vd.cloudfront.net/Assets/App+store+button.webp"
                                />
                            </div>
                            <div>
                                <img
                                    alt="deepologo"
                                    src="https://d1xkbitcv5i7vd.cloudfront.net/Assets/play+store+button.webp"
                                />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="addressContainer">
                <div>
                    <p style={{fontSize: '24px'}}>DEPO24 Wholesale</p>
                    <div className="footerList">
                        <p>Frequently Asked Questions</p>
                        <p>Returns & Refund</p>
                        <p>About Us</p>
                        <p>Careers</p>
                    </div>
                </div>

                <div>
                    <p style={{fontSize: '24px'}}>CUSTOMER SERVICE</p>
                    <div className="footerList">
                        <p>Shipping Policy</p>
                        <p>Term of Service</p>
                        <p>Privacy</p>
                        <p>Cancellation</p>
                    </div>
                </div>

                <div>
                    <p style={{fontSize: '24px'}}>CONNECT WITH US</p>
                    <div className="footerList">
                        <div style={{display: 'flex',flexWrap:'wrap', justifyContent: 'space-between'}}>
                            <div style={{padding:'0px 20px 0px 0px'}}>
                                <p>Head Quater:</p>
                                <div>
                                    <p>34 D, First Floor, Pocket-1,</p>
                                    <p>Mayur Vihar Phase-1,</p>
                                    <p>Delhi - 110091</p>
                                </div>
                            </div>
                            
                            <div style={{padding:'0px 20px 0px 0px'}}>
                                <p>Kolkata Office:</p>
                                <div>
                                    <p>77/1/A, Christopher Road,</p>
                                    <p>Opp. China Garden, Topsia,</p>
                                    <p>Kolkata - 700046</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <hr></hr>
            <div className="moveTotop">
                <Link to="#" smooth>
                    <FontAwesomeIcon 
                            icon={faCircleChevronUp} 
                            style={{fontSize: '30px',
                                color:'#10243E'
                            }}
                        />
                </Link>
                
            </div>

            <div className="socialIcons">
                <div style={{display: 'flex'}} className="socialLink1">
                    <p>Download App</p>
                    <div>
                        <FontAwesomeIcon 
                            icon={faAndroid} 
                            className="mobileStore"
                        />
                        <FontAwesomeIcon 
                            icon={faApple} 
                            className='mobileStore'
                        />
                    </div>
                    
                </div>

                <div style={{display: 'flex'}} className="socialLink2">
                    <div style={{marginTop: '10px', marginLeft: '10px',display: 'flex'}}>
                        <div>
                            <FontAwesomeIcon 
                                icon={faFacebook} 
                                style={{fontSize: '25px',
                                    padding: '4px 8px 11px',
                                    color:'#10243E'
                                }}
                            />
                        </div>
                       
                        <div>
                            <FontAwesomeIcon 
                                icon={faInstagram} 
                                style={{fontSize: '25px',
                                    padding: '4px 8px 11px',
                                    color:'#10243E'
                                }}
                            />
                        </div>

                        <div>
                            <FontAwesomeIcon 
                                icon={faYoutube} 
                                style={{fontSize: '25px',
                                    padding: '4px 8px 11px',
                                    color:'#10243E'
                                }}
                            />
                        </div>

                        <div>
                            <FontAwesomeIcon 
                                icon={faLinkedin} 
                                style={{fontSize: '25px',
                                    padding: '4px 8px 11px',
                                    color:'#10243E'
                                }}
                            />
                        </div>
                    </div>
                    
                </div>

                <div className="socialLink3">
                    <p>&copy; 2022 Depo24 | All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;