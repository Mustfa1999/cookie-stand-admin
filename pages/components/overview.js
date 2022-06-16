import Link from "next/link";
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


function Overview() {
    return (
        <div className="m-10">
                <h1>Overview</h1>
                <br/>
                <Link href={{ pathname: "/" }}>
                    <a className="text-blue-700">back to Home</a>
                </Link>
        </div>
    )
}

export default Overview