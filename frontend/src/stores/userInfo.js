import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserInfoStore = defineStore("userInfo", () => {
  const user = ref("");
  const isError = ref(false);
  const isSuccess = ref(false);
  const isLoading = ref(false);
  const message = ref("");
  async function userRegister(payload){
    console.log(payload)
  }
  return {
    user,
    isError,
    isSuccess,
    isLoading,
    message,
    userRegister
  };
});
