/// reference path="typings/index.d.ts"
// On Click listeners

document.getElementById("logoGTI").addEventListener('click', function () {
    reloadPage();
})



var mapa = L.map('contenedorMapa').setView([51.505, -0.09], 13);

L.esri.basemapLayer('Topographic').addTo(mapa);


var Spain_Catastro = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
    layers: 'catastro',
    format: 'image/png',
    transparent: false,
    continuousWorld: true,
    attribution: ' <a href="http://www.catastro.meh.es/" target="_blank">DirecciÃ³n General del Catastro</a>'
});

function reloadPage() {
    window.location.reload();
}