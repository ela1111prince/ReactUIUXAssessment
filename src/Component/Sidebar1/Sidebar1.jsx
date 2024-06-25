import { useRef, useState ,useImperativeHandle} from "react";
import "./styles.css";
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: "Home",
    icon: "home",
    URL:"/Home"
  },
  {
    name: "Product Details",
    icon: "inventory_2",
    URL:"/ProductDetails",
  },
  {
    name: "Create",
    icon: "add_box",
    URL:"/Home",
    items: ["Article", "Document", "Report"],
  },
  {
    name: "Account",
    icon: "lock",
    URL:"/Home",
    items: ["Dashboard", "Logout"],
  }
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);



const NavButton = ({ onClick, name, icon, isActive, hasSubNav ,URL}) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span><Link to={URL}>{name}</Link></span>
    
    {hasSubNav && <Icon icon="expand_more" />}
  </button>
);

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);

  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => (
          <NavButton
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export const Sidebar1 = ({ childFunction }) => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };
  const [isOpen, setIsOpen] = useState(true);
  
  const handleSideBarClick = () => {
    if(isOpen){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  };


  useImperativeHandle(childFunction, () => ({
    handleSideBarClick
  }));
  return (
    <aside className={`sidebar ${isOpen ? "show" : "hide"}`}>
      
      {menuItems.map((item) => (
        <div>
          {!item.items && (
            <NavButton
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
              URL={item.URL}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
                URL={item.URL}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </div>
      ))}
    </aside>
  );
};
