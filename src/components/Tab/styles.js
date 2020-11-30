import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: height * 0.06
  },
  text: {
    textAlign: 'center'
  },
  square: {
    backgroundColor: '#6DD7D3',
    borderColor: 'white',
    height: height * 0.06,
    borderWidth: 1,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
