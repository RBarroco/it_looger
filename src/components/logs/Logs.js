//The component should always be clear and only showing the front end with the backend loaded; we should call our requests from the actions files;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

//since we defined mapStateToProp we are able to access the data in the component;
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    //we have access to actions from props.action === props.getLogs OR just destructure in the props of Logs;
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //first log is the name of the prop to this component
  //second log is the log inside of the rootReducer --- state is the combined reducer object inside of index.js;
  log: state.log
});

//Higher order component;
//Connecting the State and Connecting the actions using an Object to it;
export default connect(mapStateToProps, { getLogs })(Logs);
