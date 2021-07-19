<template>
    <div class="master-container">
        <div class="login-page-container">
        <div class="form-container"></div>
        <div class="login-overlay"></div>
        <div class="login-form">
            <p class="company">
                <img src="../assets/logo.jpg" alt="">
                <span>NELSON & FAMILY INVESTMENTS</span>
                </p>
            <div class="login-card">
                <div class="form">
                    <div class="email-section">
                        <label for="">Email</label>
                        <input type="email" v-model="input.email" class="form-control" placeholder="brandon@gmail.com" autofocus required>
                    </div>
                    <div class="password-section">
                        <label for="">Password</label>
                        <input type="password" v-model="input.password" class="form-control" placeholder="" required>
                    </div>

                    <div class="submit">
                        <button
                        @click="handleLogin"
                        >
                        <span>Login</span>
                        &nbsp;
                        <!-- <font-awesome-icon :icon="['fas', 'paper-plane']" :style="{ color: '#FFF', fontSize: '12px', }"/> -->
                        </button>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        input: {
            email: "",
            password: "",
        }
      }
    },
    methods: {
        ...mapActions([
            'login',
        ]),
        handleLogin(){
            if(this.input.email == "" || this.input.password == ""){
                this.$toast.warning("Please fill in all the fields");
            }
            else{
                this.login(this.input);
            }
        }
    }
  }
</script>

<style scoped>
.master-container {
    height: 100vh;
    width: 100%;
    background: url('../assets/bg1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.company {
    width: 30%;
    padding: 2.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.753);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.company img {
    width: 45px;
    height: 45px;
    margin-bottom: 15px;
}
.login-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(30, 65, 193, 0.39);
    
}
.password-section, .email-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.login-form {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login-page-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    background: #3e64ebef;
}
.login-card {
    width: 30%;
}
.form-container {
    height: 60vh;
    width: 60%;
    border-radius: 8px;
    box-shadow: -1px -1px 20px rgba(0, 0, 0, 0.219), 40px 40px 40px rgba(0, 0, 0, 0.219);
    padding: 20px;
}
.form > div {
    padding: 10px 0px;
}

.submit button {
    width: 100%;
    font-size: 13.5px;
    font-weight: 500;
    padding: 5px 0px;
    background: #2d56e3;
    color: rgba(255, 255, 255, 0.89);
    border: none;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.219);
    margin-top: 10px;
}
.form-control {
    padding: 5px 10px;
    border-radius: 0px;
    border: none;
    font-size: 12px;
}
.form-control:focus {
    border: 0px solid #2d56e3;
    box-shadow: 0.5px 0.5px 2px #2d56e3, -0.5px -0.5px 2px #2d56e3;
}
label {
    font-size: 13px;
    font-weight: 500 !important;
    color: rgba(255, 255, 255, 0.774);
    margin-bottom: 2px;
}
.logo-color {
    color: #183cb9;
}
</style>