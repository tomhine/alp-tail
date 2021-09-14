import Head from 'next/head';
import InfoBar from '../components/InfoBar';
import HeroImage from '../components/HeroImage';
import { Main } from '../components/Elements';
import useWindowSize from '../hooks/useWindowSize';

export default function Home() {
  const winWidth = useWindowSize().width;
  const heroImgSrc =
    winWidth <= 425
      ? 'hero-img-mobile-425.jpg'
      : 'woman-skeletal-hand-top-pink-bg.jpg';
  const heroImgWidth = winWidth <= 425 ? 425 : 2400;
  const heroImgHeight = winWidth <= 425 ? 637 : 1600;

  return (
    <div className="">
      <Head>
        <title>alp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoBar />
      <HeroImage
        src={`/${heroImgSrc}`}
        width={heroImgWidth}
        height={heroImgHeight}
        alt="a dressed human"
        link="#"
        text="do this thing"
      />
      <Main>
        <h2 className="text-xl font-medium text-gray-800">
          Popular Categories
        </h2>
      </Main>
    </div>
  );
}
