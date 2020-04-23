import React from 'react';

import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.jsx';

export default class Inventory extends React.Component {
  constructor() {
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async createProduct(product) {
    const query = `mutation productAdd($product: ProductInputs!) {
  productAdd(product: $product) { id } }`;

    const data = await graphQLFetch(query, { product });
    if (data) {
      this.loadData();
    }
  }

  async loadData() {
    const query = `query {
      productList {
        id category productName pricePerUnit imageUrl
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

async deleteProduct(index) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = products[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.productDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
    } else {
      this.loadData();
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <div id="tableHeader">Showing all available products</div>
        <hr align="left" />
        <ProductTable products={this.state.products} deleteProduct={this.deleteProduct}/>
        <div id="fieldsHeader">Add a new product to inventory</div>
        <hr align="left" />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}