export function aleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}