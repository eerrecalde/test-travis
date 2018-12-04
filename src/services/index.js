async function fakeCall() {
  const txt =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo eros, vestibulum efficitur diam vel, dignissim faucibus orci. Suspendisse nec nisi eros. Morbi lobortis nulla vel lorem ullamcorper, ornare hendrerit eros accumsan. Suspendisse ut enim vestibulum, volutpat orci quis, fermentum tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et nisl at ante malesuada efficitur ut vitae tortor. Pellentesque condimentum ligula risus, sollicitudin tempus mi rhoncus vel. In mattis ornare mi, vitae gravida metus malesuada ut. Integer eu tellus id lectus semper dignissim. Nullam egestas velit risus, et blandit sem euismod in. Donec viverra purus vitae auctor facilisis.';
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(txt), 4000);
  });

  const result = await promise; // wait till the promise resolves (*)

  return result;
}

/**
 * @class Services
 *
 */
class Services {
  /**
   * @static getSecret
   * @description service to get secret from given hash
   *
   * @memberof Services
   * @returns { object }
   */
  static async getSecret(hash) {
    console.log('getSecret', hash);
    try {
      const url = `https://fakeurl.com?secret=${hash}`;
      const response = await fakeCall(url, hash);
      // const body = await response.json();
      console.log('hash', hash, response);
      return response;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  /**
   * @static getSecretWithPass
   * @description service to get secret from given hash
   *
   * @memberof Services
   * @returns { object }
   */
  static async getSecretWithPass(pass) {
    console.log('getSecretWithPass', pass);
    try {
      const url = `https://fakeurl.com?secret=${pass}`;
      const response = await fakeCall(url, pass);
      // const body = await response.json();
      console.log('pass', pass, response);
      return response;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }
}

export default Services;
