import React from 'react';
import { Link } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.jsx';
import NumInput from './NumInput.jsx';
import TextInput from './TextInput.jsx';

export default class ProductEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }

  onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { product, invalidFields } = this.state;
    if (Object.keys(invalidFields).length !== 0) return;

    const query = `mutation productUpdate(
      $id: Int!
      $changes: ProductUpdateInputs!
    ) {
      productUpdate(
        id: $id
        changes: $changes
      ) {
        id category productName pricePerUnit imageUrl
      }
    }`;

    const { id, created, ...changes } = product;
    const data = await graphQLFetch(query, { changes, id });
    if (data) {
      this.setState({ product: data.productUpdate });
      alert('Updated product successfully'); // eslint-disable-line no-alert
    }
  }

  async loadData() {
    const query = `query product($id: Int!) {
      product(id: $id) {
        id category productName pricePerUnit imageUrl
      }
    }`;

    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });
    this.setState({ product: data ? data.product : {}, invalidFields: {} });
  }

  render() {
    const { product: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;
    if (id == null) {
      if (propsId != null) {
        return <h3>{`Product with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }

    const { product: { category, productName } } = this.state;
    const { product: { pricePerUnit, imageUrl } } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{`Editing product: ${id}`}</h3>
        <table className="formTable">
          <tbody>
            <tr>
              <td className="formTableData">Product Name:</td>
              <td>
	              <TextInput
	              	name="productName"
	              	value={productName}
	              	onChange={this.onChange}
	              	key={id}
	              />
	          </td>
            </tr>
            <tr>
              <td className="formTableData">Category:</td>
              <td>
                <select name="category" id="categoryList" value={category} onChange={this.onChange}>
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="formTableData">pricePerUnit($):</td>
              <td>
                <NumInput
                  name="pricePerUnit"
                  value={`${pricePerUnit}`}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td className="formTableData">imageUrl:</td>
              <td>
                <TextInput
                  name="imageUrl"
                  value={imageUrl}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td><button id="addButton" type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
        <Link to={`/edit/${id - 1}`}>Prev</Link>
        {' | '}
        <Link to={`/edit/${id + 1}`}>Next</Link>
      </form>
    );
  }
}