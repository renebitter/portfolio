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
      <small>
        Icons used by{' '}
        <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer'>
          Flaticon
        </a>{' '}
        &{' '}
        <a href='https://fontawesome.com/' target='_blank' rel='noreferrer'>
          Font Awesome
        </a>
      </small>
    </footer>
  );
};
export default Footer;
