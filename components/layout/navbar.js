import classes from './navbar.module.scss';
import { useState, useEffect } from 'react';

const Navbar = (props) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  };

  const closeNav = () => {
    setNavExpanded(false);
  };

  function fixNavbar() {
    if (window.pageYOffset >= 400) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    window.onscroll = fixNavbar;
  }, []);

  return (
    <>
      <div
        className={
          sticky ? `${classes.navbar}  ${classes.sticky}` : `${classes.navbar} `
        }>
        <div className={classes.container}>
          <a href='#' className={classes.logo}>
            {'</>'}
          </a>
          <nav
            className={
              navExpanded
                ? `${classes.navMenu} ${classes.responsive}`
                : `${classes.navMenu}`
            }
            id='navMenu'>
            <div className={classes.linkWrapper}>
              <a href='#portfolio' onClick={closeNav}>
                Portfolio
              </a>
              <a href='#about' onClick={closeNav}>
                About
              </a>
              <a href='#blog' onClick={closeNav}>
                Blog
              </a>
              <a href='#!' onClick={closeNav}>
                Contact
              </a>
            </div>
          </nav>
          <button className={classes.icon} onClick={toggleNav}>
            <i className='fa fa-bars'></i>
          </button>
        </div>
      </div>
      <main>{props.children}</main>
    </>
  );
};
export default Navbar;
