import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        access_token : localStorage.getItem("access_token") || ""    
    }),
    actions: {
        handleLogin(email, password) {
            axios.post('/login', {
                email,
                password
            })
            .then(({ data }) => {
                // console.log(response);
                localStorage.setItem("access_token", data.access_token)
                this.access_token = data.access_token
                this.router.push({name: "home"})
              })
            .catch((err) => {
                // console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data.message
                });
            });
        },
        handleRegister(username, email, password, phone, address) {
            axios.post('/register', {
                username,
                email,
                password,
                phone,
                address
            })
            .then(() => {
                this.router.push({name: "login"})
            }).catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data.message[0]
                });
            });
        },
        async googleLogin(id_token) {
            console.log(id_token);
            try {
              const newUser = await axios({
                method: "POST",
                url: "/google-login",
                data: {
                  id_token
                }
              })
              // console.log(newUser);
              localStorage.setItem("access_token", newUser.data.access_token)
              // this.setLocalStorage(newUser.data)
              this.access_token = localStorage.access_token
              this.router.push({name: "home"})
            } catch (error) {
              console.log(error);
            }
           },
        handleLogout() {
            localStorage.clear()
            this.access_token = ""
            this.$router.push({name: "login"})
        }
    } 
}) 