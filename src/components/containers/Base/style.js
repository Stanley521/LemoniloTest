// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {Colors, Sizes} from '../../../constants';

export default {
  container: {
    flex: 1,
    backgroundColor: Colors.main.baseWhite,
    paddingTop: Sizes.isAndroid ? 26 : 8,
  },

  innerContainer: {
    // paddingTop: Sizes.screen.paddingTop,
    paddingBottom: 22,
  },

  innerContainerStatic: {
    flex: 1,
    paddingTop: Sizes.screen.paddingTop,
  },

  backgroundContent: {
    container: {
      flex: -1,
      position: 'absolute',
      width: Sizes.screen.width,
      height: Sizes.screen.height,
    },

    content: {
      height: 140,
    },
  },

  footer: {
    grouper: {
      flex: -1,
      height: 71,
      flexDirection: 'row',
      borderColor: Colors.main.borderGray,
      paddingHorizontal: Sizes.screen.paddingHorizontal,
      paddingBottom: Sizes.screen.paddingBottom,
      backgroundColor: Colors.main.softGray,
    },

    bottomFiller: {
      flex: -1,
      position: 'absolute',
      width: Sizes.screen.width,
      height: 40,
      bottom: -40,
      backgroundColor: Colors.main.softGray,
    },

    blankBottom: {
      flex: -1,
      position: 'absolute',
      width: Sizes.screen.width,
      height: 40,
      bottom: -40,
      backgroundColor: Colors.main.baseWhite,
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 13,
    },

    icon: {
      container: {
        flex: -1,
        width: 32,
        height: 32,
        paddingBottom: 6,
      },
    },

    counter: {
      container: {
        flex: -1,
        position: 'absolute',
        backgroundColor: Colors.main.baseRed,
        paddingHorizontal: 4,
        top: -5,
        right: -5,
        borderRadius: 50,
      },
    },
  },

  bottomPadder: {
    paddingBottom: 16,
  },
};
