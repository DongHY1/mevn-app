<template>
  <div class="app">
    <n-message-provider>
      <n-menu :options="menuOptions" mode="horizontal" />
      <router-view></router-view>
    </n-message-provider>
  </div>
</template>
<script setup>
import { h } from 'vue'
import { NIcon, NMenu,NMessageProvider } from 'naive-ui';
import { RouterLink } from 'vue-router';
import {
  ArrowUpOutline as RegisterIcon,
  LogInOutline as LoginIcon
} from "@vicons/ionicons5";
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
  {
    label: () => h(RouterLink, {
      to: {
        name: "home"
      }
    }, { default: () => "首页" }),
    key: "go-back-home"
  },
  {
    label: () => h(RouterLink, {
      to: {
        name: "login"
      }
    }, { default: () => "登录" }),
    key: "go-to-login",
    icon: renderIcon(LoginIcon)
  },
  {
    label: () => h(RouterLink, {
      to: {
        name: "register"
      }
    }, { default: () => "注册" }),
    key: "go-to-register",
    icon: renderIcon(RegisterIcon)
  }
];
</script>
<style lang="less" scoped>
.app {
  .header {
    a {
      text-decoration: none;
      color: black;
    }
    a:active {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
