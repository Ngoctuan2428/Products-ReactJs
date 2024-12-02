import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
// import * as Message from '../constants/Message';
import Message from '../components/Message';

class MessageContainer extends Component {
    render() {
        var { message } = this.props;
        return (
            <Message message={ message} />
        );
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    message: state.message
});


export default connect(mapStateToProps, null)(MessageContainer);