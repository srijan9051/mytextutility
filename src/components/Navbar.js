import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const circleButtonStyle = (color) => ({
    height: '30px',
    width: '30px',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    margin: '5px',
    cursor: 'pointer'
  });

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <div className="navbar-brand">{props.title}</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            <div className="dropdown mx-2">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Color Palette
              </button>
              <div className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
                <div className="d-flex justify-content-around">
                  <span style={circleButtonStyle('#0aa50a')} onClick={() => props.changeColor('#0aa50a')}></span>
                  <span style={circleButtonStyle('#0a0aa594')} onClick={() => props.changeColor('#0a0aa594')}></span>
                </div>
                <div className="d-flex justify-content-around mt-2">
                  <span style={circleButtonStyle('rgb(233 35 35 / 60%)')} onClick={() => props.changeColor('rgb(233 35 35 / 60%)')}></span>
                  <span style={circleButtonStyle('#999917')} onClick={() => props.changeColor('#999917')}></span>
                </div>
              </div>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};