<template>
    <h1>Employee Profile</h1>
    <div class="home-container">
        <div class="profile-1">
            <div class="details">
                <i class="fa fa-user"></i>
                <p class="name">{{ name }}</p>
                <p class="role">{{ role }}</p>
                <button type="submit" @click="logout">Logout <i class="fa-solid fa-right-from-bracket"></i></button>
            </div>
        </div>

        <div class="profile-2">
            <h4>Information</h4>
            <div class="emp-details">
                <div class="grp">
                    <h6 class="name">Email</h6>
                    <h6 class="role">{{ email }}</h6>
                </div>
                <div class="grp">
                    <h6 class="name">Phone</h6>
                    <h6 class="role">{{ number }}</h6>
                </div>
                <div class="grp">
                    <h6 class="name">Address</h6>
                    <h6 class="role">{{ address }}</h6>
                </div>
                <div class="grp">
                    <h6 class="name">Date Of Birst</h6>
                    <h6 class="role">{{ dob }}</h6>
                </div>
            </div>
            <div class="emp-social">
                <ul>
                    <li>
                        <router-link to="/home"><i class="fa-brands fa-facebook-f"></i></router-link>
                    </li>
                    <li>
                        <router-link to="/home"><i class="fa-brands fa-twitter"></i></router-link>
                    </li>
                    <li>
                        <router-link to="/home"><i class="fa-brands fa-youtube"></i></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            number: localStorage.getItem('mno'),
            address: localStorage.getItem('address'),
            role: localStorage.getItem('role'),
            dob: localStorage.getItem('dob')
        }
    },
    mounted() {
        if (localStorage.getItem('emp_id') && localStorage.getItem('name')) {
            true
        }
        else {
            this.$router.push('/login')
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
h1 {
    margin-bottom: 1rem;
}

.home-container {
    margin: 10px auto;
    border: 2px solid var(--main-color);
    border-radius: 8px;
    width: 70%;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
}

.profile-1 {
    padding: 10px;
    background-color: var(--main-color);
    color: var(--text-color);
    border-radius: 8px;
    width: 33%;
    margin: 5px;
}

.profile-1 .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    line-height: 2.5rem;
}

.profile-1 .details i {
    font-size: 100px;
}

.profile-1 .details .fa-solid {
    font-size: 15px;
}

.name {
    font-size: 24px;
    font-weight: var(--mid-weight);
    margin-top: 1rem;
    margin-bottom: 0;
}

.role {
    font-size: var(--small-font);
    margin-bottom: 0;
    margin-top: 0.7rem;
}

.profile-1 .details button {
    margin: 15px 0;
    font-size: var(--small-font);
    padding: 10px;
    line-height: 1.2rem;
    text-decoration: none;
    border: 2px solid var(--main-color);
    color: var(--main-color);
    width: 50%;
    font-weight: var(--mid-weight);
    border-radius: 8px;
}

.profile-1 .details button:hover {
    transition: 0.3s;
    transform: scale(1.2);
}

.profile-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 63%;
    margin: 5px;
}

.profile-2 h4 {
    font-size: 30px;
    border-bottom: 3px solid var(--main-color);
}

.profile-2 .emp-details {
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0 5px 0;
    padding: 5px 0 5px 0;
    width: 100%;
    justify-content: space-around;
}

.profile-2 .emp-details .grp {
    flex: 50%;
    margin: 15px 0;
}

.profile-2 .emp-social {
    margin: 10px 0;
}

.profile-2 .emp-social ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.profile-2 .emp-social ul li {
    margin: 0 20px;
}

.profile-2 .emp-social ul li a {
    font-size: 25px;
    color: var(--main-color);
}

.profile-2 .emp-social ul li:hover {
    transform: scale(1.5);
    transition: 0.4s;
}

@media (max-width: 768px) {
    .home-container {
        width: 85%;
    }

    .profile-1 {
        width: 100%;
        margin: 5px;
    }

    .profile-1 .details button {
        width: 90%;
    }

    .profile-2 {
        width: 100%;
        margin: 10px;
    }

    .profile-2 h4 {
        font-size: 27px;
    }

    .profile-2 .emp-details .grp {
        flex: 100%;
        margin: 10px 0;
    }

    .name {
        font-size: 21px;
    }

    .role {
        font-size: 15px;
    }
}
</style>