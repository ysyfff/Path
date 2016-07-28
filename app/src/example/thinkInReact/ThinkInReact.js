import React, {Component} from 'react'
import {View, Text} from 'react-native'

let data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7",}
];

var x = 'a';
//Step One: Break the UI into a component hierarchy

//通过父级传递的，很可能不是state
//不随时间变化的，很可能不是state
//能通过state或props计算的，很可能不是state
