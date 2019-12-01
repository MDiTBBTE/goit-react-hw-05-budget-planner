import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import BudgetForm from './components/BudgetForm/BudgetFormContainer';
import ExpenseForm from './components/ExpenseFrom/ExpenseFormContainer';
import ExpensesTable from './components/ExpensesTable/ExpensesTable';
import Values from './components/Values/Values';
import * as actions from './components/redux/actions/actions';
import * as selectors from './components/redux/selectors/selectors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ budget, expenses, removeExpense, totalExpenses, balance }) => (
  <Container>
    <BudgetForm />
    <Values budget={budget} expenses={totalExpenses} balance={balance} />
    <ExpenseForm />
    {expenses.length > 0 && (
      <ExpensesTable items={expenses} onRemove={removeExpense} />
    )}
    <ToastContainer />
  </Container>
);

const mapStateToProps = state => ({
  budget: selectors.getBudget(state),
  expenses: selectors.getExpenses(state),
  totalExpenses: selectors.calculateTotalExpenses(state),
  balance: selectors.calculateBalance(state),
});

const mapDispatchToProps = dispatch => ({
  removeExpense: id => dispatch(actions.removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
  totalExpenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
