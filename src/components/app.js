import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  renderProduct({id, name, email}) {
    return (
      <li className="list-group-item" key={id}>
        <span className="label label-default label-pill pull-xs-right">
          <a href={email}>{email}</a>
        </span>
        {name}
      </li>
    );
  }

  render() {
    return (
      <div>
        <h4>Product List</h4>
        <ul className="list-group">
	  {console.log(this.props.products)}
          {this.props.products.map(this.renderProduct)}
        </ul>
      </div>
    );
  }
}

export default connect((state => state), actions)(App);
