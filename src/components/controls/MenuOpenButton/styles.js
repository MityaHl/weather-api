import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  button: {
    marginTop: '20px',
    width: '90%',
    '@media (max-width: 900px)': {
      height: '40px',
      fontSize: '10px',
    },
  },
})
