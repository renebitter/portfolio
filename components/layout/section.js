import classes from './section.module.scss';

const Section = ({ title, props }) => {
  return (
    <section className={classes.section} id='about'>
      <div className={classes.container}>
        <h2>{title}</h2>

        <div className={classes.row}>
          <div className={classes['column-left']}>{props}</div>

          <div
            className={`${classes['column-right']} ${classes['profile-pic']}`}></div>
        </div>
      </div>
    </section>
  );
};
export default Section;
