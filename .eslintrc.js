module.exports = {
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // 我感觉这种其实就是替代了plugin配置？？
    "prettier", // eslint-config-prettier 为了避免prettier和eslint的冲突
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
