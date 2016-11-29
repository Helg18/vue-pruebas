new Vue({
  el: '#principal',

  data:{
    nombre:'',
    edad:'',
    email:''
  },
  methods:{
    borrarcampos: function() {
      this.nombre='';
      this.edad='';
      this.email='';
      return true;
    }
  },

  computed:{
    allinfo: function(){
      return this.nombre && this.edad && this.email;
    }
  }
});
