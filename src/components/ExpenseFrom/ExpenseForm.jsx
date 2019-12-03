import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import checkInputExpense from '../Notifications/checkInputExpense';
import checkNameInput from '../Notifications/checkNameInput.jsx';

const labelStyles = `
  margin-bottom: 16px;
`;

const ExpenseForm = ({ addExpense, balance }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (checkNameInput(e.target.querySelector('input[name="name"]').value)) {
      const resultInput = {
        id: shortid.generate(),
        name: e.target.querySelector('input[name="name"]').value,
        amount: Number(e.target.querySelector('input[name="amount"]').value),
      };

      if (checkInputExpense(resultInput.amount, balance))
        addExpense(resultInput);
    } else {
    }

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter expense name
        <Input type="text" name="name" />
      </Label>
      <Label customStyles={labelStyles}>
        Enter expense amount
        <Input type="number" name="amount" />
      </Label>

      <Button label="Add" type="submit" />
    </Form>
  );
};

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};

export default ExpenseForm;
