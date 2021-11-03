import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Menu() {
  let isLogin = false;

  return (
    <div>
      <Navbar bg="light" expand="md" className="sidebar mb-4">
        <Container>
          <Navbar.Brand href="/">매일데이</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">홈</Nav.Link>
              <Nav.Link href="/about">정보</Nav.Link>
              <Nav.Link href="/posts">게시물</Nav.Link>
            </Nav>
            <Nav>
              {isLogin ? (
                <Nav.Link href="#user_profile">회원 정보</Nav.Link>
              ) : (
                <Nav.Link href="#dede">회원가입</Nav.Link>
              )}
              <Nav.Link href="#memes">로그인</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
