import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'antd';
import { useTheme } from '../../context/ThemeContext'
import styles from './index.module.scss';

function Home() {

  const { theme, handleThemeChange } = useTheme();


  return (
    <div className={styles['nav']}>
        <Radio.Group onChange={(e) => handleThemeChange(e.target.value)} value={theme}>
          <Radio.Button value="default">默认主题</Radio.Button>
          <Radio.Button value="theme1">主题一</Radio.Button>
          <Radio.Button value="theme2">主题二</Radio.Button>
        </Radio.Group>
      {/* <div onClick={onClick} className={styles['btn']} >实时数据</div>
      <div onClick={onClick} className={styles['btn']} >实时数据</div> */}

      <Link to="/current">
        <div className={styles['btn']} >实时数据</div>
      </Link>

      <Link to="/history">
        <div className={styles['btn']} >历史数据</div>
      </Link>
    </div>
  );
}

export default Home;
