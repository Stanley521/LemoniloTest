// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors, Sizes} from '../../../constants';

export default {
  outerContainer: {
    flex: 1,
    backgroundColor: 'rgba(34, 34, 34, .75)',
    justifyContent: 'flex-end',
  },

  head: {
    alignItems: 'center',
  },

  backdrop: {
    height: Sizes.screen.height,
  },

  icon: {
    height: 80,
    width: 80,
  },

  iconBackground: {
    flex: -1,
    height: 80,
    width: 80,
    borderRadius: 90,
    backgroundColor: Colors.main.baseWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rounder: {
    position: 'absolute',
    bottom: 0,
    flex: -1,
    height: 80 / 2,
    width: Sizes.screen.width,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Colors.main.baseWhite,
  },

  container: {
    flex: -1,
    backgroundColor: Colors.main.baseWhite,
    paddingBottom: 28,
  },
};
