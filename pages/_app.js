// Fichier spécial qui wrap toutes les pages
// Idéal pour passer le "Layout" à toutes les pages
// Pour activer les changements, on doit exécuter >>> npm run dev
import Router from 'next/router'
import nProgress from "nprogress"             // Animation lorsqu'une page load
// import 'nprogress/nprogress.css'           // Animation par défault
import '../components/styles/nprogress.css'   // Animation personalisée
import Layout from "../components/Layout.jsx"

// Animation lorsqu'une page load
Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp