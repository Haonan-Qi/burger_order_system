import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import FirstOrderSummary from "../../components/Order/FirstOrderSummary/FirstOrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";

class BurgerBuilder extends Component {
  state = {

    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get("ingredients.json")
    //   .then((req) => {
    //     this.setState({ ingredients: req.data });
    //     this.updatePurchaseState(this.props.ings);
    //   })
    //   .catch((error) => {
    //     this.setState({ error: error });
    //   });

  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.props.ings) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(this.props.ings[i])
      );
    }
    queryParams.push("price=" + this.props.price);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = this.state.error ? (
      <p> Something Wrong> </p>
    ) : this.state.loading || !this.props.ings ? (
      <Spinner />
    ) : (
      <FirstOrderSummary
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />
    );

    let burger = this.state.error ? (
      <p> Something Wrong> </p>
    ) : this.props.ings ? (
      <Fragment>
        <Burger ingredients={this.props.ings} />
        <BuildControls
          controls={Object.keys(this.props.ings)}
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={this.props.price !== 4}
          ordered={this.purchaseHandler}
          price={this.props.price}
        />
      </Fragment>
    ) : (
      <Spinner />
    );

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.bbr.ingredients,
    price: state.bbr.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
