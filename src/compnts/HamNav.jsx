import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

export default function ResponsiveNav() {
  const navItems = [
    { label: "Home", path: "home" },
    { label: "About", path: "about" },
    { label: "Projects", path: "projects" },
    { label: "Contact", path: "contact" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Mobile Hamburger Nav */}
      <div className="block lg:hidden">
        <IconButton variant="text" size="sm" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2 text-black" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2 text-black z-50" />
          )}
        </IconButton>

        <Drawer
          open={isDrawerOpen}
          onClose={closeDrawer}
          placement="right"
          className="rounded-none text-[#BFAF7A] bg-orange-50"
        >
          <Card
            color="transparent"
            shadow={false}
            className="h-[calc(150vh-2rem)] w-full p-4 rounded-none border border-gray-500"
          >
            <div className="mb-2 flex items-center gap-4 p-4">
              <h1
                className="text-2xl text-black"
                style={{ fontFamily: "Minecraft" }}
              >
                
              </h1>
            </div>
            <hr className="my-2 border-blue-gray-50" />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} className="flex justify-center">
                  <Link
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-70} // adjust for sticky header
                    className="cursor-pointer font-poppins text-xl hover:text-[#3F3F3F]"
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Card>
        </Drawer>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-end gap-8 p-4 ">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            smooth={true}
            duration={500}
            offset={-70}
            className="font-poppins text-lg relative pb-1 hover:text-[#3F3F3F] transition-colors cursor-pointer"
          >
            {item.label}
            {/* underline when active */}
          </Link>
        ))}
      </div>
    </>
  );
}
