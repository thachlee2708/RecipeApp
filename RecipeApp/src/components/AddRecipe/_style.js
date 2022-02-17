import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const height = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFD7A',
  },
  scroll: {
    marginHorizontal: 10,
    height: height,
  },
  text: {fontSize: 25, marginVertical: 10, color: 'black'},
  textInput: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSaveText: {
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
});
