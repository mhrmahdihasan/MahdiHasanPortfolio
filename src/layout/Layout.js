import { Fragment } from "react";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
const Layout = ({ children, blog }) => {
  return (
    <Fragment>
      {/* page loading */}
      {/* End */}
      {/* Header Start */}
      <Header blog={blog} />
      {/* Main Start */}
      <main className="main-left pp-main-section">{children}</main>
      <DayNightMood />
      {blog && <BackBtn />}
    </Fragment>
  );
};
export default Layout;
