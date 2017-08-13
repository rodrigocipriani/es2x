var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: Usar alguma biblioteca que escolhe o melhor lugar para guardar o usuário (server rendering, mobile, etc)

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: 'authenticateUser',


    /**
     * Authenticate a user. Save a user object in Local Storage
     *
     * @param {object} user
     */
    value: function authenticateUser(user) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    /**
     * Check if a user is authenticated - check if a user is saved in Local Storage
     *
     * @returns {boolean}
     */

  }, {
    key: 'isUserAuthenticated',
    value: function isUserAuthenticated() {
      var user = localStorage.getItem('user');
      return !!user;
    }

    /**
     * Deauthenticate a user. Remove a user from Local Storage.
     *
     */

  }, {
    key: 'deauthenticateUser',
    value: function deauthenticateUser() {
      localStorage.removeItem('user');
    }

    /**
     * Get a user value.
     *
     * @returns {object}
     */

  }, {
    key: 'getUser',
    value: function getUser() {
      return JSON.parse(localStorage.getItem('user'));
    }
  }]);

  return Auth;
}();

export default Auth;