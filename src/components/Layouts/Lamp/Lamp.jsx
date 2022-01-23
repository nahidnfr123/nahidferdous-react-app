import React from "react";
import "./Lamp.scss"
import styled from 'styled-components';
import {gsap} from 'gsap'
import {Draggable} from 'gsap/all'

let Sun, Moon;

Sun = Moon = styled.svg`
  position: absolute;
  height: 46px;
  width: 46px;
  transition: all .5s linear;
`;

function Lamp({theme, toggleTheme}) {
    gsap.registerPlugin(Draggable)
    Draggable.create('.draggable', {
        type: "y",
        bounds: "#LampContainer",
        edgeResistance: 0.4,
        startY: 0.3,
        inertia: true,
        zIndex: 500,
        onPress: function () {
        },
        onDragEnd: function () {
            console.log(this.getDirection("LampContainer"))
            toggleTheme()
        }
    });
    return (
        <div>
            <div id={'LampContainer'}>
                {/*<div onClick={toggleTheme}>
                <div className={`lamp-wrapper ${theme === 'light' ? 'light' : 'dark'}`}>
                    <div className="lamp">
                        <div className="lamp__inner"/>
                    </div>
                </div>
            </div>*/}
                <div onClick={toggleTheme} className='draggable'>
                    {theme === 'light' ?
                        <Moon xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </Moon>
                        :
                        <Sun xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </Sun>}
                </div>
            </div>
        </div>
    )
}

export default Lamp