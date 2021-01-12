
import { Component } from 'react';
import Layout from '../components/Layout';
import Error from './_error';
import fetch from 'isomorphic-unfetch';



class About extends Component {

    static async getInitialProps() {
        try {
            const res = await fetch('https://api.github.com/users/manolpahari')
            const data = await res.json()
            const statusCode = res.status > 200 ? res.status : false;
            return { user: data, statusCode }
            
        } catch (error) {
           console.log('error', error.message)
        }
    }
   
    render() {
        const { user, statusCode } = this.props;
        
        if(statusCode) {
            return <Error statusCode={statusCode}/>
        }

        return (
            <Layout title="About">
                <p> Hi, my name is {user.login} and I am a javaScript programmer!</p>
                <img src={user.avatar_url} alt="javascript" height="200px"/>
            </Layout>
        );
    }
}

export default About;