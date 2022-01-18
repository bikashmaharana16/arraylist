import React from 'react';
import {View, Text} from 'react-native';


const Every = () => {
  const  array = [
    {name: "Flowers", price: 150},
    {name: "Books", price: 650},
    {name: "Purse", price: 200},
    {name: "Chocolate", price: 10},
    {name: "Pen", price: 30},
    {name: "Mobile Cover", price: 1000},
    {name: "Flowers", price: 450},
    {name: "Flowers", price: 300},
    ];
  
    const isBelowThreshold = (currentValue) => currentValue.price > 300;

    
    
    console.warn(array.every(isBelowThreshold));

  return (
    <View>
     <Text style={{fontSize:55}}>Every:300</Text>
    </View>
  );
};

export default Every;