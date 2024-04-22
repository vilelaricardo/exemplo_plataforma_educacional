document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container form');
  
    form.addEventListener('submit', handleFormSubmit);
  });
  
  async function handleFormSubmit(event) {
    event.preventDefault();
  
    const formData = {
      email: document.getElementById('inputEmail').value,
      password: document.getElementById('inputPassword').value
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        form.reset();
      } else {
        throw new Error('Erro ao cadastrar. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      //alert('Erro ao enviar os dados. Por favor, tente novamente.');
    }
  }
  