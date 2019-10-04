import React from "react";
import { connect } from 'react-redux';
import TopNav from '../TopNav';
import WeatherPage from "../WeatherPage/WeatherPage";
// import history from '../../history';
// import { reduxForm } from "redux-form";

export class RequestHistoryList extends React.PureComponent {

    render() {
        return (
            <>
                <TopNav />
                <form className="ui relaxed divided list">
                    <div>
                        <h1>Request History List</h1>
                    </div>
                    <div className="item">
                        <i class="history icon"></i>
                        <div class="content">
                            <a class="header">Place</a>
                            <div class="description">Date</div>
                        </div>
                    </div>
                </form>
            </>
        );
    };
};

export default connect(null, {

})(RequestHistoryList);
