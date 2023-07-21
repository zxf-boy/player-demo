<template>
  <div id="player-demo">
    <el-tabs v-model="activeName">
      <el-tab-pane label="VePlayer" name="VePlayer">
        <ve-player v-if="activeName == 'VePlayer'"></ve-player>
      </el-tab-pane>
      <el-tab-pane label="QNRTPlayer" name="QNRTPlayer">
        <QNRTPlayer v-if="activeName == 'QNRTPlayer'"></QNRTPlayer>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VePlayer from './views/VepPlayer.vue'
import QNRTPlayer from './views/QNRTPlayer.vue'
export default {
  name: 'App',
  components: {
    VePlayer,
    QNRTPlayer
  },
  data () {
    return {
      activeName: 'VePlayer'
    }
  },
}
</script>
<style lang="scss" scoped>
  #player-demo {
    height: 100%;
  }
</style>
