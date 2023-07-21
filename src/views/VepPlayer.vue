<template>
  <div id="app" class="live-window">
    <input class="ipt" type="textarea" v-model="url">
    <button @click="playNext">播放</button>
    <div id="liveWindow" ref="liveWindow"></div>
  </div>
</template>

<script>
export default {
  name: 'VePlayer',
  data () {
    return {
      player: null,
      url: 'https://qvs-live-hdl.cpgroup.cn:447/2xenzw32d1rf9/31011500991180002166_34020000001320000020_history_1689696000_1689753073.flv'
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
    // 播放
    play () {
      try {
        this.player = new window.VePlayer({
          id: 'liveWindow',
          isLive: true,
          lang: 'zh',
          url: this.url,
          autoplay: true,
          volume: 0.5,
          width: 600,
          height: 400,
          enableH265Degrade: true, // 开启H.265 兼容模式
          fluid: true,
        })
        // 获取播放状态
        // const playerState = this.player.player.state
        console.log(this.player)
        // 设置音量，实例的 player 进行设置
        this.player.player.volume = 0.2;
      } catch (err) {
        console.log(err)
      }
    },
    playNext() {
      this.player.playNext({
        url: this.url,
      });
    },
    // 播放器销毁
    clearVideo() {
      if (this.player) {
        this.player.destroy(true)
        this.player = null
      }
    },
  }
}
</script>

<style lang='scss' scoped>
  #liveWindow {
    width: 50%;
    background-color: #928;
  }
  .ipt {
    width: 600px;
  }
</style>
