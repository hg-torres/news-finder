
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/sideBar";
import "./Home.css"


export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
  
        <Posts />
        <Sidebar />

      </div>
    </>
  );
}
