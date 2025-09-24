import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Second post</title>
      </Head>
      <h1>Second post</h1>
      <h2>
        <Link href="/posts/first-post">Go to First post</Link>

      </h2>
    </Layout>
  );
}
