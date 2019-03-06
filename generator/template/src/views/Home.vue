<template>
  <div class="home">
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      @click="alert(0)"
    />
    <el-button></el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld/index.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
