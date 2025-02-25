
const Navbar = () => {
    return (
      <>
        <div className="flex bg-[#00ffdd] justify-between px-20 items-center h-[10vh] left-0 top-0 w-full fixed">
          <div className="text-[#001effbd] text-[24px] font-bold">
            Meow Store
          </div>
  
          <div>
            <ul className="flex space-x-12 text-[12px] text-[#001effbd]">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
export default Navbar;