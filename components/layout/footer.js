import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialMedia}>
        <a
          href='https://github.com/renebitter'
          target='_blank'
          rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/rene-bitter/'
          target='_blank'
          rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div>© Rene Bitter</div>
    </footer>
  );
};
export default Footer;
