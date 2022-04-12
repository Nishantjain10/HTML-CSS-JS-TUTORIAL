const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
); 

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode =  new Darkmode();
darkmode.toggle();
console.log(darkmode.isActivated()) // will return true



import React from "react";
import "./style.widgets.skillButton.css";

export default function SkillButton(__buttonProperties) {
  function clickHandler(e) {
    e.value = "null";
  }
  return (
    <div className="skill-button-wrapper">
      <ul className="btn-properties">
        <div>
          <li>
            <a href={clickHandler}>
              <i className={__buttonProperties.startIcon1}></i>
              <span>{__buttonProperties.title1}</span>
            </a>
          </li>
          <li>
            <a href={clickHandler}>
              <i className={__buttonProperties.startIcon2}></i>
              <span>{__buttonProperties.title2}</span>
            </a>
          </li>
        </div>
        <div>
          <li>
            <a href={clickHandler}>
              <i className={__buttonProperties.startIcon3}></i>
              <span>{__buttonProperties.title3}</span>
            </a>
          </li>
          <li>
            <a href={clickHandler}>
              <i className={__buttonProperties.startIcon4}></i>
              <span className="lastTitle">{__buttonProperties.title4}</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}