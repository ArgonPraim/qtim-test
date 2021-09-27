import React from 'react';
import style from './layout.module.css'
import { ChildrenProps } from '../interface';
import { Wrapper } from '../../components/Wrapper';

export function Layout({ children }: ChildrenProps): JSX.Element {
  return(
    <div className={style.layout}>
        <Wrapper>
          {children}
        </Wrapper>
    </div>
  )
}
