import React from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import checkInputBudget from '../Notifications/checkInputBudget';

const labelStyles = `
  margin-bottom: 16px;
`;

const BudgetForm = ({ addBudget, expenses }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const currentInput = Number(e.target.querySelector('input').value);

    if (checkInputBudget(currentInput, expenses)) addBudget(currentInput);

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input type="number" name="amount" />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
};

BudgetForm.propTypes = {
  addBudget: PropTypes.func.isRequired,
  expenses: PropTypes.number,
};

export default BudgetForm;
