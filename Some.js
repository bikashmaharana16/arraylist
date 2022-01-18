import React from 'react';
import {View, Text} from 'react-native';


const Some = () => {
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
  
    const even = (element) => element.price % 300 === 0;
    console.warn(array.some(even));

  return (
    <View>
     <Text style={{fontSize:55}}>Some:300</Text>
    </View>
  );
};

export default Some;