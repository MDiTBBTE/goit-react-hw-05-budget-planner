import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import PropTypes from 'prop-types';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], removeExpense }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => removeExpense(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => ({
  items: state.store.expenses,
});

const mapDispatchProps = dispatch => ({
  removeExpense: value => dispatch(actions.removeExpense(value)),
});

export default connect(mapStateToProps, mapDispatchProps)(ExpensesTable);

Table.propTypes = {
  removeExpense: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any),
};
