import React from 'react';
import {View, Text} from 'react-native';


const Includes = () => {
  const  array = [2, 6, 4, 11, 44, 1, 7, 18];
  const value=(array.includes(55));
  console.warn(array.includes(55))
  if(value !== true){
     <View><Text>True</Text></View>
  }else{
    <View><Text>True</Text></View>
  }

  return (
  
        <View><Text>{value}</Text></View>
    
  );
};

export default Includes;
