import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/app.css'
import 'rsuite/dist/rsuite.min.css';
import Header from "../components/nav/header";
import Footer from "../components/nav/footer";
import {AuthContextProvider} from "@/src/components/context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthContextProvider>
      <Head>
        <title>Instant Domains</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="/assets/js/flowbite.js" />
      </Head>
        <Header/>
        <div className="h-[100v]">
          <Component {...pageProps} />
        </div>
        <Footer/>
      </AuthContextProvider>
  )
}

export default MyApp