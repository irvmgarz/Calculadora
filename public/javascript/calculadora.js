
let funcionPredeterminada = () => {
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let valorPorHora = parseFloat(document.getElementById('valorPorHora').value);
    let interfaz = parseFloat(document.getElementById('interfazHoras').value);
    let Desarrollo = parseFloat(document.getElementById('DesarrolloHTML').value);
    let adicionales = parseFloat(document.getElementById('adicionales').value);
    let correcciones = parseFloat(document.getElementById('correcciones').value);
    let estCSS = parseFloat(document.getElementById('estiloCSS').value)
    let resultado = valorPorHora + interfaz + Desarrollo + adicionales + correcciones + estCSS;
    document.getElementById('valorTotal').value = resultado;
  });
};

funcionPredeterminada();