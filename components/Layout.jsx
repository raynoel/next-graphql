// Layout utilisé dans toutes les pages
// Contient un entète qu'on peut personnaliser (title, description, keywords)
// Contient une bannière Header
// Contient un Footer
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'


export default function Layout({title, description, keywords, children }) {
  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <ContainerStyles>
        { children }
      </ContainerStyles>
    </div>
  )
}



// Variables par défault pour le titre, description, keywords
Layout.defaultProps = {
  title: 'Sick Fits',
  description: 'Les meilleur prix pour toute la famille',
  keywords: 'Chandeliers, éclairage, lampes, luminaires, néons, '
}


// Styles appliqué à toutes les pages
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --lightGrey: #e1e1e1;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
  }
  *, *:before, *:after { box-sizing: inherits; }
  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 2;
  }
  a { text-decoration: none; color: var(--black); }
  a:hover { text-decoration: underline; }
  button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

// Style appliqué au children
const ContainerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;
