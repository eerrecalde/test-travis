<template>
  <div class="home">
    <ReadSecretWithHash v-if="param" :hash="param"/>
    <ReadSecretWithPass v-if="!param"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ReadSecretWithPass from '@/components/ReadSecretWithPass.vue';
import ReadSecretWithHash from '@/components/ReadSecretWithHash.vue';

export default {
  name: 'readSecretPage',
  data() {
    return {
      param: null,
      type: 'pass',
    };
  },
  components: {
    ReadSecretWithPass,
    ReadSecretWithHash,
  },
  created() {
    this.param = this.$route.params && this.$route.params.hash ? this.$route.params.hash : null;
    console.log('param', this.hash, this.param);
  },
};
</script>
