import Head from 'next/head';

const Layout = ({title, children}) => {
    return <div>
        <Head><title>{title}</title></Head>
        <div className="layout">{children}</div>
    </div>;
}

export default Layout;