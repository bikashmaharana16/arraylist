import React, {useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

const Find = () => {
  const [data, setData] = useState([
    {name: "Flowers", price: 150},
    {name: "Books", price: 650},
    {name: "Purse", price: 200},
    {name: "Chocolate", price: 10},
    {name: "Pen", price: 30},
    {name: "Mobile Cover", price: 1000},
    {name: "Flowers", price: 450},
    {name: "Flowers", price: 300},
    ]);

  const onPress = () => {
    const newData =data.filter(element => element.price > 300)
    setData(newData);
  };

  return (
    <View style={{marginVertical: 50, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList data={data} renderItem={({item}) => <Text>{item.name} {item.price}</Text>} />
      <Button onPress={onPress} title="Click here to find" color="#841584" />
    </View>
  );
};

export default Find;
