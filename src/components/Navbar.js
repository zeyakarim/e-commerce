import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faHandshake} from '@fortawesome/free-regular-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
      <div className="navbar">
        <ul className="list-items">
            <li className="listItem">
                <img
                    alt="Logo"
                    src="https://cdn.shopify.com/s/files/1/0566/3182/0333/files/LOGO-color.png?v=1649858964"
                    style={{width: '140px'}}
                />
            </li>

            <li className="searchfield1">
                <input
                    placeholder="Search for products like Hinges, Mortise, etc"
                />
            </li>

            <div style={{display:'flex'}}>
                <div className="handshake">
                    <li className="user-cart listItem partner">
                        <p style={{fontSize: '14px', color: 'gray',fontWeight: '600', width: '50%'}}>Be Our Partner</p>
                        <p>
                            <FontAwesomeIcon 
                                icon={faHandshake} 
                                style={{fontSize: '35px',
                                        padding: '4px 8px 11px',
                                        color:'#818A9B'
                                    }}
                            />
                        </p>
                    </li>
                </div>

                <div style={{display:'flex'}}>
                    <li className="user-cart listItem">
                        <p>
                            <FontAwesomeIcon 
                                icon={faUser} 
                                style={{fontSize: '25px'}}
                            />
                        </p>
                        <p>Login</p>
                    </li>

                    <li className="user-cart listItem">
                        <p>
                            <FontAwesomeIcon 
                                icon={faShoppingCart} 
                                style={{fontSize: '25px'}}
                            />
                        </p>
                        <p>Cart</p>
                    </li>
                </div>
            </div>
            
        </ul>

        <div className="searchfield2">
            <input
                placeholder="Search for products like Hinges, Mortise, etc"
            />
        </div>

      </div>
    );
}
  
export default Navbar;