import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Auth from "./views/Auth.vue";
import SignUp from "./views/SignUp.vue";
import User from "./views/User.vue";
import UserInfo from "./views/UserInfo.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/auth",
			name: "auth",
			component: Auth
		},
		{
			path: "/signup",
			name: "signup",
			component: SignUp
		},
		{
			path: "/user-details/:username",
			name: "user-details",
			beforeEnter: (to, from, next) => {
				const token = localStorage.getItem("jwtToken");
				if (!token) {
					next("/auth");
				} else {
					next();
				}
			},
			component: User
		},
		{
			path: "/user-details/:username/edit",
			name: "user-details-edit",
			beforeEnter: (to, from, next) => {
				const token = localStorage.getItem("jwtToken");
				if (!token) {
					next("/auth");
				} else {
					next();
				}
			},
			component: UserInfo
		}
	]
});
