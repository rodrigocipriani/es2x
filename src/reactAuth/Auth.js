// TODO: Usar alguma biblioteca que escolhe o melhor lugar para guardar o usuário (server rendering, mobile, etc)

class Auth {

  /**
   * Authenticate a user. Save a user object in Local Storage
   *
   * @param {object} user
   */
  static authenticateUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Check if a user is authenticated - check if a user is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    const user = localStorage.getItem('user');
    return !!user;
  }

  /**
   * Deauthenticate a user. Remove a user from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('user');
  }

  /**
   * Get a user value.
   *
   * @returns {object}
   */

  static getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}

export default Auth;
