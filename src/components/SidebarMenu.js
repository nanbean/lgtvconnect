import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

const userRoutes = [
	{
		path: '/mypage',
		label: 'My',
		icon: 'user circle'
	},
	{
		path: '/remote',
		label: 'Remote Controller',
		icon: 'wizard'
	},
	{
		path: '/about',
		label: 'About',
		icon: 'info'
	}
];

const defaultRoutes = [
	{
		path: '/login',
		label: 'Log In',
		icon: 'user circle outline'
	},
	{
		path: '/about',
		label: 'About',
		icon: 'info'
	}
];

const SidebarMenu = ({
	appToken,
	toggleSidebar
}) => (
	<nav>
		<Menu fluid color="red" vertical icon="labeled">
			{
				appToken &&
				userRoutes.map(route => (
					<Route
						key={route.path}
						exact={route.exact}
						path={route.path}
						children={({ match }) => { // eslint-disable-line react/no-children-prop
							return (
								<Menu.Item
									as={Link}
									to={route.path}
									active={!!match}
									onClick={toggleSidebar}
								>
									<Icon name={route.icon} />
									{route.label}
								</Menu.Item>
							);
						}}
					/>
				))
			}
			{
				!appToken &&
				defaultRoutes.map(route => (
					<Route
						key={route.path}
						exact={route.exact}
						path={route.path}
						children={({ match }) => { // eslint-disable-line react/no-children-prop
							return (
								<Menu.Item
									as={Link}
									to={route.path}
									active={!!match}
									onClick={toggleSidebar}
								>
									<Icon name={route.icon} />
									{route.label}
								</Menu.Item>
							);
						}}
					/>
				))
			}
		</Menu>
	</nav>
);

SidebarMenu.propTypes = {
	appToken: PropTypes.string,
	match: PropTypes.shape({
		url: PropTypes.string.isRequired
	}),
	toggleSidebar: PropTypes.func
};

export default SidebarMenu;
