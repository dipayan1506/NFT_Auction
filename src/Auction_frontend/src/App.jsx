import React from 'react';
 import { Routes, Route } from 'react-router-dom';
// import './App.css';



class App extends React.Component {


    render(){
        return (
          <div >
               <Header/>

        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Routes path="/sell" element={<Sell/>}/>
          <Routes path="/buy" element={<Buy/>}/>
          
        </Routes>

          </div>
          );
        }

}
export default App;


