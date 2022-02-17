import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  itemContainer: {
    marginTop: 10,
  },
  item: {
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
  },
  itemText: {
    paddingRight: 10,
    fontSize: 18,
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    borderWidth: 5,
    margin: 5,
    borderColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  wrapIcon: {
    alignSelf: 'center',
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    width: 17,
    height: 17,
    tintColor: '#009245',
  },
});
