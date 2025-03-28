const Navbar = () => {
    return (
        <nav className="w-full h-15 p-2 pl-20 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-white flex justify-between items-center">
            <div>
                Searchbar
            </div>
            <ul className="flex space-x-4 px-5">
                <button>Login</button>
            </ul>
        </nav>
    );
};

export default Navbar;
