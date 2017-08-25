import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts }  from '../actions/index';

class ProductList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  renderProduct({name, description, price}) {
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h4>Product List</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(this.renderProduct)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
