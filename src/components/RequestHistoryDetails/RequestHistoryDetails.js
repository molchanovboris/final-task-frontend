import React from "react";
import { connect } from 'react-redux';
import TopNav from '../TopNav';
import { getHistoryDetails } from '../../redux/action/historyDetails.thunk';
import { reduxForm } from "redux-form";
import { Table } from 'reactstrap';

export class RequestHistoryDetails extends React.PureComponent {

  componentDidMount() {
    this.props.getHistoryDetails(this.props.match.params.id);
  }

  renderList() {
    return this.props.data.map((elem) => {
      return (
        <div key={elem.formatted_address} className="ui list">
          <div className="item">
            <i className="marker icon"></i>
            <div className="content">
              {elem.formatted_address}
            </div>
          </div>
          <div className="item">
            <i className="clock outline icon"></i>
            <div className="content">
              {elem.date}
            </div>
          </div>
        </div>
      );
    });
  }

  renderTable() {
    return this.props.data.map((elem) => {
      console.log(elem);
      return (
        elem.weather.length && elem.weather.map(e => (
          <tr key={e.dt_txt}>
            <td data-label="Date">{e.dt_txt}</td>
            <td data-label="Temperature (Celsium)">{Math.floor(e.main.temp - 273)}</td>
            <td data-label="Weather condition">{e.weather[0].description}</td>
          </tr>
        ))
      );
    });
  }



  render() {
    return (
      <>
        <TopNav />
        <div>
          <h1>Request History Details</h1>
        </div>
        <div>
          {this.props.data && this.renderList()}
          <Table component={this.setTable}>
            <thead>
              <tr className="header hideHeader">
                <th scope="row">Date</th>
                <th scope="row">Temperature (Celsium)</th>
                <th scope="row">Weather condition</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data && this.renderTable()}
            </tbody>
          </Table>
        </div>
      </>
    );
  };
};

const formWrapped = reduxForm({
  form: 'RequestHistoryDetails'
}
)(RequestHistoryDetails);

export default connect((state) => ({
  data: state.historyDetails.data,
  loading: state.historyDetails.loading,
  error: state.historyDetails.error
}), {
  getHistoryDetails,
})(formWrapped);
