<template>

<div class="col-md-8 col-md-offset-2 life">
  <div class="col-md-6 left">
    <a href="https://www.baidu.com/" target="_blank">
    <p class="life-file">百度</p>
    </a>
  </div>

  <div class="col-md-6 left">
    <a href="https://www.baidu.com/" target="_blank">
    <p class="life-file">百度</p>
    </a>
  </div>

  <div class="col-md-6 left">
    <a href="https://www.baidu.com/" target="_blank">
    <p class="life-file">百度</p>
    </a>
  </div>

  <div class="col-md-6 left">
    <a href="https://www.baidu.com/" target="_blank">
    <p class="life-file">百度</p>
    </a>
  </div>

  <footer class="col-md-12 footer">
    <p>© 2018 sph</p>
  </footer>
  
</div>
    
</template>
<script>
export default {
    name: 'Life',
    data () {
    return {
      msg: 'Welcome to Your Life'
    }
  }
    
}
</script>
<style>
.life{
    padding-top: 50px;
    padding-bottom: 20px;
}
.life-file {
    background-color: rgba(255, 255, 255, 0.49);
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 4px 0px #ffffff;
    min-height: 100px;
    padding: 20px;
}
.life a {
    padding: 20px;
    color: #fff;
    display: block;
}
.footer{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    color:#bbb;
}

</style>