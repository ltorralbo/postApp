import React, { useEffect } from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/posts/actions';

import List from '../List';
import Form from '../Form';

export default function Card() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <List posts={posts} />
      <Form />
    </Container>
  );
}
