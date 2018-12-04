<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 pt-3>
        <v-card>
          <v-card-title>
            <v-flex align-self-center>
              <h2>{{ $t('message.components.requestSecret.title') | capitalize }}</h2>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-checkbox
                v-model="withToken"
                :label="$t('message.forms.fields.withToken.label')"
                required
              ></v-checkbox>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('message.forms.fields.email.label') | capitalize"
                required
              ></v-text-field>
              <v-text-field
                v-if="withToken"
                v-model="token"
                :append-icon="show1 ? 'visibility_off' : 'visibility'"
                :rules="tokenRules"
                :type="show1 ? 'text' : 'password'"
                :required="withToken"
                name="input-10-1"
                :label="$t('message.forms.fields.password.label') | capitalize"
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-card-actions class="px-0 pb-0">
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!valid">{{$t('message.forms.fields.send.text')}}</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'sendSecret',
  data: () => ({
    valid: false,
    email: '',
    show1: false,
    withToken: false,
    emailRules: [v => v, v => v],
    tokenRules: [v => v, v => v],
  }),
  mounted() {
    this.emailRules = [
      v =>
        !!v ||
        this.$options.filters.capitalize(this.$t('message.forms.fields.email.error.required')),
      v =>
        /.+@.+/.test(v) ||
        this.$options.filters.capitalize(this.$t('message.forms.fields.email.error.valid')),
    ];
    this.tokenRules = [
      v =>
        !!v ||
        this.$options.filters.capitalize(this.$t('message.forms.fields.password.error.required')),
    ];
  },
};
</script>