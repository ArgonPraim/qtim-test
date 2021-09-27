import React, { useContext } from 'react';
import { List } from 'antd';
import { ListItem } from './ListItem';
import { Link } from 'react-router-dom';
import { Post } from '../../common/interface';
import { PostContext } from '../../services/context';
import style from './home.module.css';

export function ListGroup(): JSX.Element {
  const { posts, page, setPage, loading } = useContext(PostContext);
  const startIndex: number = page * 10 - 10;
  const endIndex: number = page * 10;

  return (
    <div>
      <List
        loading = {loading}
        grid={{ gutter: 10, column: 2 }}
        dataSource={[...posts].slice(startIndex, endIndex)}
        pagination={{
          className: style.pagination,
          total: posts.length,
          pageSize: 10,
          showSizeChanger: false,
          onChange: (page) => setPage(page)
        }}
        renderItem={(item: Post) => (
          <Link to={item.id}>
            <ListItem item={item} />
          </Link>
        )}
      />
    </div>
  )
}
