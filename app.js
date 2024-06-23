require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/js', express.static(path.join(__dirname, 'js')));


app.use(express.static('public')); 

app.get('/', (req, res) => { 
  res.render('home');
});


app.post('/send-email', async (req, res) => {
  const { name, email } = req.body;

  let transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
  });

  // Opções de e-mail para o cliente
  let clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Ordem enviada',
      text: `Olá ${name},\n\nObrigado por escolher nossos salgados. Em breve retornaremos o seu contato.\n\nAtenciosamente,\nPatricia`
  };

  // Opções de e-mail para você
  let adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Ou outro endereço de e-mail
      subject: 'Novo feedback/contato recebido',
      text: `Você recebeu um novo pedido.\n\nNome: ${name}\nEmail: ${email}\n\nPor favor, verifique e responda adequadamente.`
  };

  try {
      // Enviar e-mail para o cliente
      await transporter.sendMail(clientMailOptions);
      
      // Enviar e-mail para o administrador
      await transporter.sendMail(adminMailOptions);

      res.status(200).send('Email enviado com sucesso.');
  } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).send('Erro ao enviar e-mail.');
  }
});


const port = process.env.PORT || 3052
app.listen(port, (error) => {
  if (error) {
    this.error(error);
  }
  console.log(`server running at port: http://localhost:${port}`);
});
