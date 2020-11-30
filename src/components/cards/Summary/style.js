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
import {Colors} from '../../../constants';

export default {
  container: {
    flex: -1,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: Colors.main.borderGray,
    // backgroundColor: Colors.main.softGray,
    borderRadius: 10,
    alignItems: 'flex-start',
    padding: 16,
    marginBottom: 8,
  },

  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  circle: {
    container: {
      flex: -1,
      width: 40,
      height: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  label: {
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 16,
      paddingRight: 16,
    },
  },

  icon: {
    container: {
      flex: -1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.main.baseWhite,
    },
  },
};
