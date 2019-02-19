import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { ApplicationState } from "../store";
import { fetchRequest } from "../store/exchange/actions";
import { Exchange as IExchange } from "../store/exchange/types";

import { Exchange } from "../components/Exchange";
import { FetchButton } from "../components/FetchButton";
import { Loader } from "../components/Loader";

import { Card, CardHeader, CardBody } from "../components/Card";

interface PropsFromState {
  loading: boolean;
  data?: IExchange;
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

export class MainPage extends React.Component<
  PropsFromState & PropsFromDispatch
> {
  private handleClick = () => {
    this.props.fetchRequest();
  };

  componentDidUpdate(): void {
    const { errors } = this.props;
    if (errors) {
      alert(errors);
    }
  }

  render() {
    const { data, errors, loading } = this.props;

    return (
      <Card>
        <CardHeader>
          <div style={{ fontSize: 20, marginBottom: 12, textAlign: "center" }}>
            Latest exchange rates
          </div>
          <FetchButton loading={loading} clickHandler={this.handleClick} />

          {errors && (
            <span
              className="error"
              style={{ color: "red", marginTop: 12, textAlign: "center" }}
            >
              Something went wrong!
            </span>
          )}
        </CardHeader>
        <CardBody>
          {loading && <Loader />}
          {data && !errors && !loading && <Exchange data={data} />}
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = ({ exchange }: ApplicationState) => ({
  loading: exchange.loading,
  errors: exchange.errors,
  data: exchange.data
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchRequest: () => dispatch(fetchRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
