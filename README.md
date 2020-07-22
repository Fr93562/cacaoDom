[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5a12a718a5784576a3a89600ddcc4f9a)](https://www.codacy.com/manual/Fr93562/cacaoDom?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Fr93562/cacaoDom&amp;utm_campaign=Badge_Grade)
![coverage](https://img.shields.io/badge/coverage-100-green)
![dependance](https://img.shields.io/badge/dependance-0-green)

# CacaoDom

![image](./assets/CacaoDom.jpg)


* Equipe projet: François Mackowski
* Date: 22/07/2020
* Version: 0.1
* Etat du projet: En cours


-----------------

## Contexte et utilité

Cette librairie appartient au framework CacaoJs. Il s'agit d'une librairie front-end basé sur du javascript natif.


![logoCacaoJs](./assets/CacaoLogo.png)


CacaoDom est la librairie qui gère les modifications du DOM. Comme les autres librairies de CacaoJs, elle se veut simple et légère à utiliser.

## Intéragir avec le DOM

Pour utiliser la librairie, il suffit d'importer le fichier CacaoDom.js comme ci-dessous:

```javascript
import CacaoDom from '../libary/CacaoDom';
```

*Note : CacaoEngine est une classe javascript. Dès son import, elle est déjà instanciée et peut être immédiatement utilisée.*

### Ajouter des éléments au DOM

Il faut faire appel à la méthode render().

```javascript
CacaoDom.render("app", `<p>Hello World!</p>`);
```

Cette méthode requiert plusieurs paramètres:

```
paramètre 1 : string - corresponds à l'id de l'élément javascript
paramètre 2 : string - corresponds aux éléments html à ajouter
```

Cette méthode accepte le literal template. Donc on peut très bien écrire:

```javascript
CacaoDom.render("app", `<p> ${ votre variable }/p>`);
```

### Supprimer des ééments du DOM

Il ne s'agit pas d'une réelle suppression mais plus d'une réinitalisation des valeurs contenus dans un des noeuds du DOM. Elle est principalement utilisé en combinaison avec le router au moment d'afficher un nouveau contenu.

```javascript
CacaoDom.clear("app");
```

Cette méthode requiert un seul paramètre:

```
paramètre 1 : string - corresponds à l'id de l'élément javascript
```

### Mettre à jour un élément du DOM

Cette fonctionnalité combine à la fois la réinitalisation et l'ajout de données dans l'élément ciblé du DOM.

```javascript
CacaoDom.update("app", `<p>Hello my new World!</p>`);
```
Cette méthode requiert plusieurs paramètres:

```
paramètre 1 : string - corresponds à l'id de l'élément javascript
paramètre 2 : string - corresponds aux éléments html à ajouter
```

Cette méthode accepte le literal template. Donc on peut très bien écrire:

```javascript
CacaoDom.update("app", `<p> ${ votre nouvelle variable }/p>`);
```

## Tests

## Features à venir
