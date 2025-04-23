const express =  require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/home/:name', (req, res) => {
  if (req.params.name == 'Ariel'){
    res.send("Mesmo nome de cadastro")
  } else{
    res.send("Cadastrado com sucesso")
  }
});


app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});

//Entendendo como o request e o require funciona, entendimento de rotas.
