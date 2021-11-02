export default function Post({ styles, post }: any) {
  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <img className={post.logo.css} src={post.logo.src} alt="logo" />
      </div>
      <div className={styles.content}>{post.content}</div>
    </div>
  );
}
