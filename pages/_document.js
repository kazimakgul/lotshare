import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20">
      <Head>
      <title>LotShare - Accessible and Flexible Land Investments with NFTs</title>
				<meta name="description" content="LotShare is a decentralized platform for buying, selling, and trading land NFTs using the LOT token. Invest in prime real estate and earn staking rewards, transaction discounts, revenue sharing, and more." />
				<meta name="keywords" content="LotShare, NFT, land NFT, LOT token, real estate, staking rewards, transaction discounts, revenue sharing" />
				<meta name="author" content="LotShare" />
				
				<meta property="og:title" content="LotShare - Accessible and Flexible Land Investments with NFTs" />
				<meta property="og:description" content="LotShare is a decentralized platform for buying, selling, and trading land NFTs using the LOT token. Invest in prime real estate and earn staking rewards, transaction discounts, revenue sharing, and more." />
				<meta property="og:image" content="https://lotshare.app/images/logo/socialLot.png" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://lotshare.app" />
				<meta property="twitter:title" content="LotShare - Accessible and Flexible Land Investments with NFTs" />
				<meta property="twitter:description" content="LotShare is a decentralized platform for buying, selling, and trading land NFTs using the LOT token. Invest in prime real estate and earn staking rewards, transaction discounts, revenue sharing, and more." />
				<meta property="twitter:image" content="https://lotshare.app/images/logo/socialLot.png" />
        </Head>
      <body className="uni-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
