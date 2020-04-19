import React from 'react';
import { View } from 'react-native';

import Doctor from '../../animations/doctors.json';

import Lottie from 'lottie-react-native';

export default function QueryAnimations() {
  return <Lottie source={Doctor}/> 
}
