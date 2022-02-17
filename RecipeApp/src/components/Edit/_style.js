import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFD7A',
    padding: 10,
  },
  imgButton: {
    margin: 10,
    padding: 0,
  },
  textInput: {
    fontSize: 20,
    borderWidth: 0.8,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  foodPhoto: {
    height: width * 0.9,
    width: width * 0.9,
    alignSelf: 'center',
    borderWidth: 8,
    borderRadius: 180,
    borderColor: 'white',
  },
  button: {
    backgroundColor: '#8cc631',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 60,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
