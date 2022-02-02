import "./sidebarstocks.css"

function SidebarStocks() {
  return <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">STOCKS</span>
            <p className="sidebarInfo">Insert chart img above</p>
        </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">TICKERS</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">#Life</li>
            <li className="sidebarListItem">#Music</li>
            <li className="sidebarListItem">#Sports</li>
            <li className="sidebarListItem">#Cinema</li>
            <li className="sidebarListItem">#Tech</li>
        </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">Follow us</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fab fa-twitter-square"></i>
    <i className="sidebarIcon fab fa-instagram-square"></i>
    <i className="sidebarIcon fab fa-facebook-square"></i>
    </div>
    </div>
  </div>;
}

export default SidebarStocks;
