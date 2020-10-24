import { LightenDarkenColor } from 'lighten-darken-color';

const clrDark = '#1F2829';
const clrDarken = '#091820';

const theme = 'dark';
//const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : clrDark;
export const color2 = lightTheme ? 'white' : clrDarken;
export const clrHigh = lightTheme ? 'LightSeaGreen' : '#66cdaa';
export const hoverHigh = LightenDarkenColor(clrHigh, 25);

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = clrDark;
}

export const lightBlueBackground = `background-color: #273a3c`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${clrHigh};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 1rem ${
  lightTheme ? '#a9b6ff' : '#04161d'
}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px ${clrHigh}`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px crimson`;

export const fontSizeXl = 'font-size: 2em';
export const fontSizeLg = 'font-size: 1.5em;';
export const fontSize = 'font-size: 1.0em';
export const fontSizeSm = 'font-size: .75em';

export const textCenter = 'text-align: center;';
