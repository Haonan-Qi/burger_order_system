import React, { Fragment, Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,

    };

    componentDidMount() {
      this.reqInt = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.respInt = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          this.setState({ error: err });
        }
      );
    }

    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInt);
      axios.interceptors.response.eject(this.respInt)
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default WithErrorHandler;
