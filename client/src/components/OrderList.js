import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getOrders } from '../thunks/orderThunks';

const mapStateToProps = state => ({
  orders: state.getIn(['order', 'orders']),
});

const mapDispatchToProps = dispatch => ({
  getOrders: bindActionCreators(getOrders, dispatch),
});

export class OrderList extends Component {
  static propTypes = {
    getOrders: PropTypes.func.isRequired,
    orders: ImmutablePropTypes.list.isRequired,
  };

  componentWillMount() {
    const { getOrders } = this.props;

    getOrders();
  }

  render() {
    return (
      <div>
        OrderList
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);