import FordFocus from './fordFocus';
import FordFocus1 from './fordFocus1';
import FordFocus2 from './fordFocus2';
import FordFocus3 from './fordFocus3';
import FordFocus4 from './fordFocus4';

import './App.css';

function App() {
  return (
    <>
      <div>
        <h4>Ford Focus 1</h4>
        <FordFocus ruedas="4" altura="1.67" longitud="3.45"/>
        <FordFocus1 color="Rojo" />
      </div>
      <div>
        <h4>Ford Focus 2</h4>
        <FordFocus ruedas="4" altura="1.67" longitud="3.45"/>
        <FordFocus2 color="Verde" />
      </div>
      <div>
        <h4>Ford Focus 3</h4>
        <FordFocus ruedas="4" altura="1.67" longitud="3.45"/>
        <FordFocus3 color="Azul" />
      </div>
      <div>
        <h4>Ford Focus 4</h4>
        <FordFocus ruedas="4" altura="1.67" longitud="3.45"/>
        <FordFocus4 color="Blanco" />
      </div>
      
    </>
  
  )
  

}



export default App;



