import classes from "./loader.styles.module.css";

const Loader = () => {
  return (
    <div className={classes.loader__container}>
      <div className='loading'></div>
    </div>
  );
};

export default Loader;
