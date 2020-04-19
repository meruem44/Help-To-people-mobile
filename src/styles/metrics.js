import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const baseMargin = height * 0.02;

export default {
    width,
    height,
    baseMargin 
}