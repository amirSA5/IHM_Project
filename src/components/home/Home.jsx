import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#f9f9f9',
    paddingTop: '40px',
  },
  banner: {
    marginTop: 0,
  },
});


const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Banner className={classes.banner} />
      <Grid container className={classes.container}>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
