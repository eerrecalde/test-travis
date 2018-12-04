<template>
  <div>
    <read-secret :loading="loading" :secret="secret"/>
  </div>
</template>
<script>
import ReadSecret from '@/components/ReadSecret.vue';
import Services from '@/services';

export default {
  name: 'readSecretWithHash',
  props: {
    hash: String,
  },
  components: {
    ReadSecret,
  },
  data() {
    return {
      secret: '',
    };
  },
  methods: {
    async getSecret() {
      try {
        const data = await Services.getSecret(this.hash);
        return data;
      } catch (error) {
        console.log('Error', error);
        return null;
      }
    },
  },
  computed: {},
  created() {
    this.loading = true;
    this.getSecret().then(data => {
      this.secret = data;
      this.loading = false;
    });
  },
};
</script>
