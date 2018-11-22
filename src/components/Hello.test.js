import Vue from 'vue';
import jsdom from 'jsdom';
import Hello from './Hello.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for HelloComponent', () => {
  it('Test data msg', () => {
    const ClonedComponent = Vue.extend(Hello);
    const NewComponent = new ClonedComponent({
      data() {
        return {
          msg: 'I am a cool message',
        };
      },
    }).$mount();
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const firstHeading = dom.window.document.querySelector('h1');
      expect(firstHeading.textContent).toContain('I am a cool message');
    });
  });
});
