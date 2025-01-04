const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainObject = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse();

    for (let i = 0; i < parts.length; i++) {
      const subDomain = '.' + parts.slice(0, i + 1).join('.');
      domainObject[subDomain] = (domainObject[subDomain] || 0) + 1;
    }
  });
  
  return domainObject;
}

module.exports = {
  getDNSStats
};
