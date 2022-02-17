import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 40 : 0,
    height: 200,
    width: 200,
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 31,
    fontSize: 30,
  },
});
