import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="#">Editor</a></li>
        <li><a href="#">Terminal</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
