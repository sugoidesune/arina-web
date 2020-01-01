<template>
    <div class="col-6 mx-auto">
    <div class="row">
        <div class='instafeed col-12 col-md-4 p-0' v-for="(post, i) in posts.data" :key="i" >
        <a :href="post.link" target="_blank">
            <div v-onresize.init="heightIsWidth" class="rectangle" :alt="post.tags[0]">
                <img  class="post-image"
                :class="[ post.images.standard_resolution.width > post.images.standard_resolution.height ? 'landscape' : 'portrait']"
                :src="post.images.standard_resolution.url">
            </div>
        </a>

        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['posts'],
    data(){
        return{
            love: false
        }
    },
    directives: {
      onresize:{
            inserted(el, binding, vnode){
                console.log(vnode.context)
            vnode.context.$el.$onresizeListener = function onresizeEvent(event){binding.value(el,event)}
            window.addEventListener('resize', vnode.context.$el.$onresizeListener, true)
            if(binding.modifiers.init){
                binding.value(el)
            }
            },
            unbind(el, binding, vnode){
              window.removeEventListener('resize', vnode.context.$el.$onresizeListener, true)
            }
      },
    },
    methods:{
        heightIsWidth(el, test,more,wtf){
            //console.log(el, test,more,wtf)
            el.style.height = el.offsetWidth + 'px'; 
        }
    },
};
</script>

<style lang="scss">
.rectangle {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}
.landscape {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.portrait {
  max-width: 100%;
  height: auto;
}
</style>
