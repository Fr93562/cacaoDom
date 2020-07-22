"use strict";

/**
 * Gère les modifications du DOM
 * 
 * @author : Fr93562
 * @version : 0?1
 * @status : en développement
 */
class CacaoDom {

    warning = {
        id : "The first parameter must be a string.",
        content : "The second parmaeter must be a string."
    }

    constructor() {}

    /**
     * Ajoute des éléments au DOM 
     * 
     * @param {*} id string - id de la classe à manipuler
     * @param {*} content string - contenu html à rajouter
     */
    render(id, content) {

        if(typeof id !== "string") { this.error(this.warning.id); }
        if(typeof content !== "string") { this.error(this.warning.id); }

        let element = document.getElementById(id);
        element.insertAdjacentHTML("beforeEnd", content);
    }

    /**
     * Supprime des éléments du DOM
     * 
     * @param {*} id string - id de la classe à manipuler
     */
    clear(id) {

        if(typeof id !== "string") { this.error(this.warning.id); }

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

    /**
     * Lance une exception
     * @param {*} content string - message de l'erreur
     */
    error(content) {

        throw content;
    }
}

export default new CacaoDom();