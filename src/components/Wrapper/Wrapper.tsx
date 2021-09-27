import React from 'react';
import { ChildrenProps } from '../../common/interface';
import style from './wrapper.module.css';

export function Wrapper({ children }: ChildrenProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
}
