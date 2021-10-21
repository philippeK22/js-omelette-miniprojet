// classe personne
class Personne {
    constructor(nom, lieu, argent) {

        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];


    }
    lieuParDefaut(){
        return this.lieu
    }
    changeLieuParDefaut(newLieu){
        this.lieu = newLieu;
        
    }

    ajouter(epicerie) {
        this.mainDroite.push(epicerie);
    }


    // seDeplacer(a, b) {
      
    //     // verifie si la personne est dans la maison si oui fait lui splice dedans avec une condition
    //     b.personne.push(this);
    //     a.personne.splice(a.personne.indexOf(this, 1));
    //     //epicerie vaut b
    // }

    payerArticle(a) {
        return this.argent -= a;
     


    };
    couper=(a)=>{
        if (a.etat == "entier") {
            return `j'utilise ${outils.nom} pour ${couper.action} ${a.nom}`
        }
        
        
        

    }
}

//instances de la classe de personne 
let philippe = new Personne("philippe","maison", 100,[],[]);

       
// -------------------------------------------------------------------------------------------

class Lieu {
    constructor(nom) {

        this.nom = nom;
        this.personnes = [];

    }
    getNom(){
        return this.nom;
    }

}

// ------------------------------------------------------------------------------------------



let maison = {
    nom: "maison",
    personne: ["philippe"],
}

maison = new Lieu("maison", []);


class Epicerie extends Lieu {
    constructor(nom) {
        super(nom)
        this.paniers = [{
            nom: "panier pris",
            contenu: ["oignon"],
        }, {
            nom: "panier restant",
            contenu: [],
        }];
        
    };
}
let epicerie = new Epicerie("maison", []);
console.log(epicerie);



class Outils {
    constructor(nom,action) {
        this.nom = nom;
        this.action = action;

    }
}
let outils = new Outils("couteaux","coupér");

class Ingredients {
    constructor(nom, etats, prix) {
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;

    }
}
let jo = new Ingredients("fromage","coupé",5);

let oignon = new Ingredients("oignon", "entier", 6);
let oeuf = new Ingredients("oeuf", "coupé", 3);
let épice = new Ingredients("épice", "molu", 5);
let fromage = nex = new Ingredients("fromage", "entier", 2);
console.log(oignon, oeuf, épice, fromage);

let tab = [oignon, oeuf, épice, fromage];





class Poele {
    constructor(contenu){
        this.contenu = contenu;

        this.cuir =(bole)=>{
            setTimeout(() => {
                bole.contenue.etat =="cuite"
                return console.console.log("omelette est cuit");
                
            }, 4000);
        }

    }
}

 let poele = new Poele([]);

class Bol {
    constructor(contenu) {


       
        this.contenu = contenu

        this.melanger =(nomMelanger)=>{
            
            let omelette ={
                nom: nomMelanger,
                etat: "pas cuit",
            }
            this.contenu = omelette;
            return `${omelette.nom} n'est pas cuite`

        }


    }
}
let bole = new Bol([]);
// -------------------------------------------------------------------------------

                          // Début omelette





philippe.changeLieuParDefaut(epicerie.getNom());
console.log();
console.log(`${philippe.nom} est actuellement à la ${philippe.lieu}`);
console.log(`${philippe.nom} se déplace de la ${philippe.lieu} à l'${jo.lieu}`);
console.log(epicerie.paniers[0]);
philippe.mainDroite.push(epicerie.paniers[0]);
console.log(philippe.mainDroite);
epicerie.paniers.shift();
console.log(epicerie.paniers);
console.log(`${philippe.nom} à pris un type ${epicerie.paniers}`);
console.log(philippe.mainDroite);
console.log(tab);

philippe.mainDroite[0].contenu.forEach(element => {
    console.log(`${philippe.nom} achète un ${jo.nom} pour ${jo.prix}  euro`);
    philippe.payerArticle(element);

});
tab.forEach(element => {
    console.log("je prends 1 " + element.nom);
    

});
console.log("Dans ma main droite mon panier remplis: " , philippe.mainDroite)
console.log("Mon argent avant de payer   " , philippe.argent)
for (let index = 0; index < philippe.mainDroite[0].contenu.length; index++) {
    const element = philippe.mainDroite[0].contenu[index];
    philippe.payerArticle(philippe.prix)
    console.log(`${philippe.nom} pour une somme de ${jo.prix} euros `)
}


console.log(`solde de votre compte : ${philippe.argent}`);

philippe.mainDroite[0].contenu = [];
console.log(philippe.mainDroite[0].contenu);

// philippe.seDeplacer(maison, epicerie); //bouge à l'épicerie
console.log(`${philippe.nom} est partie à l'${epicerie.nom} deposer le paniers`);
console.log(`${philippe.nom} dépose le panier`);

// philippe.seDeplacer(maison, epicerie); //bouge à la maison
console.log(`${philippe.nom} est actuellement à la ${maison.nom}`);
console.log('mon omelette avance à grand pas'); // afficher un message

let contenu_panier = philippe.mainDroite[0].contenu
let ingredients_oeufs = philippe.mainDroite[0].contenu

ingredients_oeufs.forEach(element => {
    bole.contenu.push(element)
    console.table(element , "ajouté a mon bol")
});
console.log(philippe.mainDroite);
console.log("Coupe des aliments :" , philippe.couper(fromage.nom , outils.nom,));
// console.log(philippe.couper(bole.contenu[0]))

for (let index = 0; index < bole.contenu.length; index++) {
    const melange = bole.contenu[index].nom;
    console.log("Je rajoute a mon melange : " ,melange )
}




console.log("Suivit de mon melange   : " ,bole.melanger('omelette'))
poele.contenu.push(bole.contenu)
console.log(bole);
poele.cuir();

















