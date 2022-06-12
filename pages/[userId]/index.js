import classes from "./index.module.css";
import Header from "../../components/header/Header";
import PublicBio from "../../components/publicBio/PublicBio";
import ViewProjects from "../../components/viewProjects/ViewProjects";

const ProfileUserPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <PublicBio />
      <ViewProjects />
    </div>
  );
};

export default ProfileUserPage;
