interface Logo {
  src: string;
  css: string;
}

export default interface PostType {
  id: number;
  title: string;
  content: string;
  logo: Logo;
}
