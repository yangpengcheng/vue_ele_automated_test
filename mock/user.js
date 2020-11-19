const tokens = {
  admin: {
    token: 'admin-token'
  },
  tester: {
    token: 'tester-token'
  }
}

const users = {
  'admin-token': {
    permissions: ['ALL'],
    name: 'Super Admin'
  },
  'tester-token': {
    permissions: ['tester'],
    name: 'Normal Tester'
  },
  'visitor-token': {
    permissions: ['visitor'],
    name: 'Normal Visitor'
  }
}

module.exports = [
  // 用户登录
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username] || {token:'visitor-token'}
      return {
        ...token,
        msg:'登录成功'
      }
    }
  },

  // 获取用户信息
  {
    url: '/user/info.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          err_msg: 'token无效'
        }
      }

      return {
        ...info,
        msg:'获取用户信息成功'
      }
    }
  },

  // 用户登出
  {
    url: '/user/logout',
    type: 'post',
    response: () => {
      return {
        message: 'success',
        msg:'登出成功'
      }
    }
  }
]

