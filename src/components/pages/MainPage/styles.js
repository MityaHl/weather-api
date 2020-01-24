import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  text: {
    height: '55vh',
    fontSize: '60px',
    '@media (max-width: 1200px)': {
      fontSize: '30px',
      height: '35vh',
    },
  },
})
