var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Cachear API
 *
 * Como usar:
 * const cachedApi = new CachedApi(Abstração de uma biblioteca API);
 * Ex.:
 * const cachedApi = new CachedApi(axiosApi);
 *
 *
 * cachedApi.post(url, params)
 * cachedApi.get(url, params)
 * Ex.:
 * cachedApi.post(`/contrato/contrato/agrupamento`, {codigoAgrupadores})
 *
 * todo:
 * - Colocar configuração de tempo de cache
 * - Guardar em storage
 * - Otimizar
 *
 * */
import api from './api';

var CachedApi = function () {
  function CachedApi(url) {
    _classCallCheck(this, CachedApi);

    this._cachedUrls = [];
    this._api = api(url);
  }

  _createClass(CachedApi, [{
    key: 'post',
    value: function post() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this._request(args, 'post');
    }
  }, {
    key: 'get',
    value: function get() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this._request(args, 'get');
    }
  }, {
    key: '_addCachedUrl',
    value: function _addCachedUrl(url, params, data) {
      var hash = this._strToHashCode('' + url + JSON.stringify(params));
      this._cachedUrls[hash] = data;
    }
  }, {
    key: '_getCachedUrl',
    value: function _getCachedUrl(url, params) {
      var hash = this._strToHashCode('' + url + JSON.stringify(params));
      return this._cachedUrls[hash];
    }
  }, {
    key: '_request',
    value: function _request(args, callType) {
      var _api,
          _this = this;

      var url = args[0];
      var params = args[1];

      var getCached = this._getCachedUrl(url, params);

      if (getCached) {
        return Promise.resolve(getCached);
      }
      return (_api = this._api)[callType].apply(_api, _toConsumableArray(args)).then(function (response) {
        _this._addCachedUrl(url, params, response);
        return response;
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: '_strToHashCode',
    value: function _strToHashCode(str) {
      var hash = 0;
      if (str.length === 0) return hash;
      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash; // Convert to 32bit integer
      }
      return hash;
    }
  }]);

  return CachedApi;
}();

export { CachedApi as default };