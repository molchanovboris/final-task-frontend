import React from 'react';
import { connect } from 'react-redux';

const EditPage = props => {
    console.log(props);
    return(
        <div>Edit</div>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { user: state.users[ownProps.match.params.id] };
};

export default connect(mapStateToProps) (EditPage);
