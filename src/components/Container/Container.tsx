import React from 'react';
import style from './Container.module.scss'

interface ChildrenType {
    children: JSX.Element
}

const Container = ({children}: ChildrenType) => {
    return <div className={style.container}>{children}</div>
};

export default Container;
