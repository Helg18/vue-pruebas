new Vue({
  el: '#principal',

  data:{
    name:'',
    edad:'',
    email:''
  },

  computed:{
    allinfo: function(){
      return this.name && this.edad && this.email;
    }
  }
});
