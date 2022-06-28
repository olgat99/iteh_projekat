import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: '20px',
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor:'#e6d7ff'
  },
  pagination: {
    borderRadius: '20px',
    marginTop: '1rem',
    padding: '16px',
    backgroundColor:'#e6d7ff'

  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    backgroundColor:'#e6d7ff',
    borderRadius: '20px'
  },
}));
