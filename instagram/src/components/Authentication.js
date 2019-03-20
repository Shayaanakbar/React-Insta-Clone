import React from 'react';
import PostsPage from "./PostsContainer/PostsPage";

const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component {
        constructor(props);

        super(props); {
        this.state = {
            loggedIn: false
        };
    }
    componentDidMount() {
        if (!localStorage.getItem('user')) {
            this.setState({ loggedIn: flase });
        } else {
            this.setState({loggedIn: true});
        }
    }
    render () {
        if (this.state.loggedIn) return <PostsPage />;
        return <LoginPage />;
    }
};

export default withAuthenticate;

