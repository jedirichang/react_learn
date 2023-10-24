import { styled } from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="home" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="home" />
          <span>Watch List</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="home" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="home" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="home" />
          <span>Series</span>
        </a>
      </NavMenu>

      <UserImage src="https://picsum.photos/200/300" />
    </Nav>
  );
}
export default Header;

const Nav = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        bottom: -6px;
        background: white;
        content: "";
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
    &:hover {
      span {
        &:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
`;
const UserImage = styled.img`
width:48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`;
