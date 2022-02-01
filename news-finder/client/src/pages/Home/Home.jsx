import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/sideBar";
import "./Home.css"


export default function Homepage() {
  return (
    <>
      <header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
