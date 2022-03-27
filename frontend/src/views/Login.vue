<template>
    <div class="login">
        <n-form ref="formRef" label-placement="left" size="large" :model="formValue" :rules="rules">
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
                <n-button type="primary" round @click="handleValidateClick">登录</n-button>
            </div>
        </n-form>
    </div>
</template>

<script setup>
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui';
import { ref } from 'vue';
const formRef = ref(null);
const message = useMessage()
const formValue = ref({
    email: '',
    password: ''
})
const rules = {
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
                    return new Error("密码至少为6位数")
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
            message.success("登录成功");
        } else {
            message.error("登录失败");
        }
    })
}
</script>

<style lang="less" scoped>
.login {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>