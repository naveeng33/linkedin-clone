import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const sidebarRecent = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://ak.picdn.net/shutterstock/videos/1010958296/thumb/1.jpg"
          alt=""
        />
        {/* <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFgwqRbDXsJVA/profile-displayphoto-shrink_100_100/0/1599553712537?e=1631145600&v=beta&t=-L83MzGMgSyo7k1PwRhsgLkoKIvFHK4khd5ID1-jWnQ" /> */}
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">13</p>
        </div>
        <div className="sidebar__stat">
          <p>No. of post views</p>
          <p className="sidebar__statNumber">236</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {sidebarRecent("react")}
        {sidebarRecent("programming")}
        {sidebarRecent("javascript")}
        {sidebarRecent("design")}
      </div>
    </div>
  );
}

export default Sidebar;
