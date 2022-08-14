<template>
    <img src="../assets/logo.png" alt="Kriova Logo">
    <h1>Reset Password</h1>
    <div class="maincontainer">
        <label for="email">Email</label>
        <br>
        <input id="email" type="text" placeholder="Enter Email" v-model="email">
        <br>
        <button type="submit" @click="resetPassword">Get OTP</button>
        <br>
        <ul>
            <li>
                <router-link to="/login">Already Registered? Login Now</router-link>
                <router-link to="/signup">Not Registered? Signup Now</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Reset',
    data() {
        return {
            email: null
        }
    },
    methods: {
        async resetPassword() {
            let res = await axios.get(`http://127.0.0.1:5000/employee/reset?email=${this.email}`)

            if (res.data.msg == 'Employee Not Found') {
                alert("Employee doesn't exist")
                this.$router.push('/signup')
            }
            else {
                alert("OTP send to your registered email check your spam folder")
                this.$router.push('/otp-verify')
                localStorage.setItem('otp', res.data.details.otp)
                localStorage.setItem('employee_id', res.data.details.employee_id)
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