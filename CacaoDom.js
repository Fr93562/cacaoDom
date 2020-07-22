"use strict";

/**
 * Gère les modifications du DOM
 * 
 * @author : Fr93562
 * @version : 0?1
 * @status : en développement
 */
class CacaoDom {

    constructor() {}

    /**
     * Ajoute des éléments au DOM 
     * 
     * @param {*} id string - id de la classe à manipuler
     * @param {*} content string - contenu html à rajouter
     */
    render(id, content) {

        let element = document.getElementById(id);
        element.insertAdjacentHTML("beforeEnd", content);
    }

    /**
     * Supprime des éléments du DOM
     * 
     * @param {*} id string - id de la classe à manipuler
     */
    clear(id) {

        let element = document.getElementById(id);
        element.innerHTML = "";
    }

    /**
     * Mets à jour un élément du DOM 
     * Consiste à enchainer les méthodes clear et render sur l'élément ciblé
     * 
     * @param {*} id string - id de la classe à manipuler
     * @param {*} content string - contenu html à rajouter
     */
    update(id, content) {

        this.clear(id);
        this.render(id, content);
    }
}

export default new CacaoDom();