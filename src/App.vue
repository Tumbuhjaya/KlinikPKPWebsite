<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap");
html,
body {
  /* background-image: url('assets/bg_perumahan.png');
  background-size:100%; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-color:#ECF0F1 !important; */
  background: #f8fafe !important;
  /* overflow: hidden; */
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0e0c53;
  /* font-weight: 400; */
  font-size: 14px;
}

/* Margin top */
.m-t-0 {
  margin-top: 0px;
}
.m-t-5 {
  margin-top: 5px;
}
.m-t-10 {
  margin-top: 10px;
}
.m-t-15 {
  margin-top: 15px;
}
.m-t-20 {
  margin-top: 20px;
}
.m-t-25 {
  margin-top: 25px;
}
.m-t-30 {
  margin-top: 30px;
}
/* End Margin top */

/* Margin Bottom */
.m-b-0 {
  margin-bottom: 0px;
}
.m-b-5 {
  margin-bottom: 5px;
}
.m-b-10 {
  margin-bottom: 10px;
}
.m-b-15 {
  margin-bottom: 15px;
}
.m-b-20 {
  margin-bottom: 20px;
}
.m-b-25 {
  margin-bottom: 25px;
}
.m-b-30 {
  margin-bottom: 30px;
}
/* End Margin Bottom */

/* Margin Left */
.m-l-0 {
  margin-left: 0px;
}
.m-l-5 {
  margin-left: 5px;
}
.m-l-10 {
  margin-left: 10px;
}
.m-l-15 {
  margin-left: 15px;
}
.m-l-20 {
  margin-left: 20px;
}
.m-l-25 {
  margin-left: 25px;
}
.m-l-30 {
  margin-left: 30px;
}
/* End Margin Left */

/* Margin Right */
.m-r-0 {
  margin-right: 0px;
}
.m-r-5 {
  margin-right: 5px;
}
.m-r-10 {
  margin-right: 10px;
}
.m-r-15 {
  margin-right: 15px;
}
.m-r-20 {
  margin-right: 20px;
}
.m-r-25 {
  margin-right: 25px;
}
.m-r-30 {
  margin-right: 30px;
}
/* End Margin Right */

/* Padding top */
.p-t-0 {
  padding-top: 0px;
}
.p-t-5 {
  padding-top: 5px;
}
.p-t-10 {
  padding-top: 10px;
}
.p-t-15 {
  padding-top: 15px;
}
.p-t-20 {
  padding-top: 20px;
}
.p-t-25 {
  padding-top: 25px;
}
.p-t-30 {
  padding-top: 30px;
}
/* End Padding top */

/* Padding Bottom */
.p-b-0 {
  padding-bottom: 0px;
}
.p-b-5 {
  padding-bottom: 5px;
}
.p-b-10 {
  padding-bottom: 10px;
}
.p-b-15 {
  padding-bottom: 15px;
}
.p-b-20 {
  padding-bottom: 20px;
}
.p-b-25 {
  padding-bottom: 25px;
}
.p-b-30 {
  padding-bottom: 30px;
}
/* End Padding Bottom */

/* Padding Left */
.p-l-0 {
  padding-left: 0px;
}
.p-l-5 {
  padding-left: 5px;
}
.p-l-10 {
  padding-left: 10px;
}
.p-l-15 {
  padding-left: 15px;
}
.p-l-20 {
  padding-left: 20px;
}
.p-l-25 {
  padding-left: 25px;
}
.p-l-30 {
  padding-left: 30px;
}
/* End padding Left */

/* padding Right */
.p-r-0 {
  padding-right: 0px;
}
.p-r-5 {
  padding-right: 5px;
}
.p-r-10 {
  padding-right: 10px;
}
.p-r-15 {
  padding-right: 15px;
}
.p-r-20 {
  padding-right: 20px;
}
.p-r-25 {
  padding-right: 25px;
}
.p-r-30 {
  padding-right: 30px;
}
/* End padding Right */

#myheader header {
  background-color: #4c87f2;
}

#myheader header .indentity {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#myheader header .indentity img {
  height: 60px;
}

#myheader header .indentity .name {
  margin-left: 15px;
}

#myheader header .indentity .name h4 {
  color: #fff;
}

#myheader header .menu {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
}

#myheader header .menu h6 {
  color: #fff;
}

#myheader .name {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 70px;
  flex-direction: column;
}

#myheader header .loginregister {
  width: 100%;
  height: 70px;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  font-weight: bold !important;
  background-color: #4c87f2 !important;
  color: #fff !important;
}

#modal-lg .modal-body {
  padding: 0 !important;
  /* border-radius: 20px !important; */
}

#modal-lg .modal-content {
  /* border-radius: 20px !important; */
  background-color: transparent;
  outline: none;
  border: none;
}

.tabel-harga {
  width: 160px !important;
}
</style>
