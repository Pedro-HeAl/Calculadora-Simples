function botao(num) {
    let saved = document.calc.visor_calc.value
    document.calc.visor_calc.value = saved + num ;
}
function reset() {
    document.getElementById('visor_calc').value= '';
}
function igual() {
    let result = 0;
    result = document.getElementById('visor_calc').value;
    document.getElementById('visor_calc').value = '';
    document.getElementById('visor_calc').value = eval(result)
}
