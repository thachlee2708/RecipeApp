import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 100,
  },
  textSearch: {fontSize: 20, margin: 10, flex: 1},
  searchContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  clearSearch: {
    alignSelf: 'center',
    marginRight: 10,
  },
  wrapIconAdd: {
    alignSelf: 'flex-end',
    padding: 15,
    marginBottom: 15,
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
  emptyListText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});
