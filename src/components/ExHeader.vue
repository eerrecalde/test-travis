<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>expirio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><router-link to="/">{{ $t('message.header.home.text') }}</router-link></v-btn>
        <v-btn flat><router-link to="/how-it-works">{{ $t('message.header.howItWorks.text') }}</router-link></v-btn>
        <v-menu>
          <v-btn
            slot="activator"
            color="primary"
            small
            dark
          >
            {{localeSelected}}
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(locale, index) in locales"
              :key="index"
              @click="selectLocale(locale)"
            >
              <v-list-tile-title>{{ locale }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localeSelected: 'EXP',
      locales: [],
    };
  },
  methods: {
    selectLocale(lcl) {
      this.localeSelected = lcl;
      this.$i18n.locale = lcl;
    },
  },
  mounted() {
    this.locales = this.$i18n.locales;
    [this.localeSelected] = this.locales;
  },
};
</script>
