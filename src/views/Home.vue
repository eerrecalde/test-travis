<template>
  <div class="home">
    <v-tabs v-model="active" centered>
      <v-tab key="request" ripple>Request a Secret
        <v-icon></v-icon>
      </v-tab>
      <v-tab key="write" ripple>Write a Secret</v-tab>
      <v-tab-item key="request">
        <RequestSecret/>
      </v-tab-item>
      <v-tab-item key="write">
        <WriteSecret/>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import WriteSecret from '@/components/WriteSecret.vue';
import RequestSecret from '@/components/RequestSecret.vue';

export default {
  name: 'home',
  components: {
    WriteSecret,
    RequestSecret,
  },
  data() {
    return {
      type: 'requestSecret',
      active: null,
    };
  },
};
</script>
