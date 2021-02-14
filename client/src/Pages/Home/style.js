import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  news_box: {
    backgroundColor: 'white',
    borderRadius: '25px 25px 0 0',
    marginTop: '-2em',
    '@media (min-device-width: 600px)': {
      marginTop: '-1em',
    },
  },
  news_container: {
    // backgroundColor: 'red',
    width: '90%',
    '@media (min-device-width: 1200px)': {
      width: '80%',
    },
  },

  news_card: {
    backgroundColor: theme.customColors[6],
    borderRadius: '5px',
    width: '390px',
    margin: 'auto',
    '@media (min-device-width: 600px)': {
      width: '100%',
      borderRadius: '14px',
    },
  },
  header_box: {
    backgroundColor: theme.customColors[3],
    height: '31vh',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      height: '33vh',
    },
    '@media (min-device-width: 900px)': {
      position: 'relative',
    },
  },
  header_img: {
    display: 'block',
    margin: 'auto',
    width: '65%',
    height: '55%',
    '@media (min-device-width: 900px)': {
      width: '36%',
      position: 'absolute',
      top: '50px',
      left: '8%',
      height: '60%',
    },
  },
  header_caption: {
    color: 'white',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    width: '90vw',
    margin: 'auto',
    padding: '1em',
    opacity: '0.77',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      fontSize: '1.54rem',
    },
    '@media (min-device-width: 900px)': {
      width: '44%',
      fontSize: '2rem',
      position: 'absolute',
      left: '49%',
      top: '14%',
    },
  },
  news_feed: {
    paddingLeft: '1em',
    paddingTop: '1em',
    textTransform: 'capitalize',
    color: theme.customColors[2],
    fontWEight: 'bolder',
    fontSize: '1.7rem',
  },

  news_content: {
    color: theme.customColors[2],
  },
  card_news_title: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingLeft: '0.2em',
    fontSize: '1.1rem',
    '@media (min-device-width: 600px)': {
      fontSize: '1.65em',
    },
  },
  card_news_body: {
    paddingLeft: '1.5em',
    fontSize: '1.16em',
    textAlign: 'left',
    '@media (min-device-width: 600px) and (max-device-width: 1199px)': {
      fontSize: '1.37em',
    },
    '@media (min-device-width: 1200px)': {
      fontSize: '1.6em',
    },
  },
}));

export default useStyles;
