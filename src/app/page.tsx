import "./page.module.scss";
import FooterHome from "./page/Common/FooterHome";
import HeaderRow from "./page/Common/HeaderHome/HeaderRow";
import Budget from "./page/Home/Budget";
import Companies from "./page/Home/Companies";
import CreativeTeam from "./page/Home/CreativeTeam";
import DesignBlog from "./page/Home/DesignBlog";
import Explore from "./page/Home/Explore";
import JoinTeam from "./page/Home/JoinTeam";
import SlideContent from "./page/Home/SlideContent";
import TeamWork from "./page/Home/TeamWork";
import SlideHome from "./page/Home/components/SlideHome";

export default function Home() {
  return (
    <div>
      <HeaderRow />
      <SlideHome />
      <Companies />
      <TeamWork />
      <Explore />
      <Budget />
      <SlideContent />
      <CreativeTeam />
      <DesignBlog />
      <JoinTeam />
      <FooterHome />
    </div>
  );
}
