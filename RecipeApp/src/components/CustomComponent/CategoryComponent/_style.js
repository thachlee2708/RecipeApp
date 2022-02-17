import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  itemContainer: {
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
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
  textSearch: {fontSize: 20, margin: 10, flex: 1},
  searchContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  clearSearch: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
