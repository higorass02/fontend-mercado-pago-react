import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render= {props => (
            (localStorage.getItem('access_token')) ?
                <Component {...props} />
            :
                <Redirect to='/logins/' />
        )}
    />
)

const Routes = () => (
    <Router>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress/></div>}>
            <Switch>
                <Route path='/login' component={ () => (<h1>Pagina login</h1>)}/>
                <Route exact path='/' component={ () => (<h1>Pagina pagamento</h1>)}/>

                <PrivateRoutes path='/transactions' component={ () => (<h1>Transações</h1>)}/>
                <PrivateRoutes path='/transactions/:id' component={ () => (<h1>Transações id</h1>)}/>
            </Switch>
        </Suspense>
    </Router>
)

export default Routes