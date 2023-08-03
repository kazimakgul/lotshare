import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layouts/Layout';
import HeroBannerOne from '../components/banners/HeroBannerOne';
import BrandOne from '../components/brand/BrandOne';
import Divider from '../components/Divider';
import HomeOneMinting from '../components/minting/HomeOneMinting';
import HomeOneCta from '../components/cta/HomeTwoCta';
import HomeOneNumber from '../components/number/HomeOneNumber';
import HomeOneAbout from '../components/about/HomeOneAbout';
import HomeOneCollection from '../components/collection/HomeOneCollection';
import HomeOneRoadMap from '../components/roadmap/HomeOneRoadMap2';
import TeamOne from '../components/team/TeamOne';
import FaqOne from '../components/faq/FaqOne';
import Footer2 from '../components/layouts/Footer2';
export default function NerkoTemplate() {
  return (
    
        <Layout>
			 <Head>
                <title>LotShare - Accessible and Flexible Land Investments with NFTs</title>

            </Head>			
			<HeroBannerOne/>
			<br></br>
			<Divider/>
			<HomeOneMinting/>

			<Divider/>
			<HomeOneAbout/>
			<Divider/>
			<HomeOneCollection title="yes"/>
			<Divider/>    
			<HomeOneRoadMap/> 
			<Divider/> 
			<FaqOne/>
			<Divider/> 
			<HomeOneCta/>
			
			<Footer2/>
        </Layout>
        
  	);
}
