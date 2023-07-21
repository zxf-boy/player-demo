// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jquery: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }]
  },
  "globals": {
    "NvsVideoResolution": true,
    "NvsRational": true,
    "NvsStreamingEngineStateEnum": true,
    "NvsLiveWindowFillModeEnum": true,
    "NvsVideoPreviewSizeModeEnum": true,
    "NvsAudioResolution": true,
    "NvsClipRoleInThemeEnum": true,
    "NvsCaptionRoleInThemeEnum": true,
    "nvsResumeAudioContext": true,
    "FS": true,
    "nvsGetStreamingContextInstance": true,
    "WASMLoader": true,
    "Module": true,
    "videojs": true,
    "NvsXmlStreamWriter": true,
    KEEPALIVE: true,
    mapActions: 'readonly',
    mapState: 'readonly',
    mapGetters: 'readonly',
    mapMutations: 'readonly',
    Enum: 'readonly'
  }
}
