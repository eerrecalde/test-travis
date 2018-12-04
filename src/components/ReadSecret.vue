<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 pt-3>
        <v-snackbar :value="!!alertContent" color="success" :timeout="3000" top close>
          {{alertContent}}
          <v-btn color="white" flat @click="alertContent = false">Close</v-btn>
        </v-snackbar>
        <v-card>
          <v-card-title>
            <v-flex align-self-center>
              <h2
                class="text-capitalize"
              >{{ $t('message.components.readSecret.title') | capitalize}}</h2>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
            <p v-if="!loading" class="secret blue lighten-5 py-3 px-3 mb-0 text-xs-left">
              {{secret}}
              <v-btn
                @click="copyToClipboard(secret); showAlert('Copied to clipboard.');"
                title="Copy to clipboard"
                fab
                small
                absolute
                dark
                color="indigo"
                class="mr-2 mb-2 copy-icon"
              >
                <v-icon>file_copy</v-icon>
              </v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
const timer = {};

export default {
  name: 'readSecret',
  props: {
    secret: String,
    loading: Boolean,
  },
  data: () => ({
    alertContent: null,
  }),
  methods: {
    showAlert(msg) {
      this.alertContent = msg;
      clearTimeout(timer.alert);
      timer.alert = setTimeout(() => {
        this.alertContent = null;
      }, 3000);
    },
    copyToClipboard(str) {
      const el = document.createElement('textarea'); // Create a <textarea> element
      el.value = str; // Set its value to the string that you want copied
      el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
      el.style.position = 'absolute';
      el.style.left = '-9999px'; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0) // Store selection if found
          : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
      if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
      }
    },
  },
};
</script>
<style lang="scss">
.secret {
  border-radius: 3px;
  font-size: 1.3rem;
  position: relative;
  overflow-x: hidden;
}

.copy-icon {
  bottom: -50px;
  right: -50px;

  .secret:hover & {
    bottom: 0;
    right: 0;
  }
}
</style>
