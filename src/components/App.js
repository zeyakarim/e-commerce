import {BrowserRouter as Router} from 'react-router-dom';
import { 
  Navbar, 
  Wardrobe, 
  AsideComponent, 
  Accessories, 
  Locks, 
  KitchenFittings, 
  Profiles, 
  DoorClosers,
  Magnets,
  GlassFittings,
  Adhesives,
  Hinges,
  Mortise,
  Applicators,
  HardwareTool,
  HandleKnobs,
  Towerbolt,
  ShelfSupport,
  DoorWindow,
  DrawerFittings,
  Footer
} from './';



function App() {
    return (
      <Router>
        <div className='App'> 
          <nav>
            <Navbar />
          </nav>
          <main>
            <div style={{display: 'flex'}}>
              < AsideComponent/>
              <div style={{width: '64%',padding: '2%'}}>
                < Wardrobe />
                < Accessories />
                < Locks />
                < KitchenFittings />
                < Profiles />
                < DoorClosers />
                < Magnets />
                < GlassFittings />
                < Adhesives />
                < Hinges />
                < Mortise />
                < Applicators />
                < HardwareTool />
                < HandleKnobs />
                < Towerbolt/>
                < ShelfSupport />
                < DoorWindow />
                < DrawerFittings />
              </div>
            </div>
          </main>
          
          <footer>
            < Footer />
          </footer>
       </div>
      </Router>
  );
}

export default App;
