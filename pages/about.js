
import { Component } from 'react';
import Layout from '../components/Layout';


class About extends Component {
   
    render() {
        return (
            <Layout title="About">
                <p>A javaScript programmer!</p>
                <img src="/static/Javascript-logo.png" alt="javascript" height="200px"/>
            </Layout>
        );
    }
}

export default About;