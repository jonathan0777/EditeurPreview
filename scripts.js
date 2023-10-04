// JavaScript pour le créateur de site web

// Sélectionnez les éléments du DOM
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const updateButton = document.getElementById("update-button");
const previewFrame = document.getElementById("preview-frame");

// Fonction pour mettre à jour la prévisualisation
function updatePreview() {
    const htmlCode = htmlEditor.value;
    const cssCode = "<style>" + cssEditor.value + "</style>";
    previewFrame.srcdoc = htmlCode + cssCode;
}

// Ajoutez un gestionnaire d'événement pour le bouton de mise à jour
updateButton.addEventListener("click", updatePreview);

// Mettez à jour la prévisualisation au chargement de la page
updatePreview();
