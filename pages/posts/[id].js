// import Layout from '../../components/layout';
import Layout, { siteTitle } from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      post: postData,
    },
  };
}

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{post.title}</h1>
      {/* <div>{post.date}</div> */}
      <div className={utilStyles.lightText}>
        <Date dateString={post.date} />
      </div>
      <div>
        <Link href="/">
          ← Vissza a főoldalra
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </Layout>
  );
}
