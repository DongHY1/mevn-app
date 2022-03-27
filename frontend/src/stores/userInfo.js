import { defineStore } from "pinia";
import { reactive } from "vue";
export const useUserInfoStore = defineStore("userInfo", () => {
  const registerUserInfo = reactive({
    user:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
  })
  async function userRegister(payload){
    registerUserInfo.user = payload.name
    console.log(payload)
  }
  return {
    registerUserInfo,
    userRegister
  };
});
