import Layout from "../components/Layout";

export default ({ statusCode }) => {
    return (
        <Layout title={'Error!!!'}>
            <p>
            { statusCode ? `Unable to fetch user data. Status code ${statusCode}.`
                : `Sorry, Couldn't get the requested page!`
            }
            </p>
        </Layout>
    )
};