import classes from './navbar.module.scss';

const Navbar = (props) => {
  //   window.onscroll = function () {
  //     fixNavbar();
  //   };
  //   const navbar = document.getElementById('navbar');

  //   function fixNavbar() {
  //     if (window.pageYOffset >= 400) {
  //       navbar.classList.add('sticky');
  //     } else {
  //       navbar.classList.remove('sticky');
  //     }
  //   }

  function navMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu.className === 'nav-menu') {
      navMenu.className += ' responsive';
    } else {
      navMenu.className = 'nav-menu';
    }
  }

  return (
    <>
      <div className={classes.navbar} id='navbar'>
        <div className={classes.container}>
          <a href='#' className={classes.logo}>
            &lt/&gt
          </a>
          <nav className={classes['nav-menu']} id='navMenu'>
            <div className={classes['link-wrapper']}>
              <a href='#about' onClick={navMenu}>
                About
              </a>
              <a href='#portfolio' onClick={navMenu}>
                Portfolio
              </a>
              <a href='#blog' onClick={navMenu}>
                Blog
              </a>
              <a href='#' onClick={navMenu} contact-modal>
                Contact
              </a>
            </div>
          </nav>
          <a
            href='javascript:void(0);'
            className={classes.icon}
            onClick={navMenu}>
            <i className='fa fa-bars'></i>
          </a>
        </div>
      </div>
      <main>{props.children}</main>
    </>
  );
};
export default Navbar;
