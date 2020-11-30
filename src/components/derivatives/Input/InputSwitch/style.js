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
import {Colors, Sizes} from '../../../../constants';

export default {
  container: {
    width: 72,
    height: 32,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  circle: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    margin: 2,
  },

  label: {
    position: 'absolute',
  },
};
