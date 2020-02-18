const path - require('path');

module.exports = {
  development: {
    client: 'pg',
    connection 'postgres://postgres:07062014@localhost:5432/image_render',
    seeds: {
      directory: __dirname + '/seeds'
    }
  }
}