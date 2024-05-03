import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { sidebar } from '../utils/data';
import Logo from '../assets/logo3.png';
import cancel from '../assets/cancel.svg';
import menu from '../assets/menu.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import down from '../assets/down.svg';
import user from '../assets/user.svg';

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(true);
  const [icon, setIcon] = useState(false);

  const handleBar = () => {
    setNav(!nav);
  };

  const toggleBar = () => {
    setOpen(!open);
  };

  const toggleIcon = () => {
    setIcon(!icon);
  };

  return (
    <div>
      <div className="w-screen flex items-center">
        <div onClick={handleBar} className="block md:hidden">
          {!nav ? (
            <img src={cancel} alt="" className="bg-[--text-extra] p-2 rounded-md" />
          ) : (
            <img src={menu} alt="" className="bg-[--text-extra] rounded-md p-2" />
          )}
        </div>
        <div onClick={() => navigate('/overview')}>
          <img src={Logo} alt="" className="w-[5rem] block md:hidden" />
        </div>
      </div>
      <div style={{ width: open ? '200px' : '100px' }} className="w-[400px] h-screen bg-[--layer-color] p-8 fixed z-99 sm:block hidden">
        <div className="flex items-center">
          <div onClick={() => navigate('/overview')} className="cursor-pointer">
            <img src={Logo} alt="" className="w-[5rem]" />
          </div>
          <div onClick={toggleBar} className="absolute right-[-20px]">
            {!open ? (
              <img src={left} alt="" className="bg-[--text-extra] rounded-2xl p-2 w-[35px]" />
            ) : (
              <img src={right} alt="" className="bg-[--text-extra] rounded-2xl p-2 w-[35px]" />
            )}
          </div>
        </div>
        <div>
          <div className="mt-14">
            {sidebar.map((item, index) => (
              <NavLink to={item.path} key={index} className="flex items-center gap-2 py-5">
                <img src={item.icon} alt="" className="w-[30px]" />
                <div style={{ display: open ? 'block' : 'none' }}>{item.name}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className={!nav ? 'fixed right-0 top-0 w-[60%] h-full  border-r-gray-900 bg-[--button-color] z-10 ease-in-out duration-500' : 'fixed left-[-400%]'}>
        <ul className="text-color grid items-center justify-center uppercase pt-24">
          <div onClick={toggleIcon} className="flex items-center gap-2">
            <img src={user} alt="" className="w-[40px]" />
            <p className="">Victor</p>
            {!icon ? <img src={right} alt="" className="w-[24px]" /> : <img src={down} alt="" className="w-[24px]" />}
            {icon && (
              <div className="absolute top-[8rem] right-[2rem] z-99 rounded-lg bg-[#ededed] grid items-center justify-center  w-[7rem]">
                <ul className="grid p-2 items-center cursor-pointer">
                  <li className="flex items-center gap-2  p-1 hover:bg-[--button-color] rounded-lg">
                    <NavLink to="/settings">Settings</NavLink>
                  </li>
                  <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                    <NavLink to="/setting">Log out</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {sidebar.map((item, index) => (
            <NavLink to={item.path} key={index} className="flex items-center gap-2 py-5">
              <img src={item.icon} alt="" className="w-[30px]" />
              <div style={{ display: open ? 'block' : 'none' }}>{item.name}</div>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
