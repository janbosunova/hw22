import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { useContext } from 'react'
import UserProfile from '../components/Profile/UserProfile'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import { AuthContext } from '../store/authContext'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
	const authCtx = useContext(AuthContext)
	return (
		<Switch>
			<Route path='/' exact>
				<HomePage />
			</Route>
			<PrivateRoute
				path='/auth'
				component={<AuthPage />}
				when={!authCtx.isLoggedIn}
				to='/'
			/>
			<PrivateRoute
				path='/profile'
				component={<UserProfile />}
				when={authCtx.isLoggedIn}
				to='/auth'
			/>
			<Route path='*'>
				<Redirect to='/' />
			</Route>
		</Switch>
	)
}

export default AppRoutes
