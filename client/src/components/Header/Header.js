import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header_container}>
      <a
        href="https://bluecorner.com.pe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blue<span>Corner</span>
      </a>
    </div>
  );
}

export default Header