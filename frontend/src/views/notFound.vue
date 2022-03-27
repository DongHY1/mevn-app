<template>
    <n-loading-bar-provider>
        <n-message-provider>
            <n-notification-provider>
                <n-dialog-provider>
                    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
                        <template #footer>
                            <router-link to="/">
                                <n-button>试试返回首页？</n-button>
                            </router-link>
                        </template>
                    </n-result>
                </n-dialog-provider>
            </n-notification-provider>
        </n-message-provider>
    </n-loading-bar-provider>
</template>

<script setup>
import { NResult, NButton, NDialogProvider, NNotificationProvider, NMessageProvider, NLoadingBarProvider } from 'naive-ui'
</script>
<style>
a {
    text-decoration: none;
    color: black;
}
a:hover {
    text-decoration: none;
    color: black;
}
</style>