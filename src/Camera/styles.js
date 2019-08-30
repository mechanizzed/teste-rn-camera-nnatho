import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerIconFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFrame: {
    color: '#FFF',
    fontSize: 240,
  },
  iconContainer: {
    alignSelf: 'stretch',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  iconCamera: {
    color: '#FFF',
    fontSize: 42,
  },

  containerImage: {
    position: 'absolute',
    right: 10,
    bottom: Platform.OS === 'ios' ? 30 : 10,
  },
  image: {
    width: 110,
    height: 70,
    borderWidth: 2,
    borderColor: '#FFF',
  },

  showFullImage: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.9)',
    position: 'absolute',
    zIndex: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullImage: {
    width: width - 40,
    height: height - 120,
    borderWidth: 5,
    borderColor: '#333',
  },
});

export default styles;
