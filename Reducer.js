import React from 'react';
import {View, Text} from 'react-native';


const Reducer = () => {
  const  array = [2, 6, 4, 11, 44, 1, 7, 18];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const value=(array.reduce(reducer));
  console.log(array.reduce(reducer));

  return (
    <View>
     <Text style={{fontSize:55}}>Reduce:{value}</Text>
    </View>
  );
};

export default Reducer;
