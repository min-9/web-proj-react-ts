import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';
import { Post } from '.';
import { ContentType } from '../types';
import { postsStyles as styles } from '../styles';

export default function Posts({ match }: any) {
  const [contents, setContents] = useState<ContentType[]>([]);
  const [indexes, setIndexes] = useState<number[]>([]);

  useEffect(() => {
    setContents([
      {
        id: 1,
        title: '첫번째 글',
        text: '첫번째 내용',
      },
      {
        id: 2,
        title: '두번째 글',
        text: '두번째 내용',
      },
      {
        id: 3,
        title: '세번째 글',
        text: '세번째 내용',
      },
      {
        id: 4,
        title: '네번째 글',
        text: '네번째 내용',
      },
    ]);
    setIndexes(Array.from({ length: contents.length }, (_, i) => i + 1));
  }, [contents.length]);

  return (
    <Container>
      <Link className={styles.linkHeader} to={'/posts'}>
        Post List
      </Link>
      <ListGroup>
        {indexes.map((id) => (
          <ListGroup.Item key={id}>
            <Link className={styles.linkItem} to={`${match.url}/${id}`}>
              Post #{id}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Route
        exact
        path={match.url}
        render={() => <h3 className={styles.h3}>Please select any post</h3>}
      />
      <Route path={`${match.url}/:id`}>
        <Post contents={contents} />
      </Route>
    </Container>
  );
}
