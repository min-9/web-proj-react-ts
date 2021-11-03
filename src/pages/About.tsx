import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { MatchType, PostType } from '../types';
import { Post } from '../components';
import { Container } from 'react-bootstrap';
// css module
import { aboutStyles as styles } from '../styles';
// import logos
import { c_logo, java_logo, py_logo, js_logo, go_logo } from '../img/icons';

export default function About() {
  const params = useParams<MatchType>();
  const location = useLocation();
  console.log(location);

  const matchString = 'true'; // 여기에서 설정
  // url: homepage/page/id?key=value
  const key = location.search.substr(
    1,
    location.search.length - matchString.length - 2
  );

  const query: queryString.ParsedQuery<string> = queryString.parse(
    location.search
  );

  const isTrue: boolean = query[key] === matchString;

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        title: 'C',
        content: `C (/ˈsiː/, as in the letter c) is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.`,
        logo: {
          src: c_logo,
          css: styles.c_logo,
        },
      },
      {
        id: 2,
        title: 'Java',
        content: `Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.`,
        logo: {
          src: java_logo,
          css: styles.java_logo,
        },
      },
      {
        id: 3,
        title: 'Python',
        content: `Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.`,
        logo: {
          src: py_logo,
          css: styles.py_logo,
        },
      },
      {
        id: 4,
        title: 'JavaScript',
        content: `자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 연관성은 약하다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다. 자바스크립트는 ECMA스크립트(ECMAScript)의 표준 사양을 가장 잘 구현한 언어로 인정받고 있으며 ECMAScript 5 (ES5) 까지는 대부분의 브라우저에서 기본적으로 지원되었으나 ECMAScript 6 이후부터는 브라우저 호환성을 위해 트랜스파일러로 컴파일된다.`,
        logo: {
          src: js_logo,
          css: styles.js_logo,
        },
      },
      {
        id: 5,
        title: 'Go(lang)',
        content: `Go는 2009년 구글에서 일하는 로버트 그리즈머, 롭 파이크, 켄 톰프슨이 개발한 프로그래밍 언어이다. 가비지 컬렉션 기능이 있고, 병행성(concurrent)을 잘 지원하는 컴파일 언어다. 구문이 C와 비슷하지만 메모리 보안, 쓰레기 수집, 구조 타이핑, CSP 스타일 병행성을 제공한다. 이 언어는 golang.org이라는 도메인 이름 때문에 종종 고랭(Golang)으로도 호칭되지만 정확한 명칭은 Go이다.`,
        logo: {
          src: go_logo,
          css: styles.go_logo,
        },
      },
    ]);
  }, []);

  return (
    <Container>
      <h2>About {params.id}</h2>
      {isTrue ? (
        posts.map((post) => <Post key={post.id} styles={styles} post={post} />)
      ) : (
        <div>
          <div>nothing</div>
        </div>
      )}
    </Container>
  );
}
