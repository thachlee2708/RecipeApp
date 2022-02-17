import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const height = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#FFFD7A',
    padding: 10,
  },
  imgButton: {
    borderWidth: 1,
  },
  text: {
    fontSize: 25,
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 60,
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
    borderWidth: 8,
    borderRadius: 180,
    borderColor: 'white',
  },
});
