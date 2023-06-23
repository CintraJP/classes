function classes(){
    class Carro{
        constructor(tpCarro,tpComb){
        this.tipo = tpCarro
        this.qtdeComb = 100
        this.ligado = false
        this.tipoComb = tpComb
        }
        info(){
            console.log(`Qtde Combus: ${this.qtdeComb}`)
            console.log(`Ligado: ${(this.ligado ? "sim" : "nao")}`)
            console.log(`tipo Combus: ${this.tipoComb}`)
            if(this.tipo==1){
                console.log("Tipo Carro: Passeio")
            }else if(this.tipo==2){
                console.log("Tipo Carro: Transporte")
            }else if(this.tipo==3){
                console.log("Tipo Carro: Combate")
            }
        }
        set setLigado(t){
            this.ligado = t
        }
        get getLigado(){
            return this.ligado
        }
        set setComb(v){
            if(v<0 || v>100){
                alert("Valor invalido")
            }else{
                this.qtdeComb = v
            }
        }
        get getComb(){
            return this.qtdeComb
        }
    }

    class CarroCombate extends Carro{
        constructor(potTiro){
            super(3,2)
            this.tiros = 1000
            this.potTiro = potTiro
            this.blindagem = 100
        }
        info(){
            super.info()
            console.log(`qtda tiros: ${this.tiros}`)
            console.log(`pot tiro: ${this.potTiro}`)
            console.log(`blindagem: ${this.blindagem}`)
        }

    }

    class CarroTrasporte extends Carro{
        constructor(){
            super(2,2)
        }
    }

    let c1 = new CarroCombate(100)
    let c2 = new CarroTransporte()

    c1.setLigado = true
    c1.info()
} 

function outrovideo(){
    class Person{
        constructor(name){
            this._name = name
        }
        set name(string){
            this._name = pedro
        }

        get name(){
            return this._name
        }

        _capitalize(string){
            
        }

        walk(){
            return (`${this._name} está andando`)
        }
    }

    class Developer extends Person{
        constructor(name, codeLanguage){
            super(name)
            this._codeLanguage = codeLanguage
        }

        code(){
            return (`${this._name} esta codando em ${this._codeLanguage}`)
        }
    }

    var person = new Person('Pedro')
    console.log(person.name)

    let brendan = new Developer('Brendan', 'JavaScript')
    console.log(brendan.code())

    let bert = new Developer('Bert', 'CSS')
    console.log(bert.code())
}
