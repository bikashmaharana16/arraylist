import React from 'react';
import {View, Text} from 'react-native';

const Map = () => {
  const array =[
    {name: "Flowers", price: 150},
    {name: "Books", price: 650},
    {name: "Purse", price: 200},
    {name: "Chocolate", price: 10},
    {name: "Pen", price: 30},
    {name: "Mobile Cover", price: 1000},
    {name: "Flowers", price: 450},
    {name: "Flowers", price: 300},
    ];

  const list = () => {
    return array.map((element) => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Text>{element.name}</Text>
          <Text>{element.price}</Text>
        </View>
      );
    });
  };

  return <View>{list()}</View>;
};

export default Map;