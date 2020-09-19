import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
          <script src="/custom-elements-es5-adapter.js"></script>
          {/* <script src="/webcomponents-bundle.js"></script> */}
          <script src="/counter.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
