import Document, { Head, Main, NextScript } from "next/document";
import _JSXStyle from 'styled-jsx/style';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
                    <meta type="description" content="A site for my programming portfolio"/>
                    <meta type="robot" content="nofollow nocontent"/>
                    <meta type="viewport" content="width=device-width"/>
                </Head>
                <body>  
                    <Main/>
                    <NextScript/>
                    <style global jsx>{`
                        body {  
                            font-family: "Roboto", sans-serif;
                        }
                    `}</style>
                </body>
            </html>
        )
    }
}