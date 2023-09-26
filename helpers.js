function getWindowsSize() {
    const ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    return [ancho, alto];
}