const Spinner = () => {
    return (
      <div className="w-6 h-6 relative">
        <div className="absolute inset-0 rounded-full animate-spin border-4 border-transparent border-t-white"></div>
        <div className="absolute inset-0 rounded-full animate-spin border-4 border-transparent border-t-red-500 delay-200"></div>
      </div>
    );
  };
  
  export default Spinner;
  