<template>
  <div class="iboot-tech-loading"></div>
</template>

<script lang="ts">
import lottie from 'lottie-web'
import { onMounted } from 'vue'
import datajson from '../assets/lottie/loading.json'
export default {
  name: 'Loading',
  props: {},
  setup(): any {
    onMounted(() => {
      lottie.loadAnimation({
        container: document.getElementsByClassName('iboot-tech-loading')[0], // 包含动画的dom元素
        renderer: 'svg', // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: datajson // 动画json的路径
      })
    })
  }
}
</script>

<style lang="less"></style>
