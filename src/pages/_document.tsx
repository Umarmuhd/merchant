import Document, { Head, Main, Html, NextScript, DocumentContext } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  render() {
    return (
      <Html
        lang="pl-PL"
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
        itemScope
        itemType="http://schema.org/WebPage"
        className="h-full"
      >
        <Head></Head>
        <body className="h-full">
          <Main />
          {/* @ts-ignore */}
          <div id="checkgate" to="io8jxk8dr4"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
