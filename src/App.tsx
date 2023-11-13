
import { Grid } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/index.tsx';
import { RandomData } from './context.ts';
import { ContentPage } from './pages/ContentPage/index.tsx';

function App() {
  const [buttonClicked,setButtonClicked] = useState(false)
  return (
    <RandomData.Provider value={{buttonClicked,setButtonClicked}}>
      <Grid className='background'>
    <div className="App">
       <Header />
       <div style={{backgroundColor:'#F0F8FF',height:'95vh',marginLeft: '20vw',overflow:'hidden',padding:'30px'}}>
         <ContentPage />
       </div>
    </div>
    </Grid>
    </RandomData.Provider>
  );
}

export default App;
