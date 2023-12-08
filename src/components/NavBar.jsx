import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-center mt-[10px] font-montserrat text-mainLight">
      <div className="w-[1180px] h-[50px] flex items-center">
        <div>OISHI</div>

        <div className="flex justify-center ml-auto uppercase">
          <div className="mr-5 text-base font-medium">
            <span className="mr-[3.125rem] hover:text-salmon">vis menu</span>
            <span className="mr-[4.375rem] hover:text-salmon">om os</span>
          </div>
          <div>
            <span className="mr-5 hover:text-salmon">icon</span>
            <span className="mr-5 hover:text-salmon">icon</span>
            <span className="hover:text-salmon">icon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
