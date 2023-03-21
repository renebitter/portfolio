import classes from './navbar.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Modal from '../../layout/modal/modal';
import ThemeToggle from './themeToggle';
import MenuToggle from './menuToggle';

const Navbar = (props) => {
  const { theme } = props;

  const [sticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState();

  const [isOpen, toggleOpen] = useCycle(false, true);

  function setThemeHandler() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    props.newTheme(newTheme);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  function toggleNav() {
    toggleOpen();
  }

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
            <a className={classes.logo}></a>
          </Link>

          <nav
            className={
              isOpen
                ? `${classes.navMenu} ${classes.responsive}`
                : `${classes.navMenu}`
            }
            id='navMenu'>
            <div className={classes.linkWrapper}>
              <Link href='/projects'>
                <motion.a
                  style={{ cursor: 'pointer' }}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={toggleNav}>
                  Projects
                </motion.a>
              </Link>

              <Link href='/posts'>
                <motion.a
                  style={{ cursor: 'pointer' }}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={toggleNav}>
                  Blog
                </motion.a>
              </Link>

              <Link href='/#about'>
                <motion.a
                  style={{ cursor: 'pointer' }}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  onClick={toggleNav}>
                  About me
                </motion.a>
              </Link>
            </div>
          </nav>

          <div className={classes.navContainer}>
            <motion.button
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.icon}
              onClick={() => {
                toggleModal();
              }}>
              {showModal ? (
                <i className='fa fa-envelope-open'></i>
              ) : (
                <i className='fa fa-envelope'></i>
              )}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={classes.icon}
              onClick={() => {
                setThemeHandler();
              }}>
              <ThemeToggle theme={theme} />
            </motion.button>

            <motion.div
              className={classes.iconMain}
              initial={false}
              animate={isOpen ? 'open' : 'closed'}>
              <MenuToggle toggleNav={toggleNav} />
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showModal && <Modal contact onClose={toggleModal} />}
      </AnimatePresence>
      <main>{props.children}</main>
    </>
  );
};
export default Navbar;
