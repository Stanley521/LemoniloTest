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
import {Sizes} from '../../../constants';

export default {
  grouper: {
    flex: -1,
    paddingVertical: 10,
    width: Sizes.screen.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  button: {
    container: {
      flex: -1,
      width: 35,
      justifyContent: 'center',
    },
  },

  title: {
    container: {
      flex: 1,
      alignItems: 'center',
    },
  },
};
