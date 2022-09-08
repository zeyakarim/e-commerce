import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';


function aside() {
    function showCategories(e){
        const menu = document.getElementsByClassName('categoriesContainer');
        const containerColor = document.getElementsByClassName('categories');
        const showOptions = e.target.getAttribute('data-toggle');
        // console.log('hello')
    
        if(showOptions === 'menu') {
            console.log('options')
            const toggle = menu[0].getAttribute('data-toggle');
            if(toggle === 'false'){
                menu[0].style.display = 'block';
                menu[0].setAttribute('data-toggle', true);
                containerColor[0].style.backgroundColor = '#FF6202'; 
                containerColor[0].style.color = '#ffffff';
                containerColor[0].childNodes[1].style.rotate = '180deg';
            }else{
                menu[0].style.display = 'none';
                menu[0].setAttribute('data-toggle', false);
                containerColor[0].style.backgroundColor = '#C2CCDF';
                containerColor[0].style.color = '#233750'; 
                containerColor[0].childNodes[1].style.rotate = '0deg';
            }
        }else{
            if(containerColor[1].childNodes[1].style.rotate === '0deg'){
                containerColor[1].style.backgroundColor = '#FF6202'; 
                containerColor[1].style.color = '#fff';
                containerColor[1].childNodes[1].style.rotate = '180deg';
            }else {
                containerColor[1].style.backgroundColor = '#C2CCDF'; 
                containerColor[1].style.color = '#233750';
                containerColor[1].childNodes[1].style.rotate = '0deg';
            }
        }
    
      }
    
      var prevDiv = null;
      function handleClick(e) {
        // e.preventDefault();
        var target = e.target;
    
        if(prevDiv){
          prevDiv.style.color = '#233750';
          prevDiv.style.backgroundColor = '#F8F9FB';
          prevDiv.style.borderLeft = '0px';
          e.target.style.color = '#FF6202';
          e.target.style.backgroundColor = '#fff';
          e.target.style.borderLeft = '2px solid #FF6202';
          prevDiv = target;
        }else{
          e.target.style.color = '#FF6202';
          e.target.style.backgroundColor = '#fff';
          e.target.style.borderLeft = '2px solid #FF6202';
          prevDiv = target;
        }
        
      }
    
      return (
        // <Routes>
            <div className="aside">
                <aside>
                    <div>
                        <div className='categories color' onClick={showCategories} data-toggle='menu'>
                        <p data-toggle='menu'>Furniture Fittings</p>
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                            style={{fontSize: '10px'}}
                        />
                    </div>
            
                    <div>
                        <ul className='categoriesContainer' data-toggle='false'>
                            <li>
                                <Link to="#wardrobe" onClick={handleClick} smooth>
                                    Wardrobe Fittings
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#accessories" onClick={handleClick} smooth>
                                    Accessories
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#locks" onClick={handleClick} smooth>
                                    Locks
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#kitchen" onClick={handleClick} smooth>
                                    Kitchen Fittings
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#profile" onClick={handleClick} smooth>
                                    Profiles
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#door" onClick={handleClick} smooth>
                                    Door Closers
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#magnet" onClick={handleClick} smooth>
                                    Magnets
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#glass" onClick={handleClick} smooth>
                                    Glass Fittings
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#adhesive" onClick={handleClick} smooth>
                                    Adhesives
                                </Link> 
                            </li>
            
                            <li>
                                <Link to="#hinges" onClick={handleClick} smooth>
                                    Hinges
                                </Link>
                            </li>   
            
                            <li>
                                <Link to="#mortise" onClick={handleClick} smooth>
                                    Mortise
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#applicator" onClick={handleClick} smooth>
                                    Applicators
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#hardware" onClick={handleClick} smooth>
                                    Hardware Tools
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#handle" onClick={handleClick} smooth>
                                    Handles & Knobs
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#tower" onClick={handleClick} smooth>
                                    Towerbolt
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#shelf" onClick={handleClick} smooth>
                                    Shelf Support
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#doorwindow" onClick={handleClick} smooth>
                                    Door & Window Fittings
                                </Link>
                            </li>
            
                            <li>
                                <Link to="#drawer" onClick={handleClick} smooth>
                                    Drawer Fittings
                                </Link>
                            </li>                
                        </ul>
                        </div>
                        
                    </div>

                    <div className='categories' onClick={showCategories} data-toggle='no-menu'>
                        <p data-toggle='no-menu'>Home Decor</p>
                        <FontAwesomeIcon 
                                        icon={faChevronDown} 
                                        style={{fontSize: '10px'}}
                                    />
                    </div>
                </aside>
            </div>
        // </Routes>
        
      );
}

export default aside;