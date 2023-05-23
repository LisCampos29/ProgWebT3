function crearFormulario(arrCadenas) {
    const formulario = document.getElementById('formulario');
    
    arrCadenas.forEach((cadena) => {
      const div = document.createElement('div');
      
      const label = document.createElement('label');
      label.textContent = cadena + ':';
      div.appendChild(label);
      
      const input = document.createElement('input');
      input.type = 'text';
      input.name = cadena.toLowerCase();
      div.appendChild(input);
      
      formulario.appendChild(div);
    });
  }