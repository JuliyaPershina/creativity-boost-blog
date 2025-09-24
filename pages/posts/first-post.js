import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
      <h2>
        <Link href="/posts/second-post">Go to Second post</Link>

      </h2>
      <Alert type = 'success'>
        <p>
          This is my first post
        </p>
      </Alert>
    </Layout>
  );
}
