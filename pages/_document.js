import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
 
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Chewy&display=swap" rel="stylesheet"></link>
          <link rel='stylesheet' href='/static/css/nprogress.css'/>
        </Head>
        <body>
          <GlobalStyle/>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;