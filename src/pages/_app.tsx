import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import { StickyNote } from 'components/StickyNote'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Boilerplate</title>
        
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />


    </>
  )
}

export default App