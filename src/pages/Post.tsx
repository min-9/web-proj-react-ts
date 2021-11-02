import { useParams } from 'react-router';
import { MatchType } from '.';

export default function Post() {
  const params = useParams<MatchType>();
  console.log(params);

  return <div>포스트 {params.id}</div>;
}
