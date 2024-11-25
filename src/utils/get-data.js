// URLs de las hojas del Google Spreadsheet
const sheetUrls = {
    productos: "https://docs.google.com/spreadsheets/d/1PQifVMz3qOoPs4YNO21JhcG-W6X5YM_lh3HH4HeIwX4/gviz/tq?tqx=out:csv&sheet=PRODUCTOS",
    promociones: "https://docs.google.com/spreadsheets/d/1PQifVMz3qOoPs4YNO21JhcG-W6X5YM_lh3HH4HeIwX4/gviz/tq?tqx=out:csv&sheet=PROMOCIONES",
    eventos: "https://docs.google.com/spreadsheets/d/1PQifVMz3qOoPs4YNO21JhcG-W6X5YM_lh3HH4HeIwX4/gviz/tq?tqx=out:csv&sheet=EVENTOS",
    galeria: "https://docs.google.com/spreadsheets/d/1PQifVMz3qOoPs4YNO21JhcG-W6X5YM_lh3HH4HeIwX4/gviz/tq?tqx=out:csv&sheet=GALERIA",
};

// Función auxiliar para convertir CSV a JSON
async function fetchCsvAsJson(url) {
    const response = await fetch(url);
    const csvText = await response.text();
    const rows = csvText.split("\n").map(row => row.trim()).filter(row => row); // Limpieza básica
    return rows.slice(1).map(row => row.split(",")); // Filas sin cabeceras
}

// Obtener datos de las hojas y exportarlos como constantes
export const productos = await fetchCsvAsJson(sheetUrls.productos);
export const promociones = await fetchCsvAsJson(sheetUrls.promociones);
export const eventos = await fetchCsvAsJson(sheetUrls.eventos);
export const galeria = await fetchCsvAsJson(sheetUrls.galeria);