/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    height: '100%',
    width: '100%',
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  input: {
    backgroundColor: 'white',
    height: 42,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    flexGrow: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'white',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    // react native ngu vch nó phải row mới có
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  subItem: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    gap: 12,
  },
  circle: {
    height: 14,
    width: 14,
    borderRadius: 12,
    // backgroundColor: 'black',
    borderColor: '#92c3d5',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  square: {
    height: 24,
    width: 24,
    borderRadius: 5,
    backgroundColor: '#92c3d5',
  },
  mt_16: {
    marginTop: 16,
  },
});
