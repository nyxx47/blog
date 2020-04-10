import React, { useEffect } from 'react'
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

Router.onRouteChangeStart = () => {
  console.log("NPROGRESS is START!s")
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = url => {
      console.log('App is changing to: ', url)
    }
  
    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default App
