import React from 'react';
import { Card, List } from 'antd';
import { ItemProps } from './item.props';
import style from './home.module.css'

export function ListItem({ item }: ItemProps): JSX.Element {
  return (
    <List.Item key={item.id} className={style.item}>
      <Card>
        {item.preview}
      </Card>
    </List.Item>
  )
}
