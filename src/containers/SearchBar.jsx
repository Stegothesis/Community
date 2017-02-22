import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNeighborhoods } from '../actions/action_fetchNeighborhoods.jsx';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchNeighborhoods(this.state.term);
    this.setState({ term: ''});
}

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Choose a city: "
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNeighborhoods }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);