# Projet de création d'un site e-commerce.

Nous sommes sur le repertoire front-end.

## Pour commencer.

Lancez une invite de commande Git et déplacez vous dans le répertoire souhaiter.
Exécutez un git clone du répertoire git en exécutant cette commande : 

```git clone https://github.com/Vahe69/e_commerce-app.git```

Une fois la commande terminer, déplacez vous dans le répertoire git.
Puis exécutez la commande suivante : 

```npm install```

## Pour lancer l'application

Par la suite, après que la commande soit terminer, vous devez lancer l'application react.
Pour ce faire, vous devez exécuter la commande :

```yarn start```
ou
```npm start```


Par la suite, une fenêtre internet va s'ouvrir ou rendez vous sur l'url suivante : [http://localhost:3000](http://localhost:3000). Vous allez pouvoir tester l'application.
Mais avant de la tester, vous devez lancer la partie back-end.
Suivez l'installation et le lancement de celle-ci sur [https://github.com/Vahe69/e-commerce-app-back](https://github.com/Vahe69/e-commerce-app-back).

## Explication de l'application

L'application est une application react qui est découper en partie. C'est-à-dire qu'elle a une Atomic design.
Et donc elle peut facilement être lu et comprise par tous.

Dans l'application, il y a plusieurs pages :

- Page d'accueil: "/"
    - Elle liste tous les produits de notre site et de plus, nous pouvons trouver un header, avec la possibilité de changer en fonction de la connexion de l'utilisateur, et un footer.
    - De plus, si l'utilisateur est connecter, il pourra commander les produits de notre site.

- Page de connexion: "/userConnect"
    - Elle est composé du header et d'un formulaire de connexion permettant à l'utilisateur de se connecter ou de s'enregistrer.

- Page d'enregistrement: "/newUser"
    - Elle est composé du header et d'un formulaire d'enregistrement permettant à l'utilisateur de s'enregistrer sur notre site.

- Page du compte: "/userCompte"
    - Elle est composé du header, du footer et la liste des informations de l'utilisateur avec les commandes qu'il a réaliser.
    - Cette page est accésible uniquement lorsque l'on est connecter.
    - Lorsque l'utilisateur n'est pas connecter, il sera rediriger vers la page d'erreur.

- Page d'erreur: "/404"
    - Elle est composé d'un message d'erreur qui nous imforme que l'application n'a pas trouver la page correspondant à l'url.
    - Donc si l'utilisateur essaye de chercher une page inexistante, il sera rediriger vers cette page.

Fait par : 
    - THOBOIS Antonin.
    - ODIN Anthony.