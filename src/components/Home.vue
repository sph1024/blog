<template>
<div class="index-bg">
    <div class="col-md-12">
        <div class="col-md-12 title">
            <h1>Thinking</h1>
        </div>
        <div class="col-md-12 category_wrap">
            <ul class="nav">
                 <li>
                    <div class="nav-label" style="background-color: rgba(34, 34, 34, 0.89);">
                        <router-link to="/tech">Tech</router-link>
                    </div>                   
                </li>
                 <li>
                     <div class="nav-label" style="background-color: rgba(102, 255, 255, 0.79);">
                         <router-link to="/think">Think</router-link>
                     </div>               
                </li> 
                <li>
                    <div class="nav-label" style="background-color: rgba(102, 204, 102, 0.8);">
                         <router-link to="/life">Life</router-link>
                    </div>                 
                </li> 
            </ul>
        </div>

        <div class="col-md-12 index_pic">
            <div class="avatar-wrap">
                <img class="img-rounded" src="../assets/me.png">
            </div>

        </div>

    </div>   
</div>

</template>
<script>
export default {
    name: 'Home',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }    
}
</script>
<style>
.index-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: url(../assets/qhh.png) no-repeat;
    background-size: cover;
    background-position: 50%;
}
.title{
    padding-top: 50px;
    padding-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #333;
}
.category_wrap {
    padding-top: 20px;
    min-height: 200px;
}
.nav{
    display: inline-block;   
}
.nav li{
    display: inline-block;
    height: 160px;
    width: 160px;
    vertical-align: middle;
}
.nav-label{
    height: 130px;
    width: 130px;
    border-radius: 50%;
    text-align: center;
    box-shadow: inset 0px 0px 50px 10px rgba(255,255,255,0.67);
}
/* .nav-label a:hover{
    color: #FF9900;
    font-size: 30px;
} */
.nav li:focus a, .nav li:hover a {
    color: #FF9900;
    font-size: 30px;
    transition: all .3s ease;
}
.nav li a {
    line-height: 130px;
    color: #fff;
    padding: 0px;
    font-size: 25px;
    text-decoration: none;
    position: relative;
    transform: translate3d(0, -50%, 0);
}

.nav-label:hover, .nav-label:focus {
    height: 135px;
    width: 135px;
    transition: all .3s ease;
}
.index_pic img {
    width: 250px;
    display: block;
}
.avatar-wrap {
    width: 250px;
    height: 250px;
    margin: 10px auto 0px;
    border-radius: 50%;
    border: 2px solid #ccc;
    overflow: hidden;
}
.img-rounded {
    border-radius: 6px;
}

</style>


