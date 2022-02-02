import "./Header.css"

function Header() {
  return <div className="header">
  <div className="headerTitles">
      {/* <span className="headerTitlesSm">News-Finder</span> */}
      {/* <span className="headerTitlesLg">News-Finder</span> */}
  </div>
  <img className="headerImg"src={require('./NewsShadow.png')} />
  </div>;
}

export default Header;
