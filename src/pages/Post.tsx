import React, { useCallback, useContext, useEffect } from 'react';
import { Button } from 'antd';
import { PostContext } from '../services/context';
import { useHistory, useParams } from 'react-router-dom';
import { getPost } from '../services/api';
import style from './post.module.css';
import { Spin } from 'antd';

export function Post() {
  const { id } = useParams<{id: string}>()
  const { post, setPost, loading,  setLoading } = useContext(PostContext);
  const history = useHistory();

  const loadPost = useCallback(async () => {
    try {
      setLoading(true);
      setPost(null);
      setPost(await getPost(id));
      setLoading(false);
    } catch (e) {
      alert((e as Error).message);
    }
  }, [id, setLoading, setPost]);

  useEffect(() => {
    loadPost().then();
  }, [loadPost])

  return (
    <Spin spinning={loading}>
        {post && (
          <>
            <header className={style.header}>
              <Button onClick={history.goBack}>
                Вернуться к статьям
              </Button>
              <h1 className={style.title}>{post.title}</h1>
            </header>
            <div className={style.main}>
              <p className={style.description}>
                {post.description}
              </p>
              <img alt={'Предпологаемая картинка'} src={post.image} />
            </div>
          </>
        )}
    </Spin>

  );
}
