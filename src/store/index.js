import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	logined: false,
	//所有用户信息
	userInfo: [{	
		"username": 18135524312,
		"password": 123456
	}, {
		"username": 15235549971,
		"password": 123456
	}],
	//当前登录的用户信息
	loginInfo: {
		userName: '',
		password: ''
	},
	cityInfo: {
		name: '长治',
		hotArea: [
			'襄垣,', '高平,' , '陵川'
		]
	}
}

const mutations = {
	initUser (state, val) {
		state.userInfo = val;
	},
	//注册时添加用户
	setUser (state, val) {
		state.userInfo.push(val);
		state.loginInfo = val;
		console.log(state.loginInfo)
	},
	//登录成功后 记录登录用户信息，改变登录状态
	setLoginUser (state,val) {
		state.loginInfo = val;
		state.logined = true;
	}
}

const actions = {
	setUser ({
		commit
	}, val) {
		commit ('setUser', val)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
