<template>
  <div>
    <a-button type="primary">Primary</a-button>
    <svg-icon icon-class="small"></svg-icon>
    <div>{{ title }}</div>
    <div>{{ AppInfo }}</div>
    <div id="demo">
      <button @click="show = !show">Toggle</button>

      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Button } from 'ant-design-vue'
import { ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'
import { useStore } from 'vuex'
export default {
  data(): any {
    return {
      show: true
    }
  },
  components: {
    [Button.name]: Button
  },
  mounted(): void {
    console.log('===mounted====')
  },
  setup(): any {
    const store = useStore()
    let title = ref('ss')
    onBeforeMount(() => {
      console.log('===onBeforeMount===')
    })
    let setTitle = () => {
      title.value = 'eadwe'
    }
    onMounted(() => {
      setTitle()
      /*store.dispatch(`Home/SET_APP_INFO`, '222')
      console.log(store.getters['Home/AppInfo'])*/
      console.log('===onMounted===')
    })
    onUpdated(() => {
      console.log('===onUpdated===')
    })
    onBeforeUpdate(() => {
      console.log('===onBeforeUpdate===')
    })
    onBeforeUnmount(() => {
      console.log('===onBeforeUnmount===')
    })
    onUnmounted(() => {
      console.log('===onUnmounted===')
    })
    onErrorCaptured(() => {
      console.log('===onErrorCaptured===')
    })
    onRenderTracked(() => {
      console.log('===onRenderTracked===')
    })
    onRenderTriggered(() => {
      console.log('===onRenderTriggered===')
    })
    return {
      AppInfo: computed(() => store.state.Home.AppInfo),
      title
    }
  }
}
</script>
<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
