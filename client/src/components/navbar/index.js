import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { searchShows } from '../../redux/actions/dataActions.js';




export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        // this.props.history.push({ pathname: `/results/${this.state.search}`, state: { query: this.state.search } });
        this.props.searchShows(this.state.search, this.props.history);
        this.setState({ search: '' });
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({ search: event.target.value })
    }
    render() {
        return (
            <Navbar variant="dark">
                <Navbar.Brand href="/discover">Mediapedia</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/discovery">Discover</Nav.Link>
                </Nav>
                <Form inline onSubmit={this.onSubmit}>
                    <FormControl type="text" onChange={this.onChange} placeholder={this.state.search === '' ? 'Search' : this.state.search} className="mr-sm-2" />
                    <Button variant="outline-primary" onClick={this.onSubmit}>Search</Button>
                </Form>
            </Navbar >
        )
    }
}

const mapStateToProps = (state) => ({
    shows: state.shows
});

export default connect(mapStateToProps, { searchShows })(withRouter(Navigation));
