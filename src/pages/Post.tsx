import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ContentType, MatchType } from '../types';
import { postStyles as styles } from '../styles';

interface PostProps {
  contents: ContentType[];
}

export default function Post({ contents }: PostProps) {
  const params = useParams<MatchType>();
  const [conts, setConts] = useState<ContentType[]>([]);

  useEffect(() => {
    setConts(contents);
  }, [contents]);

  return (
    <div className={styles.container}>
      {conts.map((cont: ContentType) =>
        cont.id === +params.id ? (
          <div className={styles.list} key={cont.id}>
            <div className={styles.title}>{cont.title}</div>
            <div className={styles.content}>{cont.text}</div>
          </div>
        ) : (
          <div key={cont.id}></div>
        )
      )}
    </div>
  );
}
