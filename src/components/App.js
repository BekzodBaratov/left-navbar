import React, { useState } from "react";
import { menu } from "./Base";
import "./App.scss";

function App() {
  const [open, setOpen] = useState(true);
  const [cardOpen, setCardOpen] = useState(null);

  const htmlRender = () => {
    return menu.map((text, key) => {
      return (
        <div key={key} className="sel">
          <div
            className="card flex"
            onClick={() => setCardOpen(cardOpen ? null : key)}
          >
            <i className={`${text.icon} circleIcon`}></i>
            {open ? cardText(text) : null}
          </div>
          <div className="options">
            {(key === cardOpen) & open ? openCardFunc() : null}
          </div>
        </div>
      );
    });
  };
  function openCardFunc() {
    if (!menu[cardOpen].sel) return;
    return menu[cardOpen].sel.map((el, key) => {
      return (
        <p key={key} className="option">
          {el}
        </p>
      );
    });
  }
  function cardText(text) {
    return (
      <>
        <h3 className="cardTitle">{text.title} </h3>
        {text.sel ? <i className="fa-solid fa-chevron-down"></i> : null}
      </>
    );
  }

  const reProfil = () => {
    if (open) {
      return (
        <>
          <div className="profilText">
            <h3>Bekzod Baratov</h3>
            <p>Developer</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical bar"></i>
        </>
      );
    }
  };

  return (
    <div className="contain">
      <nav className={`nav ${open ? "" : "navClose"}`}>
        <div className="profil flex">
          <div className="navImg"></div>
          {reProfil()}
        </div>
        <div className="right">
          <div
            onClick={() => setOpen(!open)}
            className={`circleArrow ${
              open ? "circleArrowOpen" : "circleArrowClose"
            }`}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="menu">{htmlRender()}</div>
      </nav>
    </div>
  );
}

export default App;
