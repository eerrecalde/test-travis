<template>
  <div>
    <v-layout v-if="!secret">
      <v-flex xs12 sm6 offset-sm3 pt-3>
        <v-card>
          <v-card-title>
            <v-flex align-self-center>
              <h2>{{ $t('message.components.readSecretWithPass.title') | capitalize}}</h2>
              <div>{{ $t('message.components.readSecretWithPass.subtitle') | capitalize}}</div>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="pass"
                :append-icon="show1 ? 'visibility_off' : 'visibility'"
                :rules="passRules"
                :type="show1 ? 'text' : 'password'"
                required
                name="input-10-1"
                :label="$t('message.forms.fields.password.label') | capitalize"
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-card-actions class="px-0 pb-0">
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  :disabled="!valid"
                  :loading="sendingRequest"
                  @click="!pass || sendPass(pass)"
                >{{$t('message.forms.fields.send.text')}}</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <read-secret v-if="secret" :loading="loading" :secret="secret"/>
  </div>
</template>
<script>
import ReadSecret from '@/components/ReadSecret.vue';
import Services from '@/services';

export default {
  name: 'readSecretWithPass',
  props: {
    hash: String,
  },
  components: {
    ReadSecret,
  },
  data() {
    return {
      secret: '',
      show1: false,
      pass: '',
      sendingRequest: false,
      valid: false,
      passRules: [v => v, v => v],
    };
  },
  methods: {
    async getSecretWithPass(pass) {
      try {
        const data = await Services.getSecretWithPass(pass);
        return data;
      } catch (error) {
        console.log('Error', error);
        return null;
      }
    },
    sendPass(pass) {
      this.sendingRequest = true;
      this.loading = true;
      this.getSecretWithPass(pass).then(data => {
        this.secret = data;
        this.loading = false;
        this.sendingRequest = false;
      });
    },
  },
  computed: {},
  mounted() {
    this.passRules = [
      v =>
        !!v ||
        this.$options.filters.capitalize(this.$t('message.forms.fields.secret.error.required')),
    ];
  },
};
</script>
