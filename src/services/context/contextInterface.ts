import { Post } from '../../common/interface';
import React from 'react';

export interface ContextInterface {
  posts: Post[];
  setPosts:  React.Dispatch<React.SetStateAction<Post[]>>;
  post: null | Post;
  setPost: React.Dispatch<React.SetStateAction<null | Post>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
