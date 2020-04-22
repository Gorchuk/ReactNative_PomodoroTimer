import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 50,
    borderRadius:5,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 6,
    paddingRight: 3,
    position: 'absolute',
    top: 100
  },
  helpInfo: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 25,
    alignSelf: 'center'
  },
  smallHelp: {
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
    color: 'green'
  },
  helpInfoContainer: {
    height: 50,
    justifyContent: 'flex-start',
  },
  button: {
    marginHorizontal: 5,
    marginBottom: 20,
    textAlign:'center',
    backgroundColor:'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green'
  },
  menu: {
    marginLeft: 10,
    marginRight: 10,
    width: 90,
    height: 35,
  },
  pickerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  pickerText: {
    color: 'green'
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 60
  },
  infoText: {
    fontSize: 15
  },
  tomato: {
    width: 50, 
    height: 50,
    position: 'absolute',
    bottom: 8
  }
});