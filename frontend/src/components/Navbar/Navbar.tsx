const Navbar = () => {
    return (
        <nav className="fixed z-2 top-0 left-0 w-full h-15 p-2 pl-20 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] flex justify-between items-center">
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
