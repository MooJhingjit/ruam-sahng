<template>
  <div class="home">
    <div class="header">
      <!-- <div class="pure-g">
          <div class="pure-u-1-2"><p>Thirds</p></div>
          <div class="pure-u-1-2"><p>Thirds</p></div>
      </div>
      <div class="pure-g">
          <div class="pure-u-1-2"><p>Thirds</p></div>
          <div class="pure-u-1-2"><p>Thirds</p></div>
      </div> -->
      <div class="pure-g">
        <div class="pure-u-1-2">
          <div class="pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
                <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Selected</a></li>
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Normal</a></li>
                <li class="pure-menu-item pure-menu-disabled">Disabled</li>
            </ul>
        </div>
      </div>
      <div class="pure-u-1-2 site">
          <a class="pure-menu-heading" href="">Your Site</a>
      </div>
    </div>
  </div>
  <div class="pure-g">
      <div class="pure-u-1 pure-u-sm-1-3 pure-u-md-1"> ... </div>
      <div class="pure-u-1 pure-u-sm-1-3 pure-u-md-1"> ... </div>
      <div class="pure-u-1 pure-u-sm-1-3 pure-u-md-1"> ... </div>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.site{
  text-align: right;
}
</style>
