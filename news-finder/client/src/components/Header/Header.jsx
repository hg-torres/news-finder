import "./Header.css"

function Header() {
  return <div className="header">
  <div className="headerTitles">
      <span className="headerTitlesSm">News-Finder</span>
      <span className="headerTitlesLg">Blog Title</span>
  </div>
        <img className='headerImg' src="https://cdn.vox-cdn.com/thumbor/NKqmT9bcuZM8r-Q-6XlNbesqBxg=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69797630/jbareham_181010_2989_0323.0.jpg" alt="" />
  </div>;
}

export default Header;
