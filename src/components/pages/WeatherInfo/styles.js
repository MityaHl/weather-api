import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  today: {
    marginTop: '10px',
    marginLeft: '10px',
  },
  paper: {
    width: '90%',
    marginTop: '20px',
  },
  temperature: {
    marginRight: '20px',
    marginTop: '10px',
    '@media (max-width: 600px)': {
      fontSize: '15px',
    },
  },
  listItem: {
    borderBottom: '1px solid #d6d6d6',
  },
  listText: {
    '@media (max-width: 600px)': {
      fontSize: '15px',
    },
  },
})
