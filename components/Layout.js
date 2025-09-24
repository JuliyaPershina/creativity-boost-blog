import styles from './Layout.module.css';
import utileStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const siteTitle = 'Creativity Boost';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/main-logo.jpg" />
        <meta name="description" content={siteTitle}></meta>
        <meta property="og:title" content={siteTitle}></meta>
        <meta property="og:description" content={siteTitle}></meta>
        <meta property="og:image" content="/images/main.jpg"></meta>
      </Head>
      <header>
        {home ? (
          <>
            <Image
              priority
              src="/images/main.jpg"
              layout="responsive" // ⬅️ підлаштовується під ширину батька
              width={1920} // будь-які вихідні пропорції (ширина)
              height={1080} // відповідна висота
              alt="Creativity Boost class"
            />
            <h1>{siteTitle}</h1>
          </>
        ) : (
          <>
            <Image
              priority
              src="/images/main-logo.jpg"
              height={108}
              width={108}
              alt="Creativity Boost logo"
            />

            <h2 className={utileStyles.headingLg}>
              <Link href="/" className={utileStyles.colorInherit}>
                {siteTitle}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/" className={utileStyles.backToHome}>
            ← Vissza a főoldalra
          </Link>
        </div>
      )}
    </div>
  );
}
