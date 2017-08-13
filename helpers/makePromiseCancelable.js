/**
 * How to use
 *
  import {makePromiseCancelable} from '../../../es2x/helpers';

  const promise = makePromiseCancelable(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise return');
    }, 4000);
  }));

   promise.then(res => {
    console.log(`promise resolved: ${ res }`);
  }).catch((reason) => console.log('isCanceled', reason.isCanceled));
 *
 * */

var makePromiseCancelable = function makePromiseCancelable(promise) {
  var hasCanceled = false;

  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled ? reject({ isCanceled: true }) : resolve(val);
    });
    promise.catch(function (error) {
      return hasCanceled ? reject({ isCanceled: true }) : reject(error);
    });
  });

  wrappedPromise.cancel = function () {
    hasCanceled = true;
  };

  return wrappedPromise;
};

export default makePromiseCancelable;