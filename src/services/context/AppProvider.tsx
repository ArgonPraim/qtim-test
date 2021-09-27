import React, { useState } from 'react';
import { PostContext } from './postContext';
import { ChildrenProps, Post } from '../../common/interface';

export function AppProvider({ children }: ChildrenProps): JSX.Element {
  const [page, setPage] = useState(1);
  const [post, setPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  return(
    <PostContext.Provider value={{ posts, setPosts, post, setPost, page, setPage, loading, setLoading }}>
       {children}
    </PostContext.Provider>
  )
}
