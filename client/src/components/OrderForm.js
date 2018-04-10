import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form/immutable';

import { addOrder } from '../thunks/orderThunks';

const mapDispatchToProps = dispatch => ({
  placeOrder: bindActionCreators(addOrder, dispatch),
});

function validate(formProps) {
  const errors = {};

  if (!formProps.get('make')) {
    errors.make = 'Please enter a make.';
  }

  if (!formProps.get('model')) {
    errors.model = 'Please enter a model.';
  }

  if (!formProps.get('customerId')) {
    errors.customerId = 'Please enter a customer id.';
  }

  return errors;
}

const form = {
  form: 'order',
  validate,
};

export class OrderForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired, // redux form
    placeOrder: PropTypes.func.isRequired,
  };

  handleOrderSubmit = (formProps) => {
    const { placeOrder } = this.props;

    const make = formProps.get('make');
    const model = formProps.get('model');
    const trimPackage = formProps.get('trimPackage');
    const customerId = formProps.get('customerId');

    placeOrder({
      make,
      model,
      trimPackage,
      customerId,
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form
          onSubmit={ handleSubmit(this.handleOrderSubmit) }
        >
          <div className='row'>
            <div className='column'>
              <label htmlFor='make'>Make</label>
              <Field
                name={ 'make' }
                className={ 'form-control' }
                component={ 'input' }
                type={ 'text' }
              />
            </div>
            <div className='column'>
              <label htmlFor='model'>Model</label>
              <Field
                name={ 'model' }
                className={ 'form-control' }
                component={ 'input' }
                type={ 'text' }
              />
            </div>
          </div>
          <div className='row'>
            <div className='column'>
              <label htmlFor='trimPackage'>Package</label>
              <Field
                name={ 'trimPackage' }
                className={ 'form-control' }
                component={ 'input' }
                type={ 'text' }
              />
            </div>
          </div>
          <div className='row'>
            <div className='column'>
              <label htmlFor='customerId'>Customer Id</label>
              <Field
                name={ 'customerId' }
                className={ 'form-control' }
                component={ 'input' }
                type={ 'text' }
              />
            </div>
          </div>
          <button type='submit'>Place Order</button>
        </form>
      </div>
    );
  }
}

OrderForm = reduxForm(form)(OrderForm);
OrderForm = connect(null, mapDispatchToProps)(OrderForm);
export default OrderForm;
