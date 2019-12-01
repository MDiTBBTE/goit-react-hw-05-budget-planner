import { connect } from "react-redux";
import * as actions from "../redux/actions/actions";
import ExpenseForm from "./ExpenseForm";
import * as selectors from "../redux/selectors/selectors";

const mapStateToProps = state => ({
  balance: selectors.calculateBalance(state)
});

const mapDispatchToProps = dispatch => ({
  addExpense: value => dispatch(actions.addExpense(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
