import classes from './navbar.module.scss';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

import Modal from '../ui/modal/modal';
import ThemeSwitcher from './themeSwitcher';
import MenuToggle from './menuToggle';

const Navbar = (props) => {
  const { theme } = props;
  const [navExpanded, setNavExpanded] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  function setThemeHandler() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    props.newTheme(newTheme);
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  };

  const closeNav = () => {
    setNavExpanded(false);
  };

  function fixNavbar() {
    if (window.pageYOffset >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    if (!showModal) document.body.style.overflow = 'unset';
  }, [showModal]);

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
          <Link href='/'>
            <a className={classes.logo}>.</a>
          </Link>

          <nav
            className={
              navExpanded
                ? `${classes.navMenu} ${classes.responsive}`
                : `${classes.navMenu}`
            }
            id='navMenu'>
            <div className={classes.linkWrapper}>
              {/* <Link href='/#projects'>
                <a onClick={closeNav}>Projects</a>
              </Link> */}

              <Link href='/projects'>
                <a
                  onClick={() => {
                    closeNav();
                    toggleOpen();
                  }}>
                  Projects
                </a>
              </Link>

              {/* <Link href='/#blog'>
                <a onClick={closeNav}>Blog</a>
              </Link> */}

              <Link href='/posts'>
                <a
                  onClick={() => {
                    closeNav();
                    toggleOpen();
                  }}>
                  Blog
                </a>
              </Link>

              <Link href='/#about'>
                <a
                  onClick={() => {
                    closeNav();
                    toggleOpen();
                  }}>
                  About me
                </a>
              </Link>
            </div>
          </nav>

          <div className={classes.navContainer}>
            <button
              className={classes.icon}
              onClick={() => {
                showModalHandler();
              }}>
              {showModal ? (
                <i className='fa fa-envelope-open'></i>
              ) : (
                <i className='fa fa-envelope'></i>
              )}
            </button>

            <button
              className={classes.icon}
              onClick={() => {
                setThemeHandler();
              }}>
              <ThemeSwitcher theme={theme} />
            </button>

            {/* <button
              className={`${classes.icon} ${classes.iconMain}`}
              onClick={toggleNav}>
              <i className='fa fa-bars'></i>
            </button> */}

            <motion.div
              className={classes.iconMain}
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
              // custom={height}
              ref={containerRef}>
              <MenuToggle toggle={() => toggleOpen()} toggleNav={toggleNav} />
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showModal && <Modal contact onClose={closeModalHandler} />}
      </AnimatePresence>
      <main>{props.children}</main>
    </>
  );
};
export default Navbar;
