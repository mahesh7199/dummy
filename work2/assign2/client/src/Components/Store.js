// https://dummyjson.com/products
import React, { Component } from 'react'
import axios from 'axios';
import Graph from './Graph';

export default class Store extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('https://dummyjson.com/products?limit=30&select=title,price,stock')
      .then(res => {
        const products = res.data.products;
        this.setState({ products });
      })
  }

  render() {
    return (
      <ul>
        <Graph products={this.state.products}/>
      </ul>
    )
  }
}