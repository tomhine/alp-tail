import Head from 'next/head';
import InfoBar from '../components/InfoBar';
import HeroImage from '../components/HeroImage';
import Main from '../components/wrappers/Main';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>alp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoBar />
      <HeroImage
        src="/hero-img-mobile.jpg"
        width="3933"
        height="5900"
        alt="a dressed human"
        link="#"
        text="do this thing"
      />
      <Main>
        <h2>Popular Categories</h2>
      </Main>
    </div>
  );
}
