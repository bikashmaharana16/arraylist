import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
   
class List extends Component {
   state = {
    items : [
        {name: "Flowers", price: 150},
        {name: "Books", price: 650},
        {name: "Purse", price: 200},
        {name: "Chocolate", price: 10},
        {name: "Pen", price: 30},
        {name: "Mobile Cover", price: 1000},
        {name: "Flowers", price: 450},
        {name: "Flowers", price: 300},
        ]
   }
  
   
   render() {
      return (
         <View>
            {
               this.state.items.map((item, index) => (
                <TouchableOpacity
                key = {item.id}
                style = {styles.container}
                onPress = {() => this.alertItemName(item)}>
                <Text style = {styles.text}>
                   {item.name}
                   {item.price}
                </Text>
             </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})