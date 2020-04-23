import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const ProductRow = withRouter(({
  product, deleteProduct, index,
}) => {
  
  return (
    <tr>
      <td className="bordered-table">{product.productName}</td>
      <td className="bordered-table">{`$${product.pricePerUnit}`}</td>
      <td className="bordered-table">{product.category}</td>
      <td className="bordered-table">
        {' '}
        <a href={product.imageUrl} rel="noopener noreferrer" target="_blank">View</a>
      </td>
      <td>
        <Link to={`/edit/${product.id}`}>Edit</Link>
        {' | '}
        <button type="button" onClick={() => { deleteProduct(index); }}>
          Delete
        </button>
      </td>
    </tr>
  );
});

export default function InventoryTable({ products, deleteProduct }) {
  const productRows = products.map((product, index) => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={index}
    />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th className="bordered-table">Product Name</th>
          <th className="bordered-table">Price</th>
          <th className="bordered-table">Category</th>
          <th className="bordered-table">Image</th>
          <th className="bordered-table">Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}