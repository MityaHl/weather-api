import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  autoComplit: {
    marginTop: '20px',
    width: '80%',
  },
  typography: {
    marginTop: '20px',
    fontSize: '25px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
    },
    '@media (max-width: 600px)': {
      fontSize: '15px',
    },
  },
  button: {
    marginTop: '20px',
    width: '80%',
    '@media (max-width: 900px)': {
      height: '40px',
      fontSize: '10px',
    },
  },
  select: {
    marginTop: '20px',
    width: '80%',
  },
})
