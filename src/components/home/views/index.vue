<template>
  <div>
    <Loading />
  </div>
</template>
<script lang="ts">
import { Button } from 'ant-design-vue'
import { ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'
import { useStore } from 'vuex'
import Loading from '../components/loading.vue'
export default {
  data(): any {
    return {
      show: true
    }
  },
  components: {
    Loading,
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
</style>
