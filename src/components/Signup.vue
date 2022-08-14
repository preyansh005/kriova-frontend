<template>
    <img src="../assets/logo.png" alt="Kriova Logo">
    <h1>Employee Registration</h1>
    <div class="maincontainer">
        <label for="name">Name</label>
        <br>
        <input type="text" id="name" placeholder="Enter Name" v-model="name">
        <br>
        <label for="email">Email</label>
        <br>
        <input type="email" id="email" placeholder="Enter Email" v-model="email">
        <br>
        <label for="mno">Mobile Number</label>
        <br>
        <input type="text" id="mno" placeholder="Enter Mobile Number" v-model="mno">
        <br>
        <label for="password">Password</label>
        <br>
        <input id="password" type="text" placeholder="Enter Password" v-model="password">
        <br>
        <label for="cpassword">Confirm Password</label>
        <br>
        <input type="password" id="cpassword" placeholder="Confirm Password" v-model="confirm_password">
        <br>
        <button type="submit" @click="registerEmployee">Signup</button>
        <br>
        <ul>
            <li>
                <router-link to="/reset">Forgot Password?</router-link>
                <router-link to="/login">Already Registered? Login Now</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Signup',
    data() {
        return {
            name: null,
            email: null,
            mno: null,
            confirm_password: null,
            password: null
        }
    },
    methods: {
        checkPassword() {
            try {
                if (this.password == this.confirm_password) {
                    return true
                }
                else {
                    throw "err"
                }
            }
            catch {
                alert("Your password & confirm password not same")
            }
        },
        async registerEmployee() {
            let req = await axios.get(`http://127.0.0.1:5000/employee/${this.email}`)

            if (req.data.msg == 'Employee Not Found') {
                try {
                    if (this.checkPassword()) {
                        if (this.name == null || this.mno == null || this.email == null || this.password == null || this.confirm_password == null) {
                            alert("All Fields Required")
                        }
                        else {
                            let res = await axios.post("http://127.0.0.1:5000/employee/registration", {
                                'name': this.name,
                                'email': this.email,
                                'mno': this.mno,
                                'password': this.password,
                            })
                            alert(res.data.msg)
                            this.$router.push('/login')
                        }
                    }
                    else {
                        throw "err"
                    }
                }
                catch {

                }
            }
            else {
                alert("Employee already exist with this email")
                this.$router.push('/login')
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