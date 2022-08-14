<template>
    <img src="../assets/logo.png" alt="Kriova Logo">
    <h1>Reset Password</h1>
    <div class="maincontainer">
        <label for="otp">Enter OTP</label>
        <br>
        <input id="otp" type="text" placeholder="Enter OTP" v-model="otp">
        <br>
        <button type="submit" @click="otpVerify">Verify</button>
    </div>
</template>

<script>
export default {
    name: 'OtpVerify',
    data() {
        return {
            otp: null
        }
    },
    methods: {
        otpVerify() {
            let otp = localStorage.getItem('otp')
            if (otp == this.otp) {
                this.$router.push('set-password')
            }
            else {
                alert("OTP is invalid")
            }
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