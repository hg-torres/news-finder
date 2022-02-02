
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/sideBar";
import SidebarStocks from "../../components/sideBarStocks/sideBarStocks";
import "./Home.css"


export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
  
        <Posts />
        {/* <Sidebar /> */}
        <SidebarStocks/>

      </div>
    </>
  );
}
