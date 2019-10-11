import React from "react";
import { connect } from 'react-redux';
import TopNav from '../TopNav';
import { getHistoryList } from '../../redux/action/history.thunk';
import { reduxForm } from "redux-form";
import { Table } from 'reactstrap';

export class RequestHistoryList extends React.PureComponent {

  componentDidMount() {
    this.props.getHistoryList();
  }

  renderList() {
    return this.props.data.map((elem) => {
      return (
        <tr key={elem.formatted_address}>
          <td data-label="Adress">
            <a href={`/historydetails/${elem._id}`}>{elem.formatted_address}</a></td>
          <td data-label="Date">{elem.date}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
      <TopNav />
      <div>
        <h1>Request History List</h1>
      </div>
      <div>
        <Table component={this.setTable}>
          <thead>
            <tr>
              <th scope="row">Adress</th>
              <th scope="row">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data && this.renderList()}
          </tbody>
        </Table>
      </div>
      </>
    );
  };
};

const formWrapped = reduxForm({
  form: 'RequestHistoryList'
}
)(RequestHistoryList);

export default connect((state) => ({
  data: state.historyList.data,
  loading: state.historyList.loading,
  error: state.historyList.error
}), {
  getHistoryList,
})(formWrapped);
