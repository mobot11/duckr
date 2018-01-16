import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { MainConnect, HomeContainer, AuthConnect } from '../containers';

const routes = (
	<Router history={hashHistory}>
		<Router path="/" component={MainConnect}>
		<Route path="/auth" component={AuthConnect} />
		<IndexRoute component={HomeContainer} />
		</Router>
	</Router>
);

export default routes;
