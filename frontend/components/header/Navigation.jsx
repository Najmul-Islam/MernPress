import Hamburger from "./Hamburger";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <>
      <ul className="flex space-x-4 items-center ">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </ul>

      {/* <Hamburger /> */}
    </>
  );
};
export default Navigation;
