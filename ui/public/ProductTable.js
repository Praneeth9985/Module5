"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InventoryTable;

/* globals React */
function ProductRow(props) {
  var product = props.product;
  return React.createElement("tr", null, React.createElement("td", {
    className: "bordered-table"
  }, product.productName), React.createElement("td", {
    className: "bordered-table"
  }, "$".concat(product.pricePerUnit)), React.createElement("td", {
    className: "bordered-table"
  }, product.category), React.createElement("td", {
    className: "bordered-table"
  }, ' ', React.createElement("a", {
    href: product.imageUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, "View")));
}

function InventoryTable(props) {
  var productRows = props.products.map(function (product) {
    return React.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    className: "bordered-table"
  }, "Product Name"), React.createElement("th", {
    className: "bordered-table"
  }, "Price"), React.createElement("th", {
    className: "bordered-table"
  }, "Category"), React.createElement("th", {
    className: "bordered-table"
  }, "Image"))), React.createElement("tbody", null, productRows));
}