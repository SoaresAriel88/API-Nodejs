const express =  require('express');
const app = express();
const path = require('path')


//Definindo template ejs
app.set('view engine', 'ejs')


// Definindo os arquivos estáticos
//const staticFolder = path.join(__dirname, 'view')
//const expressStatic = express.static(staticFolder)
//app.use(expressStatic)


//Definindo os arquivos públicos
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)




//Rotas
app.get('/', (req, res) => {
  res.render('index'
    [{
      title: 'Lider de Projetos Tech'
    }]
  );
});
app.get('/posts', (req, res) => {
  res.render('posts');
});

app.use(function (req, res){
  res.send("Página não encontrada")
})




//Executando
app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
