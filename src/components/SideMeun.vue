
import { RouterLink } from 'vue-router';


import { RouterLink } from 'vue-router';


import { RouterLink } from 'vue-router';

<template>
<div class="siderbar">
  <ul>
    <li style="padding-bottom: 2rem;">
      <router-link to="/" class="maker">HyunSang Photograhpy</router-link>
    </li>
    <li class="maker-list">
      <span class="maker">Info:</span>
    </li>
    <li>
      <RouterLink class="link" to="/about">About</RouterLink>
    </li>
    <li>
      <a class="link" href="https://www.instagram.com/park.hyunsang/" target="_blank">Instgarm</a> |  <a class="link" href="https://500px.com/p/hyunsang" target="_blank">500px</a>
    </li>
    <li class="maker-list" style="padding-top: 2rem;">
      <span class="maker">2022:</span>
    </li>
    <li>
      <RouterLink class="link" to="/2022/20221227-Muan">2022.12.27 - Muan, South Korea</RouterLink>
    </li>
    <li class="maker-list" style="padding-top: 2rem;">
      <span class="maker">2023:</span>
    </li>
    <li>
      <RouterLink  class="link" to="/2023/20230103-Busan">2023.01.03 - Busan, South Korea</RouterLink>
    </li>
    <li>
      <RouterLink  class="link" to="/2023/20230108-Seoul">2023.01.08 - Seoul, South Korea</RouterLink>
    </li>
    <li>
      <RouterLink  class="link" to="/2023/20230108-Seoul-2">2023.01.08 - Seoul, South Korea</RouterLink>
    </li>
    <li>
      <RouterLink class="link" to="/2023/20230116-Tokyo">2023.01.16 - Tokyo, Japan</RouterLink>
    </li>
    <li>
      <RouterLink class="link" to="/2023/20230117-Tokyo">2023.01.17 - Tokyo, Japan</RouterLink>
    </li>
  </ul>
</div>
</template>
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  .title {
    padding-bottom: 1.5rem;
  }
  .siderbar {
    padding-right: 60px;
  }
  .maker-list{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .maker{
    background: linear-gradient(transparent 0%, #7F6300 0%);
    color: #fff;
  } 
  .link {
    line-height: 0.5rem;
    text-decoration: #333333;
    text-decoration-line:underline;
    color: #333333;
  }
</style>
