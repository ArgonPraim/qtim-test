import React from 'react';
import { ContextInterface } from './contextInterface';

export const PostContext = React.createContext({
  posts: [],
  setPosts: () => {},
  post: null,
  setPost: () => {},
  page: 1,
  setPage: () => {},
  loading: false,
  setLoading: () => {},
} as ContextInterface)
