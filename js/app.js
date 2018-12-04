var Calculadora = {


  pantalla: document.getElementById("display").innerHTML,
  a: 0,
  b: 0,
  resultado: 0,
  operacion: 0,
  decimal: 0,
  digitos: 8,
  seleccion: 0,
  signo: 0,
  valida: 0,
  inicio: (
    function(){
      this.onClick();
    }
  ),

    onClick: function(){
    document.getElementById("0").addEventListener("click", function(){
      Calculadora.cifra("0")
    });
    document.getElementById("1").addEventListener("click", function(){
      Calculadora.cifra("1")
    });
    document.getElementById("2").addEventListener("click", function(){
      Calculadora.cifra("2")
    });
    document.getElementById("3").addEventListener("click", function(){
      Calculadora.cifra("3")
    });
    document.getElementById("4").addEventListener("click", function(){
      Calculadora.cifra("4")
    });
    document.getElementById("5").addEventListener("click", function(){
      Calculadora.cifra("5")
    });
    document.getElementById("6").addEventListener("click", function(){
      Calculadora.cifra("6")
    });
    document.getElementById("7").addEventListener("click", function(){
      Calculadora.cifra("7")
    });
    document.getElementById("8").addEventListener("click", function(){
      Calculadora.cifra("8")
    });
    document.getElementById("9").addEventListener("click", function(){
      Calculadora.cifra("9")
    });
    document.getElementById("mas").addEventListener("click", function(){
      Calculadora.mas()
    });
    document.getElementById("menos").addEventListener("click", function(){
      Calculadora.menos()
    });
    document.getElementById("por").addEventListener("click", function(){
      Calculadora.por()
    });
    document.getElementById("dividido").addEventListener("click", function(){
      Calculadora.dividido()
    });
    document.getElementById("on").addEventListener("click", function(){
      Calculadora.on("")
    });
    document.getElementById("igual").addEventListener("click", function(){
      Calculadora.igual()
    });
    document.getElementById("sign").addEventListener("click", function(){
      Calculadora.sign()
    });
    document.getElementById("punto").addEventListener("click", function(){
      Calculadora.punto()
    });
  },

    efectoteclado: function(tecla){
      document.getElementById(tecla).style.transform="scale(0.9)";
      setTimeout(function() {
      document.getElementById(tecla).style.transform="scale(1)";}, 250);
    },

    cifra: function(valor){
      this.efectoteclado(valor);
      if(this.signo == 1 && this.valida == 0){
        this.digitos += 1,
        this.valida = 1;
      }
      if(this.decimal == 1 && this.valida == 0){
        this.digitos += 1,
        this.valida = 1;
     }
     if(this.pantalla.length < this.digitos){
       if(this.pantalla != "0"){
        this.pantalla += valor;
     } else if(valor != 0) {
        this.pantalla = "",
        this.pantalla += valor;
     }
      this.pantdisplay();
     }
   },

   mas: function(){
        this.efectoteclado("mas");
        this.a += Number(this.pantalla),
        this.pantalla = "",
        this.seleccion = 1,
        this.operacion = 0,
        this.signo = 0,
        this.b = 0,
        this.operacion = 0,
        this.decimal = 0,
        this.pantdisplay();
    },

   menos: function(){
   this.efectoteclado("menos");
   this.a = Number(this.pantalla);
   this.pantalla = "",
   this.seleccion = 2,
   this.operacion = 0,
   this.signo = 0,
   this.b = 0,
   this.operacion = 0,
   this.decimal = 0,
   this.pantdisplay();
},

   por: function(){
      this.efectoteclado("por");
      this.a = Number(this.pantalla),
      this.pantalla = "",
      this.seleccion = 3,
      this.operacion = 0,
      this.signo = 0,
      this.b = 0,
      this.operacion = 0,
      this.decimal = 0,
      this.pantdisplay();
  },

   dividido: function(){
        this.efectoteclado("dividido");
        this.a = Number(this.pantalla),
        this.pantalla = "",
        this.seleccion = 4,
        this.operacion = 0,
        this.signo = 0,
        this.b = 0,
        this.operacion = 0,
        this.decimal = 0,
        this.pantdisplay();
    },

   igual: function(){
     this.efectoteclado("igual");
     switch(this.seleccion){
      case 1:
          if(this.operacion == 0){
            this.b = Number(this.pantalla),
            this.pantalla = this.a + Number(this.pantalla),
            this.operacion = 1,
            this.a = 0;
          }else{
            this.pantalla = Number(this.pantalla)+this.b;
          }
        break;
        case 2:
          if(this.operacion == 0){
            this.b = Number(this.pantalla),
            this.pantalla = this.a - Number(this.pantalla),
            this.operacion = 1,
            this.a = 0;
          }else{
            this.pantalla = Number(this.pantalla)-this.b;
          }
        break;
        case 3:
          if(this.operacion == 0){
            this.b = Number(this.pantalla),
            this.pantalla = this.a * Number(this.pantalla),
            this.operacion = 1,
            this.a = 0;
          }else{
            this.pantalla = Number(this.pantalla)*this.b;
          }
        break;
        case 4:
          if(this.operacion == 0){
            this.b = Number(this.pantalla),
            this.pantalla = this.a / Number(this.pantalla),
            this.operacion = 1,
            this.a = 0;
          }else{
            this.pantalla = Number(this.pantalla)/this.b;
          }
        break;
      default:
        break;
    }
    this.pantdisplay();
  },

   on: function(){
    this.efectoteclado("on");
    this.a = 0,
    this.b = 0,
    this.pantalla = "0",
    this.decimal = 0,
    this.signo = 0,
    this.valida = 0,
    this.digitos = 8,
    this.operacion = 0,
    this.seleccion = 0,
    this.resultado = 0,
    this.pantdisplay();
  },

   sign: function(){
    this.efectoteclado("sign");
    if(this.pantalla != 0){
      if(this.signo == 0){
        this.pantalla = "-" + this.pantalla,
        this.signo = 1;
      }else{
        this.pantalla = this.pantalla.slice(1);
        this.signo = 0;
      }
    }
    this.pantdisplay();
  },

   punto: function(){
      this.efectoteclado("punto");
      if(this.decimal == 0){
        this.pantalla += ".";
      }
      this.decimal = 1,
      this.pantdisplay();
    },

   pantdisplay: function(){
      if(this.pantalla.toString().length > this.digitos){
        this.pantalla = this.pantalla.toString().substring(0,8);
        }
        document.getElementById("display").innerHTML = this.pantalla;
      }
    }
    Calculadora.inicio();