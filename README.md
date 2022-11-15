# Démonstration webapp Stimuli

Projet de démonstration de compétences sur React.JS

## Cahier des charges

Cette webapp comporte 3 pages :

1. Une page (root) / : 
    - où je peux me loger ou créer mon compte
2. Une fois connecté j’ai la possibilité de naviguer vers :
    - Une page /blabla (accessible si et seulement je suis loggé, page sur laquelle j’arrive par défaut après m’être loggé) :
      - Sur desktop, je vois une image (libre choix) qui prend 1/3 de l’écran, et un texte (au choix) sur l’autre partie de l’écran.
      - Sur mobile, je vois l’image sur toute la largeur et le texte en dessous.
      - Dans les 2 cas un footer toujours visible et fixe où j’ai un “switch” qui me permet de devenir premium.
      - Quand je suis premium, j’ai la possibilité de naviguer vers une page “premium” (décrite après). Libre de choisir le design qui convient pour la navigation sur desktop & mobile.
    - Une page /premium :
      - Je ne peux y accéder que si je suis premium
      - Un texte qui me félicite d’être membre (libre)


Pour la connexion/inscription, l’idée n’est pas de tout refaire mais d’utiliser un SAAS qui fait ca : https://auth0.com/ (qui est par ailleurs ce qu’on utilise chez stimuli). Une inscription par mail suffit.

## Hébergement

Ce projet sur Github est synchronisé et excécutable sur [codesandbox.io](https://codesandbox.io).


## API

- [Axios](https://axios-http.com/fr/docs/intro) : Client HTTP basé sur les promesses compatible avec node.js et les navigateurs.
- [Auth0](https://auth0.com) : Plate-forme d'authentification et d'autorisation adaptable facile à mettre en œuvre.
- [randomuser](https://randomuser.me/) : Générateur aléatoire de profils utilisateurs.


## Auteur

David BRUNET

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
