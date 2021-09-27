import React, { useCallback, useContext, useEffect } from 'react';
import { ListGroup } from '../components/ListGroup';
import { PostContext } from '../services/context';
import { getPosts } from '../services/api';
import style from './title.module.css';

export function Home(): JSX.Element {
  const { setPosts, setLoading } = useContext(PostContext);
  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      setPosts(await getPosts());
      setLoading(false);
    } catch (e) {
      alert((e as Error).message);
    }
  }, [setPosts, setLoading]);

  useEffect(() => {
    loadPosts().then();
  }, [loadPosts])

  return(
    <>
      <h1 className={style.title}>Qtim список статей</h1>
      <ListGroup />
    </>
  )
}
