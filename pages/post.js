import { withRouter } from "next/router";
import Layout from "../components/Layout"

const Post = ({ router }) => {
    return(
        <Layout title={router.query.title}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae, est excepturi qui exercitationem autem neque eligendi, animi mollitia magni dolore ab consequuntur id sint veritatis quas tempore eius necessitatibus!</p>
        </Layout>
    )
}

export default withRouter(Post);