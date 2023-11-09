import React, { useEffect, useRef, useState } from "react";
import { NavOptions } from "./NavOptions";
import { useDispatch, useSelector } from "react-redux";
import { selectNavSidebarDisplay, turnOffDisplay } from "../../slices/navSidebarSlice";

export const NavSidebar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const display = useSelector(selectNavSidebarDisplay);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleWidthResize = () => {
        setScreenWidth(window.innerWidth);
      };
    window.addEventListener("resize", handleWidthResize);

    if (screenWidth > 920) {
        dispatch(turnOffDisplay());
      }


    return () => {
        window.removeEventListener("resize", handleWidthResize);
      };
  }, [dispatch, screenWidth])

  useEffect(() => {

    const handleOutsideClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            const sidebarIcon = document.querySelector('.sidebar-icon');
            if (sidebarIcon && sidebarIcon.contains(event.target)) {
            return;
            }
            dispatch(turnOffDisplay());
        }
    };



    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dispatch]);

  return (
      <div className="sidebar-container" style={{ display: `${display}` }} ref={sidebarRef}>
        <NavOptions />
      </div>
  );
};
