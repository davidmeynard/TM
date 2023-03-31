import { createStore } from "vuex";
import axios from "axios";
import router from "../routes/index.js"


const store = createStore({

    state:{
        user : null,
        error: null
    },
    mutations:{
        checkUser(state){
            state.user = JSON.parse(localStorage.getItem('user'))
        },
        loginUser(state,user){
            state.user=user
        },
        error(state,error){
            state.error = error
        },
        logoutUser(state){
            localStorage.removeItem("user")
            state.user=null
        }
    },
    actions:{
        async login({commit}, user){
            try{
                const userData = await axios.post("http://localhost:5000/api/users/login",user ,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
                })
                commit("loginUser", userData.data)
                localStorage.setItem("user",JSON.stringify(userData.data))
                router.push("/")
            } catch(error){
                commit("error", error.response.data.message)
                router.push("/login")
            }
        },
        logout({commit}){
            commit("error", null)
            commit("logoutUser")
            router.push("/login")
        }
    },
    getters:{

    },
    modules:{

    },
})

export default store