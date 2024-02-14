import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaRegClock, FaCreativeCommons } from "react-icons/fa";
import { RiInbox2Line } from "react-icons/ri";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 account" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <RiInbox2Line className="fs-2"/>},
    { label: "History",   icon: <FaRegClock  className="fs-2"/>},
    { label: "Studio",    icon: <PiTelevisionSimple className="fs-2"/>},
    { label: "Commons",   icon: <FaCreativeCommons className="fs-2"/>},
    { label: "Help",      icon: <IoIosHelpCircleOutline className="fs-2"/>},
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;