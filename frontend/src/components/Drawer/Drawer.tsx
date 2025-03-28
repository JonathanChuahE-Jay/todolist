import { Link } from "@tanstack/react-router";
import { FaHome, FaList, FaCog } from "react-icons/fa";

const Drawer = () => {
    const links = [
        { name: "Home", link: "/", icon: <FaHome size={24} className="text-gray-700" /> },
        { name: "To Do List", link: "/list", icon: <FaList size={24} className="text-gray-700" /> }
    ];

    return (
        <nav className="group fixed left-0 top-0 h-full w-[60px] hover:w-[200px] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] transition-all duration-300 bg-white flex flex-col justify-between z-3">
            <div>
                <div className="flex items-center justify-center">
                    <img src="/wolf2.gif" className="h-[60px] w-full object-cover" alt="Logo" />
                </div>
                <div className="p-1">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.link}
                            className="flex items-center gap-4 w-full h-[60px] hover:bg-gray-200 transition border-b-1 border-gray-500 text-gray-700 px-3"
                        >
                            <div className="flex items-center justify-center w-[24px] h-[24px]">
                                {link.icon}
                            </div>
                            <span className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 text-md font-bold whitespace-nowrap">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="p-1">
                <Link
                    to="/settings"
                    className="flex items-center gap-4 w-full h-[60px] hover:bg-gray-100 transition border-t border-gray-500 text-gray-700 px-3"
                >
                    <div className="flex items-center justify-center w-[24px] h-[24px]">
                        <FaCog size={24} className="text-gray-700" />
                    </div>
                    <span className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 text-md font-bold whitespace-nowrap">
                        Settings
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Drawer;
