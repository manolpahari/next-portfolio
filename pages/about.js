import Link from 'next/link';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Link href="/">
            <a>Go to homepage</a>
            </Link>
            <p>A javaScript programmer!</p>
            <img src="/static/Javascript-logo.png" alt="javascript" height="200px"/>
        </div>
    )
}

export default About;