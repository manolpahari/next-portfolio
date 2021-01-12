import { useEffect } from 'react';
import Link from "next/link";
import Head from "next/head";
import { withRouter } from "next/router";
import _JSXStyle from 'styled-jsx/style';
import Nprogress from 'nprogress';

const Layout = ({ children, title, router }) => {

    const handleRouteChangeStart = (url) => {
      console.log(url)
      Nprogress.start();
    }
    const handleRouteChangeComplete = (url) => {
        console.log(url)
        Nprogress.done();
      }

    useEffect(() => {
    
        router.events.on('routeChangeStart', handleRouteChangeStart)
    
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
          router.events.off('routeChangeStart', handleRouteChangeComplete)
        }
      }, [])

      useEffect(() => {
    
        router.events.on('routeChangeComplete', handleRouteChangeComplete)
    
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
          router.events.off('routeChangeComplete', handleRouteChangeComplete)
        }
      }, [])
    
    
  return (
    <div className="root">
      <head>
          <title>NextPortfolio</title>
      </head>
      <header className="header">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/hireme">
          <a>HireMe</a>
        </Link>
      </header>
      <h1>{title}</h1>
      {children}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} </p>
      </footer>

      <style jsx>{`
          .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .header {
              display: flex;
              justify-content: space-around;
              width: 100%;
              background-color: indigo;
              padding: 1em;
             font-size: 1.2 rem;
          }
          .header a {
             color: lightGray;
             text-decoration: none;
          }
          .header a:hover {
              font-weight: bold;
              color: darkGray;
              cursor: pointer;
          }
          .footer {
              padding: 1em;
          }
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
                font-size: 110%;
            }
        `}</style>
    </div>
  );
};

export default withRouter(Layout);
