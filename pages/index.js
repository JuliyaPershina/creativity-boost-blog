import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
// import styles from '../styles/Home.module.css';

// import Script from 'next/script';
import Layout, { siteTitle } from '../components/Layout';
import utileStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Creativity Boost</title>
        <meta
          name="description"
          content="Csodás és egzedülálló lehetőség az ÓE Keleti Károly Karon a kreativ energiák fejlesytésére."
        ></meta>
      </Head>
      <section className={utileStyles.headingMd}>
        <p>
          Csodás és egzedülálló lehetőség az ÓE Keleti Károly Karon a kreativ
          energiák fejlesytésére.
        </p>
        <h2 className={utileStyles.headingMd}>Blog</h2>
      </section>
      <section className={`${utileStyles.headingMd} ${utileStyles.padding1px}`}>
        <ul className={utileStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={utileStyles.listItem}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
