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


    payerArticle(article) {
        this.argent = this.argent - article.prix;
        console.log(`${philippe.nom} a payé ${article.prix}€ pour acheter ${article.nom}`);

    
    }

    couper=(ingredient,outil)=>{
        if (ingredient.etat == "entier") {
            outil.action(ingredient)
        }
        
        
        

    }
}
     



//instances de la classe de personne 
let philippe = new Personne("philippe","maison", 150,[],[]);

       
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

let maison = {
    nom: "maison",
    personne: ["philippe"],
}
maison = new Lieu("maison", []);
let epicerie = new Epicerie("epicerie", [],[
    {nom : "pannier pris",contenu : []},
    { nom: "Panier restant", contenu: [] },
]);
// console.log(epicerie);



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

        
    }
    cuir =()=>{
        setTimeout(() => {
            bole.contenu.etat =="cuite"
            return console.log("omelette est cuit");
            
        }, 4000);
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
console.log(`${philippe.nom} est actuellement à la ${maison.nom}`);

console.log(`${philippe.nom} se déplace de la ${maison.nom} à l'${epicerie.nom}`);
console.log(epicerie.paniers[0]);

philippe.mainDroite.push(epicerie.paniers[0]);
console.log(philippe.mainDroite);

console.log("**********************************************");

epicerie.paniers.shift();
console.log(epicerie.paniers);

console.log(`${philippe.nom} à pris un type ${epicerie.paniers[0]}`);

console.log(philippe.mainDroite);
console.log(tab);
console.log("********************************");

tab.forEach(element => {
    console.log(`${philippe.nom} achète un ${element.nom} pour ${element.prix}  euro`);
    philippe.payerArticle(element);

});

tab.forEach(element => {
    philippe.mainDroite[0].contenu.push(element);
    console.log(`${philippe.nom} a pris un ${element.nom}`);
    
});
philippe.mainDroite.push(epicerie.paniers[0]);
epicerie.paniers.splice(epicerie.paniers.indexOf(philippe.mainDroite[0]),1);

console.log("Dans ma main droite mon panier remplis: " , philippe.mainDroite);
console.log("Mon argent avant de payer " , philippe.argent,"euro");

for (let index = 0; index < philippe.mainDroite[0].contenu.length; index++) {
   const element = philippe.mainDroite[0].contenu[index];
    philippe.payerArticle(philippe.argent)
    console.log(`${philippe.nom} paye pour une somme de ${element.prix} euros`);
    
}

philippe.mainDroite[0].contenu.forEach(element => {
    philippe.payerArticle(element);
    console.log(`${philippe.nom} achete un ${element.nom} au pris: de ${element.prix} euros`);
    
});


console.log(`le solde de votre compte : ${philippe.argent}`);

philippe.changeLieuParDefaut(epicerie.getNom());
console.log(`${philippe.nom} rentre à la ${maison.nom} pour cuisiner`);


philippe.mainDroite[0].contenu = [];
console.log(philippe.mainDroite[0].contenu);

philippe.mainDroite.forEach(element => {
    bole.contenu.push(element)
    console.log(`${element.nom} a été ajouté dans le bol`);
   
});
console.log(philippe.mainDroite[0].contenu);

philippe.changeLieuParDefaut(epicerie.getNom());
console.log(`${philippe.nom} est partie à l'${epicerie.nom} deposer le paniers`);
console.log(`${philippe.nom} dépose le panier`);

philippe.mainDroite.pop();
philippe.mainDroite.pop();
console.log(philippe.mainDroite);

philippe.changeLieuParDefaut(epicerie.getNom());
console.log(`${maison.personne} est actuellemet à ${maison.nom}`);

console.log('dur le project quand meme');
bole.melanger('omelette');
console.log(`on a fini de mélanger`);


console.log("on verse le bol dans la poêle");
poele.contenu.push(bole.contenu[0]);
console.log("le bol est vide");

console.log("Suivit de mon melange : " ,bole.melanger('omelette'));
poele.contenu.push(bole.contenu);
console.log(bole);
poele.cuir();




















