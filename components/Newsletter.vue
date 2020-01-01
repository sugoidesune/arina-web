<template>
    <section id="newsletter" class="not-a-newsletter">
        <h5>Get updates on Arinas upcoming shows.</h5>
    <p class="subtitle"></p>
    <div id="mc_embed_signup">
    <form id="mc-form" @submit.prevent="checkForm" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
    <div class="form-fields" v-bind:class="{'d-none': showThanks}">
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email" v-model="email" v-on:blur="on_blur_email" v-on:input="on_input_email">
    <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" v-on:blur="on_blur_submit">Subscribe</button>
    </div>
    <p v-bind:class="{'d-none': !showEmailError}" class="error-message">This email wont work... try another.</p>
    <p v-bind:class="{'d-none': !showThanks}" class="error-message thanks">Thanks!</p>
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_82a0da59cf1ac113499102ef9_4962eb0da5" tabindex="-1" value="" v-model="bottrap"></div>

        </div>
    </form>
    </div>
    </section>
</template>


<script>
export default {
      data(){return{
    email:'',
    bottrap: '',
    showEmailError: false,
    showThanks: false,
  }},
      methods :{
    on_blur_submit(){
      //this.showThanks = false;
    },
    on_blur_email(){
      if(this.validEmail(this.email)){
      } else {
        this.showEmailError = true
      }
    },
    on_input_email(){
      this.showEmailError = false
    },
    checkForm(event){
      event.preventDefault();
      if(this.validEmail(this.email)){
        var data = new FormData()
        data.append('EMAIL', this.email)
        data.append('b_82a0da59cf1ac113499102ef9_4962eb0da5', this.bottrap)
        console.log(this.bottrap, 'BOTTRAP')
        var params = new URLSearchParams(data).toString()
        console.log('jsonpeeing all overthis')
        var url = ("https://gmail.us4.list-manage.com/subscribe/post?u=82a0da59cf1ac113499102ef9&amp;id=4962eb0da5&c=callbackMC&"+params).replace('/post?u=', '/post-json?u=');

        fetch(url, {"method": "POST",
        "mode": "no-cors",
        "data": JSON.stringify(data)
        })
        .then(res=>res).then(text=>text.text().then(txt=>{
          this.showThanks = true
          this.email = ''
          }))
      } else {
        this.showEmailError = true
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style lang="scss">

section.not-a-newsletter {
  margin-left: auto;
  margin-right: auto;
  p.subtitle{
    text-align: center;
    margin-top: -10px;
  }
    label {
      display: block;
      margin: 0;
    }
  .form-fields {
    width: 325px;
    margin: auto;
    display: flex;
    padding-bottom: 24px;
    input.email {
      flex-grow: 1;
      border: 0;
      border-radius: 5px 0px 0px 5px;
      padding: 5px;
      padding-left:  10px;
      &::placeholder {
      color: $base;
      }
    }
    .button {
      flex-grow: 1;
      border: 0;
      border-radius: 0px 5px 5px 0;
      background: white;
      border-left: 1px solid $base;
      color: $base;
      padding: 5px 10px;
        @extend %text-hover;
        &:hover {
          background: $base;
          box-shadow: inset 0 0 0 1px $high;
          border: 0;
        }
    }
  }
  .thanks {
    text-align: center;
    padding: 27px;
    font-size: 20px;
  }
    .error-message {
      margin-top: -24px;
    }
}

</style>