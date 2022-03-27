import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
const API_URL = "/api/users";
export const useUserInfoStore = defineStore("userInfo", () => {
  let user = ref("");
  async function userRegister(payload) {
    console.log(payload)
    user.value = payload.name;
    // 发送网络请求-注册用户
    const response = await axios.post(API_URL, payload);
    console.log(response)
    return response.data;
  }
  return {
    user,
    userRegister,
  };
});
