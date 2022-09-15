import React from 'react';
import cls from './PageHeader.module.css';

const PageHeader = () => {
  return (
    <header className={cls.page_header}>
      <h1 className={cls.page_title}>Countrypedia</h1>
    </header>
  )
}

export default PageHeader
