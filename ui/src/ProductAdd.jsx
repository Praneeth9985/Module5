import React from 'react';
import PropTypes from 'prop-types';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      category: form.category.value,
      pricePerUnit: form.pricePerUnit.value.replace('$', ''),
      productName: form.productName.value,
      imageUrl: form.imageUrl.value,
    };

    this.props.createProduct(product);
    form.category.value = 'Shirts';
    form.pricePerUnit.value = '$';
    form.productName.value = '';
    form.imageUrl.value = '';
  }

  render() {
    return (
      <form id="inventoryForm" name="productAdd" onSubmit={this.handleSubmit}>
        <table className="formTable">
          <tbody>
            <tr>
              <td className="formTableData">
                Category
              </td>
              <td className="formTableData">
                Price Per Unit
              </td>
            </tr>

            <tr>
              <td className="formTableData">
                <select id="categoryList" name="category">
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </td>
              <td className="formTableData">
                <input type="text" name="pricePerUnit" defaultValue="$" />
              </td>
            </tr>

            <tr>
              <td className="formTableData">
                Product Name
              </td>
              <td className="formTableData">
                Image URL
              </td>

            </tr>

            <tr>
              <td className="formTableData">
                <input type="text" name="productName" />
              </td>
              <td className="formTableData">
                <input type="text" name="imageUrl" />
              </td>
            </tr>
          </tbody>
        </table>

        <button id="addButton" type="submit">Add Product</button>
      </form>
    );
  }
}