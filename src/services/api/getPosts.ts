import { api } from './axiosService';
import { BASE_API, POSTS_POINT } from '../../common/constants/api';
import { Post } from '../../common/interface';

export async function getPosts(): Promise<Post[]> {
  return await api.get<any, Post[]>(`${BASE_API}${POSTS_POINT}`);
}
