"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* globals React PropTypes */
var ProductAdd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
        category: form.category.value,
        pricePerUnit: form.pricePerUnit.value.replace('$', ''),
        productName: form.productName.value,
        imageUrl: form.imageUrl.value
      };
      this.props.createProduct(product);
      form.category.value = 'Shirts';
      form.pricePerUnit.value = '$';
      form.productName.value = '';
      form.imageUrl.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        id: "inventoryForm",
        name: "productAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("table", {
        className: "formTable"
      }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Category"), React.createElement("td", {
        className: "formTableData"
      }, "Price Per Unit")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("select", {
        id: "categoryList",
        name: "category"
      }, React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), React.createElement("option", {
        value: "Accessories"
      }, "Accessories"))), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "pricePerUnit",
        defaultValue: "$"
      }))), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Product Name"), React.createElement("td", {
        className: "formTableData"
      }, "Image URL")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "productName"
      })), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "imageUrl"
      }))))), React.createElement("button", {
        id: "addButton",
        type: "submit"
      }, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);

exports.default = ProductAdd;