import ModuleList from "../Modules/List";
import "./index.css";
import { FaFileImport } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { BiTargetLock } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { FaClock } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="left">
        <h2>Home</h2>
        <ModuleList />
        <h2>Status</h2>
      </div>
      <div className="right">
        <button className="course-status-button">
          <FaFileImport /> Import existing content
        </button>
        <button className="course-status-button">
          <CiImport />
          Import from Commons
        </button>
        <button className="course-status-button">
          <BiTargetLock />
          Choose Home Page
        </button>
        <button className="course-status-button">
          <IoStatsChartSharp />
          View Course Stream
        </button>
        <button className="course-status-button">
          <TfiAnnouncement />
          New Announcement
        </button>
        <button className="course-status-button">
          <IoStatsChartSharp />
          New Analytics
        </button>
        <button className="course-status-button">
          <IoIosNotifications />
          View Course Notifications
        </button>
        <br />
        <h2>TODO</h2>
        <hr />
        <div className="todo-item">
          <p className="red">Grade A1 - ENV + HTML</p>
          <p className="bottom">100 points - Sept 18 at 11:59 pm</p>
        </div>
        <div className="todo-item">
          <p className="red">Grade A2 - CSS + Bootstrap</p>
          <p className="bottom">100 points - Sept 18 at 11:59 pm</p>
        </div>
      </div>
    </>
  );
}
export default Home;
