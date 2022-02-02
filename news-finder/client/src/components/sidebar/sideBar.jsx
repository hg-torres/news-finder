import "./sideBar.css"

function Sidebar() {
  return <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img id="sidebarPhoto" src="https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg" alt="" srcset="" />
            <p className="sidebarInfo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id at ratione quae aperiam quos fuga necessitatibus accusamus cum quia corporis omnis corrupti error, nesciunt quisquam impedit eligendi vel. Voluptate, ipsam?</p>
        </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
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

export default Sidebar;
