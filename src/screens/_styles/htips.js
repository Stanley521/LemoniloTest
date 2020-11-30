import { Dimensions } from 'react-native';
import style_vars from "./vars";

const styles_htips = ({
    healthtips_row: {
        borderTopColor: style_vars.lightgrey,
        borderTopWidth: 1,
        paddingVertical: 5,
    },
    healthtips_title: {
        fontSize: style_vars.font_2,
        color: style_vars.blue_2,
    },
    trash_icon: {
        color: style_vars.grey,
    },
    healthtips_point_row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    healthtips_point: {
        borderRadius: 5/2,
        width: 5,
        height: 5,
        backgroundColor: 'black',
        marginHorizontal: 5
    },
    healthtips_text: {
        fontSize: style_vars.font_1,
        color: style_vars.darkgrey,
        width: '85%'
    },



    circle_purple: {
        backgroundColor: '#d2b6ff',
        borderColor: '#6841b6',
        borderWidth: 1,
      },
      circle_green: {
        backgroundColor: '#78fed9',
        borderColor: '#3a9a8c',
        borderWidth: 1,
      },
      circle_red: {
        backgroundColor: '#ffcec7',
        borderColor: '#b14c6e',
        borderWidth: 1,
      },
      circle_text_purple: {
        color: '#6841b6',
      },
      circle_text_green: {
        color: '#3a9a8c',
      },
      circle_text_red: {
        color: '#b14c6e',
      },
      circle_diagram: {
        borderRadius: 50,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
      },

      circle_diagram_btn: {
        width: 50,
        height: 50,
      },









    diagnosistips_info: {
        fontSize: style_vars.font_08,
        paddingVertical: 10,
    },
    diagnosistips_none_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        borderRadius: 5
    },
    diagnosistips_none_container_small: {
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    diagnosistips_none_container_small_title: {
        fontSize: style_vars.font_3,
        textAlign: 'center',
        color:style_vars.grey,
        paddingVertical:5,
    },
    diagnosistips_none_container_small_info: {
        fontSize: style_vars.font_2,
        color: style_vars.grey,
        textAlign: 'center',
    },

    modal_hide_htips: {
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modal_auth: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modal_subs_auth: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
    },
    hide_htips_btn_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: style_vars.grey,
        borderTopWidth: 0.5,
    },
    hide_htips_text: {
        paddingVertical: 20,
    },
    hide_htips_text_2: {
        paddingBottom: 10,
    },
    hide_htips_title: {
        fontSize: style_vars.font_3,
        fontFamily: style_vars.font_bold,
        textAlign: 'center'
    },
    hide_htips_description: {
        textAlign: 'center',
    },
    hide_htips_no: {
        borderLeftColor: style_vars.grey,
        borderLeftWidth: 0.5,
    },
    hide_htips_btn: {
        paddingVertical: 10,
        width: '50%',
    },
    hide_htips_btn_text: {
        fontSize: style_vars.font_3,
        textAlign: 'center',
        color: style_vars.darkblue,
    },
    addedByText: {
        color: style_vars.grey,
        fontStyle:"italic",
        fontSize: style_vars.font_08
    },
    addedByDate: {
        color: style_vars.grey,
        fontSize: style_vars.font_08
    }
});

export default styles_htips;
