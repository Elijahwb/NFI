<template>
    <div class="app-container">
        <div class="side-nav">
            <div class="side-nav-content">
                <div class="company">NFI</div>
            </div>
        </div>
        <div class="main-content">
            <div class="top-nav">
                <div class="menu-toggler">
                    <svg class="w-5 h-5" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="black">
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                </div>
                <div class="search">
                    <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                    <input type="search" class="form-control" placeholder="search for a borrower">
                </div>
                <div class="details">
                    <div class="notifications">
                        <svg class="w-5 h-5" aria-hidden="true"  viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                        </svg>
                        <span class="notification-indicator"></span>
                    </div>
                    <div class="my-avatar" @click="showProfile">
                        <img src="../assets/avatar.jpg" alt="">
                    </div>
                </div>
            </div>
            <div v-if="isProfile" class="profile-details">
                <div class="profile-detail">
                    <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span>Dorothy</span>
                </div>
                <div class="profile-detail">
                    <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Settings</span>
                </div>
                <div class="profile-detail">
                    <router-link to="/">
                        <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    </router-link>
                    <router-link to="/">
                        <span>Logout</span>
                    </router-link>
                </div>
            </div>
            <div class="content">

                <slot></slot>

            </div>
        </div>
    </div>
</template>

<script>

export default {
   name: "mainframe",
   mounted(){
       //notify the user when the search is active
       document.querySelector('.search input').addEventListener('focus', ()=>{
           document.querySelector('.search').classList.add('active-search')
       })
       document.querySelector('.search input').addEventListener('focusout', ()=>{
           document.querySelector('.search').classList.remove('active-search')
       })
   },
   data(){
        return {
            isProfile: false,
        }
    },
    methods: {
        showProfile(){
            //Toggle the profile details
            if(this.isProfile){
                this.isProfile = false;
            }
            else{
                this.isProfile = true;
            }
        },
    }  
}
</script>


<style scoped>
a {
    color: inherit;
    text-decoration: none;
}
.profile-detail span {
    font-size: 13.5px;
    color: #2c3e50c9;
    font-weight: bold !important;
}
.profile-detail {
    display: flex;
    align-items: center;
    padding: 10px;
}
.profile-details svg {
    width: 17px;
    height: 17px;
    padding: 2px;
    margin-right: 4px;
}
.profile-details {
    position: fixed;
    width: 190px;
    right: 20px;
    top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: #fff;
    border-radius: 8px;
    border-top-right-radius: 0px;
    box-shadow: 5px 5px 10px rgba(0,0,0,.1);
}
.notification-indicator {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
    left: 7px;
    top: 2px;
    border: 1.5px solid #f5f5f5;
}
.notifications {
    position: relative;
    margin-right: 15px;
}
.notifications:hover {
    cursor: pointer;
}
.details svg {
    width: 17px;
    height: 17px;
    fill: #08248c;
    margin-right: 20px;
}
.my-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
.my-avatar:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px #2d57e3b2,-0px -0px 8px #2d57e3b2;
}
.my-avatar {
    transition: 300ms ease-in-out;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #fff;
}
.details {
    margin-right: 20px;
    background: transparent;
    display: flex;
    align-items: center;
}
.search svg {
    width: 17px;
    height: 17px;
    margin-left: 8px;
}
.search {
    width: 50%;
    border-radius: 10px;
    font-size: 13.5px;
    background: #fff;
    display: flex;
    align-items: center;
    border-width: 1.5px;
}
.form-control {
    font-size: 13.5px;
    background: #fff;
    border: none;
    border-top-right-radius: 10px; 
    border-bottom-right-radius: 10px; 
}
.form-control:focus {
    box-shadow: none;
}
.active-search {
    border: none;
    box-shadow: 0px 0px 4px #2d57e3b2,-0px -0px 4px #2d57e3b2;
}
.menu-toggler svg {
    width: 20px;
    height: 20px;
}
.menu-toggler {
    margin-left: 20px;
}
.menu-toggler:hover {
    cursor: pointer;
}
.top-nav {
    position: fixed;
    width: Calc(100% - 120px);
    height: 60px;
    background: #f5f5f5;
    box-shadow: 5px 5px 10px rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-content {
    width: Calc(100% - 120px);
    height: 100vh;
    scroll-behavior: smooth;
    overflow-y: scroll;
    background: #f5f5f5;
}
.side-nav {
    height: 100vh;
    width: 120px;
}
.side-nav-content {
    width: 120px;
    height: 100%;
    background: #ebebeb;
}
.company {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #08248c;
}
.app-container {
    display: flex;
}
</style>