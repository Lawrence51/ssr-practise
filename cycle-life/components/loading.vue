<template>
    <div class="spinner" v-if="loading"></div>
</template>
<script>
export default {
    data:()=>({
        loading:false
    }),
    methods:{
        start(){ // 方法名是约定好的不能修改
            this.loading = true;
        },
        finish(){
            this.loading = false;
        },
    }
}
</script>
<style scoped>
.spinner {
  width: 60px;
  height: 60px;
  background-color: #399;
 
  position: fixed;
  left:50%;top:50%;
  margin-left:-30px;
  margin-top:-30px;
  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}
 
@-webkit-keyframes rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}
 
@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>