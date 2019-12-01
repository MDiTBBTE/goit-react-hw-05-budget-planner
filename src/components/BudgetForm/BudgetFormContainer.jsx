import { connect } from "react-redux";
// import * as plannerActions from '../../redux/planner/plannerActions';
import BudgetForm from "./BudgetForm";
import * as actions from "../redux/actions/actions";
// import * as plannerSelectors from '../../redux/planner/plannerSelectors';

// const mapStateToProps = state => ({
//   expenses: plannerSelectors.calculateTotalExpenses(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onSave: value => dispatch(plannerActions.addBudget(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);

const mapStateToProps = state => ({
  budget: state.store.budget,
  expense: state.store.expenses
});

const mapDispatchProps = dispatch => ({
  addBudget: value => dispatch(actions.addBudget(value))
});

export default connect(mapStateToProps, mapDispatchProps)(BudgetForm);
