<template>
    <img src="../assets/logo.png" alt="Kriova Logo">
    <h1>Employee Login</h1>
    <div class='maincontainer'>
        <label for="email">Email</label>
        <br>
        <input id="email" type="text" placeholder="Enter Email" v-model="email">
        <br>
        <label for="password">Password</label>
        <br>
        <input id="password" type="password" placeholder="Enter Password" v-model="password">
        <br>
        <button type="submit" @click="loginCheck">Login</button>
        <br>
        <ul>
            <li>
                <router-link to="/reset">Forgot Password?</router-link>
                <router-link to="/signup">Not Registered? Signup Now</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async loginCheck() {
            let res = await axios.get(`http://127.0.0.1:5000/employee/login?email=${this.email}&password=${this.password}`)

            if (res.data.msg == 'Employee Not Found') {
                alert("Invalid Credentials")
            }
            else {
                localStorage.setItem('emp_id', res.data.employee.employee_id)
                localStorage.setItem('name', res.data.employee.name)
                localStorage.setItem('dob', res.data.employee.dob)
                localStorage.setItem('mno', res.data.employee.mno)
                localStorage.setItem('role', res.data.employee.role)
                localStorage.setItem('email', res.data.employee.email)
                localStorage.setItem('address', res.data.employee.address)
                this.$router.push('/home')
            }
        }
    },
    mounted() {
        if (localStorage.getItem('emp_id') && localStorage.getItem('name')) {
            this.$router.push('/home')
        }
        else {
            true
        }
    }
}
</script>

<style>
h1 {
    font-size: var(--big-font);
    font-weight: 600;
}
img{
    width: 200px;
    margin-bottom: 1rem;
    padding: 15px;
}
.maincontainer {
    line-height: 2.5rem;
    font-weight: var(--mid-weight);
    font-size: var(--mid-font);
    /* border: 2px solid var(--main-color); */
}

.maincontainer input {
    font-size: var(--small-font);
    padding: 10px;
    line-height: 1rem;
    margin-bottom: 15px;
    width: 20%;
    border-radius: 8px;
    border: 1px solid var(--main-color);
}

.maincontainer input:focus {
    border: 2.5px solid var(--main-color);
    color: var(--main-color);
}

.maincontainer button {
    margin: 15px 0;
    font-size: var(--small-font);
    padding: 10px;
    line-height: 1.2rem;
    text-decoration: none;
    border: 2px solid var(--main-color);
    color: var(--main-color);
    width: 20%;
    font-weight: var(--mid-weight);
    border-radius: 8px;
}

.maincontainer button:hover {
    transition: 0.3s;
    transform: scale(1.2);
}

.maincontainer ul {
    list-style-type: none;
    padding: 0;
}

.maincontainer li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
}

.maincontainer ul li a {
    margin: 10px 0;
    line-height: 1.2rem;
    text-decoration: none;
    color: var(--main-color);
}

.maincontainer ul li a:hover {
    transform: translateX(8px);
    transition: 0.4s;
}

@media (max-width: 768px) {
    h1 {
        font-weight: 500;
    }

    .maincontainer input,
    .maincontainer button {
        width: 70%;
    }
}
</style>