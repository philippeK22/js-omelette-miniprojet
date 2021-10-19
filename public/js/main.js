class Personne {
    constructor(nom, lieu, argent) {

        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];

        
    }
    
    ajouter (epicerie){
        this.mainDroite.push(epicerie);
    }
    

    seDeplacer(a, b) {
        b.personne.push(this.nom);
        //epicerie vaut b
        a.personne.pop();


    }
    payerArticle(article) {
        this.article = article;
        this.argent = this.argent - article.prix;


    };
    couper(ingredients, outils) {
        this.ingredients = ingredients;
        this.outils = outils;
      




    }
}
let philippe = new Personne("philippe","maison",100);
let jo = new Personne("john","épicerie");




class Lieu {
    constructor(nom, personnes) {

        this.nom = nom;
        this.personnes = [];

    }
}
let maison = {
    nom: "maison",
    personne: [],
}
let epicerie = {
    nom: "épicerie",
    personne: [],
    panniers : [{
        type:"pannier",
        contenu:[],
    }]
}
let johny = new Lieu();



class Outils {
    constructor(nom, action, ) {
        this.nom = "couteaux";
        this.action = "coupé";

    }
}


class Ingredients {
    constructor(nom, etats, prix) {
        this.nom = nom;
        this.etats = ["entier", "coupé", "moulu"];
        this.prix = prix;

    }
}
let oignon = new Ingredients("oignon", "entier", 6);
let oeuf = new Ingredients("oeuf", "coupé", 3);
let épice = new Ingredients("épice", "molu", 5);
let fromage = nex = new Ingredients("fromage", "entier", 2);
console.log(oignon, oeuf, épice, fromage);

let tab = [oignon,oeuf,épice,fromage];

tab.forEach(element => {
    console.log("je prends 1 " + element.nom);
    
});


class Epicerie extends Lieu {
    constructor(nom, paniers) {
        
        
        super(nom)
        this.paniers = [{
            nom: "panier1",
            contenu: [],
        }, {
            nom: "panier2",
            contenu: [],
        }];
    };
}
let phil = new Lieu("phil",[])

let poele= {
     
 contenu:[],
    
    cuir(vite) {
        this.contenu[0] = vite;
      setTimeout(() => {
          console.log(`votre omelette est ${poele.contenu}`);
          
      }, 4000);

    }
   
   
}


poele.cuir('cuite');
console.log(poele);

class Bol {
    constructor(nom,action,contenu) {
        
      
        this.nom = nom;
        this.action = action;
        this.contenu =contenu


    }
    melanger() {

       this.melanger =(nomMelange)=>{
           
        bol.contenu.forEach(el => {
            if (el.etat == "entier") {
                phil.couper(el);
                console.log(`${el.nom} a été découper`);
            } 
            else{
                console.log('il ne coupe pas l\'élements');
            }                                             // condition pour couper
        });
        console.log(bol.contenu);
           let newMelange = new Ingredients(nomMelange,"pas cuit",15);
           console.log("apres avoir bien mangé j'ai :"+ newMelange.nom + ""+ newMelange.etats);
           return newMelange;

       }
       

    }

    
    }
let bol = new Bol("phil","prendre",[]);
// omelette//
philippe.seDeplacer(maison,epicerie);
console.log(`${maison.personne} est actuellement à la maison`);
console.log(`${epicerie.personne} est actuellement à l'épicerie`);
console.log(`${philippe.nom} est actuellement à la ${philippe.lieu}`);
console.log(`${philippe.nom} se déplace de la ${philippe.lieu} à l'${jo.lieu}`);

philippe.mainDroite.push(epicerie.panniers);
console.log(philippe.mainDroite);
epicerie.panniers.shift();
console.log(epicerie.panniers);
console.log(`${philippe.nom} à pris un type ${epicerie.panniers}`);
console.log(philippe.mainDroite);
console.log(tab);

philippe.mainDroite[0].contenu.forEach(el => {
    console.log(`${philippe.nom} achète ${el.nom} pour ${el.prix} en euro`);
    philippe.payerArticle(el);
    
});

console.log(`solde de votre compte : ${philippe.argent}$`);

philippe.mainDroite[0].contenu = [];
console.log(philippe.mainDroite[0].contenu);

philippe.seDeplacer(maison,epicerie);          //bouge à l'épicerie
console.log(`${philippe.nom} est partie à l'${epicerie.nom} deposer le paniers`);
console.log(`${philippe.nom} dépose le panier`);

philippe.seDeplacer(maison,epicerie);           //bouge à la maison
console.log(`${philippe.nom} est actuellement à la ${maison.nom}`);
console.log('mon omelette avance à grand pas');   // afficher un message

bol.melanger("omelette");
console.log(bol);     //afficher melange


bol.contenu.splice(0,1);
bol.contenu.push("pas cuite");
console.log(bol.contenu);
console.log('jai vider le bol');














