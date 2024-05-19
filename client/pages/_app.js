import 'bootstrap/dist/css/bootstrap.css'
import buildClient from '../api/build-client'

const AppComponent = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

AppComponent.getInitialProps = async appContext => {

    const { data } = await buildClient(appContext.ctx).get('/api/users/currentuser')
    let pageProps = {}
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx)
    }
    return data
}

export default AppComponent