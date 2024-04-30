import './App.css';
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import Dialogs from "./components/Dialogs/Dialogs";
import React from 'react';
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";




const App = (props) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/> } />
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/> }/>
                    <Route path='/news' render={() => <News/> }/>
                    <Route path='/music' render={() => <Music/> }/>
                    <Route path='/settings' render={() => <Settings/> }/>
                </div>
            </div>
    );
}

export default App;