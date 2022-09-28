import {Dimensions} from 'react-native';
import Scale, {verticalScale} from './Scale';
import React from "react";


 
export const COLORS={
  primary: '#F7F8FC', // background Color
  secondary: '#6df0df', // Dark purple
  lightBlack: '#b2b2b2',
  black: "black",
  green: "#4ABE9A",
  eventColor:"#6B6B6B"
}
  
export const CONTAINER = {
  flex: 1,
  backgroundColor: COLORS.primary,
  alignItems: 'center',
  //    justifyContent: "center",
  padding: Scale(20),
};

export const FONTS = {
  textTittle: {
    fontFamily: 'Poppins-Bold',
    fontStyle: 'Medium',
    fontWeight: '600',
    fontSize: Scale(32),
    lineHeight: Scale(40),
    letterSpacing: Scale(0.5),
    color: '#1D232E',
  },
  textstyle: {
    fontFamily: 'Montserrat',
    color: '#1D2226',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: Scale(28),
    letterSpacing: Scale(1),
  },
  Link: {
    color: '#00AEEF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: Scale(14),
    lineHeight: Scale(17),
  },
};


// export default {COLORS, FONTS, CONTAINER,appTheme};
