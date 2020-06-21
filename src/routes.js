/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard.jsx';
import UserProfile from 'views/UserProfile.jsx';
import TableList from 'views/TableList.jsx';
import Typography from 'views/Typography.jsx';
import Icons from 'views/Icons.jsx';
import Maps from 'views/Maps.jsx';
import Notifications from 'views/Notifications.jsx';
import Upgrade from 'views/Upgrade.jsx';
import MasterQuiz from 'views/MasterQuiz';
import Trainee from 'views/Trainee';
import ViewTrainee from 'views/ViewTrainee';
import MasterCategory from 'views/Category/MasterCategory';
import QuizList from 'views/Category/QuizList';
import MasterContent from 'views/Content/MasterContent';
import UserScore from 'views/Score/UserScore';
import { User } from 'parse';
import Absen from 'views/Absen';
import Overtime from 'views/Overtime';
import Late from 'views/Late';

const dashboardRoutes = [
	{
		path: '/absen',
		name: 'Absen',
		icon: 'pe-7s-note2',
		component: Absen,
		layout: '/admin'
	},
	{
		path: '/early',
		name: 'Early request',
		icon: 'pe-7s-note2',
		component: UserProfile,
		layout: '/admin'
	},
	{
		path: '/late',
		name: 'Late request',
		icon: 'pe-7s-note2',
		component: Late,
		layout: '/admin'
	},
	{
		path: '/overtime',
		name: 'Overtime',
		icon: 'pe-7s-note2',
		component: Overtime,
		layout: '/admin'
	},
	{
		path: '/izin',
		name: 'Izin',
		icon: 'pe-7s-note2',
		component: UserProfile,
		layout: '/admin'
	}
];

export default dashboardRoutes;