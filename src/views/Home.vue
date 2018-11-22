<template>
  <div class="home">
    <WriteSecret/>
  </div>
</template>

<script>
// @ is an alias to /src
import WriteSecret from '@/components/WriteSecret.vue';

export default {
  name: 'home',
  components: {
    WriteSecret,
  },
};
</script>
