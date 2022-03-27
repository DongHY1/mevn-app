<template>
    <div class="register">
        <n-form ref="formRef" label-placement="left" size="large" :model="formValue" :rules="rules">
            <n-form-item path="name" label="姓名">
                <n-input
                    v-model:value="formValue.name"
                    type="text"
                    @keydown.enter.prevent
                    placeholder="请输入姓名"
                    round
                />
            </n-form-item>
            <n-form-item path="email" label="邮箱">
                <n-input
                    v-model:value="formValue.email"
                    type="text"
                    @keydown.enter.prevent
                    placeholder="请输入邮箱"
                    round
                />
            </n-form-item>
            <n-form-item path="password" label="密码">
                <n-input
                    v-model:value="formValue.password"
                    type="password"
                    @keydown.enter.prevent
                    placeholder="请输入密码"
                    round
                />
            </n-form-item>
            <div style="display: flex; justify-content: flex-end">
                <n-button type="primary" round @click="handleValidateClick">注册</n-button>
            </div>
        </n-form>
    </div>
</template>

<script setup>
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui';
import { reactive,ref } from 'vue'
import { useUserInfoStore } from '@/stores/userInfo';
const formRef = ref(null);
const message = useMessage()
const formValue = reactive({
    name: '',
    email: '',
    password: ''
})
const rules = {
    name: [
        {
            required: true,
            validator(rule, value) {
                if (!value) {
                    return new Error("请输入名字")
                }
                return true
            },
            trigger: ["input"]
        }
    ],
    email: [
        {
            required: true,
            validator(rule, value) {
                if (!value) {
                    return new Error("请输入邮箱")
                } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
                    return new Error("邮箱格式不正确")
                }
                return true
            },
            trigger: ["input"]
        }
    ],
    password: [
        {
            required: true,
            validator(rule, value) {
                if (!value) {
                    return new Error("请输入密码")
                } else if (value.length < 6) {
                    return new Error("密码至少要6位数")
                }
                return true
            },
            trigger: ["input"]
        }
    ],
}
function handleValidateClick(e) {
    e.preventDefault();
    formRef.value?.validate((errors) => {
        if (!errors) {
            // 发送网络请求
            const userInfoStore = useUserInfoStore()
            userInfoStore.userRegister({"name":formValue.name})
            message.success("注册成功");
        } else {
            message.error("注册失败");
        }
    })
}
</script>

<style lang="less" scoped>
.register {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .register-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>