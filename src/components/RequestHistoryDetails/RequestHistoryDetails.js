import React from "react";
import { connect } from 'react-redux';
import TopNav from '../TopNav';
import { getHistoryDetails } from '../../redux/action/historyDetails.thunk';
import { reduxForm } from "redux-form";

export class RequestHistoryDetails extends React.PureComponent {

    componentDidMount() {
        this.props.getHistoryDetails();
    }

    renderList() {
        return this.props.data.map((elem) => {
            return(
                
                <tr key={elem.formatted_address}>
                    <td data-label="Adress">{elem.formatted_address}</td>
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
                        <h1>Request History Details</h1>
                    </div>
                    <div>
                       <table component={this.setTable} className="ui celled table">
                            <thead>
                                <tr className="header hideHeader">
                                    <th>Adress</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data && this.renderList()}
                            </tbody>
                        </table>  
                    </div>
                    
            </>
        );
    };
};

const formWrapped = reduxForm({
    form: 'RequestHistoryDetails'
    
    
  }
    
  )(RequestHistoryDetails);


export default connect((state) =>( {
    data: state.historyDetails.data,
    loading: state.historyDetails.loading,
    error: state.historyDetails.error
}), {
    getHistoryDetails,
})(formWrapped);
