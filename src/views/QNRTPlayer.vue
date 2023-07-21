<template>
  <div id="app" class="live-window">
    <input class="ipt" type="textarea" v-model="url">
    <button @click="playNext">播放</button>
    <div id="player" class="player" ref="liveWindow"></div>
  </div>
</template>

<script>
import { QNRTPlayer } from "qn-rtplayer-web";
export default {
  name: 'QNRTPlayer',
  data () {
    return {
      player: null,
      url: 'webrtc://qvs-live-webrtc.cpgroup.cn:1240/2xenzw32d1rf9/31011500991180017202_34020000001310000002'
    }
  },
  async mounted () {
    console.log('%c<------AIOT Player Demo------->', 'color: yellow')
    this.setWindowSize()
    // 播放
    await this.play()
  },
  destroyed() {
    console.log('页面销毁')
    this.clearVideo()
    window.removeEventListener('beforeunload', (e) =>
      this.clearVideo(e)
    )
  },
  methods: {
    // 设置视频窗口尺寸
    setWindowSize () {
      const liveWindow = this.$refs.liveWindow
      liveWindow.width = liveWindow.offsetWidth
      liveWindow.height = liveWindow.offsetWidth / 16 * 9
    },
    // 播放 播放器使用文档：https://developer.qiniu.com/pili/7730/geek-web-sdk
    play () {
      try {
        // 1. 创建 QNRTPlayer 对象
        this.player = new QNRTPlayer()
        // 2. 初始化配置信息
        this.player.init({
          className: 'player',
          with: '100%',
          height: '100%',
          objectFit: 'contain',
          volumn: 0,
          controls: true,
          playsinline: true,
        })
        // 3. 传入播放地址及容器，开始播放
        this.player.play(this.url, document.getElementById('player'))
      } catch (err) {
        console.log(err)
      }
    },
    playNext() {
      this.player.play(this.url, document.getElementById('player'))
    },
    // 播放器销毁
    clearVideo() {
      if (this.player) {
        this.player.release()
        this.player = null
      }
    },
  }
}
</script>

<style lang='scss' scoped>
  #player {
    width: 50%;
    background-color: #928;
  }
  .ipt {
    width: 600px;
  }
</style>
