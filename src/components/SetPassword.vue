<template>
    <img src="../assets/logo.png" alt="Kriova Logo">
    <h1>Reset Password</h1>
    <div class="maincontainer">
        <label for="password">Password</label>
        <br>
        <input id="password" type="text" placeholder="Enter New Password" v-model="password">
        <br>
        <label for="cpassword">Confirm Password</label>
        <br>
        <input id="cpassword" type="password" placeholder="Confirm New Password" v-model="confirm_password">
        <br>
        <button type="submit" @click="resetPassword">Reset</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SetPassword',
    data() {
        return {
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
        async resetPassword() {
            try {
                if (this.checkPassword()) {
                    let res = await axios.post(`http://127.0.0.1:5000/employee/reset`, {
                        "password": this.password,
                        "employee_id": localStorage.getItem('employee_id')
                    })
                    alert(res.data.msg)
                    this.$router.push('/login')
                    localStorage.removeItem('otp')
                    localStorage.removeItem('employee_id')
                }
                else {
                    throw "err"
                }
            }
            catch { }
        }
    },
    mounted() {
        if (localStorage.getItem('otp')) {
            true
        }
        else {
            this.$router.push('/reset')
        }
    }
}
</script>