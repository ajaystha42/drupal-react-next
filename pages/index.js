import styles from "./../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {data.map((user, i) => {
          return (
            <div key={i}>
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Mail: {user.mail}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
  const res = await fetch(
    "http://localhost:8888/my-drupal-site/api/single-user-view/2"
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
