/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors, Sizes} from '../../../constants';
const size = 40;
export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: Colors.main.borderGray,
  },
  icon: {
    height: size,
    width: size,
  },
  iconClose: {
    height: size,
    width: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    alignItems: 'center',
    paddingRight: 20,
  },
  iconBackground: {
    flex: -1,
    height: size,
    width: size,
    borderRadius: 40,
    backgroundColor: Colors.main.softGray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rounder: {
    position: 'absolute',
    bottom: 0,
    flex: -1,
    height: size / 2,
    width: Sizes.screen.width,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Colors.main.baseWhite,
  },
};
