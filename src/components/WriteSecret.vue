<template>
  <div>
    <form novalidate class="md-layout md-alignment-center" @submit.prevent="validateEmail">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Write secret</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <md-field :class="getValidationClass('secret')">
              <label for="secret">Secret</label>
              <md-input type="secret" name="secret" id="secret" autocomplete="secret" v-model="form.secret" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.secret.required">The secret is required</span>
              <span class="md-error" v-else-if="!$v.form.secret.secret">Invalid secret</span>
            </md-field>
          </div>
          <div class="md-layout">
            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Send</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="secretSent">The secret **** was sent with success!</md-snackbar>
    </form>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'sendSecret',
  mixins: [validationMixin],
  data: () => ({
    form: {
      secret: null,
      email: null,
    },
    secretSent: false,
    sending: false,
    lastUser: null,
  }),
  validations: {
    form: {
      secret: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }

      return '';
    },
    clearForm() {
      this.$v.$reset();
      this.form.secret = null;
      this.form.email = null;
    },
    sendMessage() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.secretSent = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateEmail() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.sendMessage();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>