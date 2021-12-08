<template>
  <div class="loginBox">
    <div class="photoANDpassword">
      <div class="photo">

      </div>
      <input type="password" placeholder="请输入密码">

    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
  .loginBox {
    background: url("@/assets/login/cf10a39835efc516f84d398f67d5695640ea2535.jpg@942w_590h_progressive.webp") no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .photoANDpassword {
      width: auto;
      height: auto;
      .photo {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        background: gray;
        border-radius: 50%;
      }
      input {
        margin: 20px 0;
        border: 1px solid #d0d0d0;
        border-radius: 5px;
        padding-left: 10px;
        outline: none;
        caret-color: gray;
      }
      input::-webkit-input-placeholder{
        color: #d0d0d0;
      }
    }
  }
</style>
