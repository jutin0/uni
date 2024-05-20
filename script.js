function calcularUniformidad() {
    const pesosInput = document.getElementById('pesos').value;
    const pesoPromedioDeseado = parseFloat(document.getElementById('pesoPromedioDeseado').value);
    const pesos = pesosInput.split(',').map(peso => parseFloat(peso.trim()));
    
    if (pesos.some(isNaN) || isNaN(pesoPromedioDeseado)) {
        alert('Por favor, introduce solo números válidos.');
        return;
    }

    const pesoPromedio = pesos.reduce((acc, peso) => acc + peso, 0) / pesos.length;
    const rangoMin = pesoPromedio * 0.9;
    const rangoMax = pesoPromedio * 1.1;
    const uniformes = pesos.filter(peso => peso >= rangoMin && peso <= rangoMax);
    const porcentajeUniformidad = (uniformes.length / pesos.length) * 100;
    
    const pesoTotalDeseado = pesoPromedioDeseado * pesos.length;
    const pesoTotalReal = pesos.reduce((acc, peso) => acc + peso, 0);
    const diferenciaTotal = pesoTotalReal - pesoTotalDeseado;
    
    document.getElementById('pesoPromedio').textContent = `Peso Promedio: ${pesoPromedio.toFixed(2)} kg`;
    document.getElementById('rangoUniformidad').textContent = `Rango de Uniformidad: ${rangoMin.toFixed(2)} kg - ${rangoMax.toFixed(2)} kg`;
    document.getElementById('porcentajeUniformidad').textContent = `Porcentaje de Uniformidad: ${porcentajeUniformidad.toFixed(2)}%`;
    document.getElementById('diferenciaTotal').textContent = `Diferencia Total: ${(diferenciaTotal < 0 ? 'Falta' : 'Exceso')}: ${Math.abs(diferenciaTotal.toFixed(2))} kg`;
}
