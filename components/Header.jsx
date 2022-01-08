import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'


export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo><Link href="/">Sick fits</Link></Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  )
}


const Logo = styled.h1`
  position: relative;
  font-size: 4rem;
  margin-left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  background: red;
  a { color: white; text-decoration: none; text-transform: uppercase; padding: 0.5rem 1rem; }
`;

const HeaderStyles = styled.header`
  /* ligne de séparation entre le Header et la boite de recherche */
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
    border-bottom: 10px solid var(--black, black);
  }
  /* Ligne de séparation entre la boite de recherche et la navigation */
  .sub-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 1px solid var(--black, black);
  }
`;