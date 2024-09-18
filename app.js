require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASMX986dOJS4oV7-MUIU2Y3Q3F5CY7Ftk",
  authDomain: "salgados-paty.firebaseapp.com",
  projectId: "salgados-paty",
  storageBucket: "salgados-paty.appspot.com",
  messagingSenderId: "510459379412",
  appId: "1:510459379412:web:b679b7575bd1ea2acf8541",
  measurementId: "G-2VV7GRHXBH"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1);


const items = [
  {
    name: "Coxinha",
    image: "coxinha.jpg",
    descricao: "Massa fresca com frango desfiado, servido frito ou congelado.",
  },
  {
    name: "Bolinha-de-Queijo",
    image: "bolinha-de-queijo.jpg",
    descricao:
      "Massa fresca com recheio de queijo, servido frito ou congelado.",
  },
  {
    name: "Maravilha",
    image: "maravilha.jpg",
    descricao:
      "Massa fresca com presunto e queijo, servido frito ou congelado.",
  },
  {
    name: "Kibe",
    image: "kibe.jpg",
    descricao:
      "Massa fresca com recheio de queijo, servido frito ou congelado.",
  },
  {
    name: "Croquete",
    image: "croquete.jpg",
    descricao: "Massa fresca com recheio de carne, servido frito ou congelado.",
  },
  {
    name: "Empada",
    image: "empada.jpg",
    descricao: "Massa fresca com recheio, servido frito ou congelado.",
  },
  {
    name: "Esfira",
    image: "esfira.jpg",
    descricao: "Massa fresca com frango desfiado, servido frito ou congelado.",
  },
  {
    name: "Risole",
    image: "risole.jpg",
    descricao: "Massa fresca com recheio de carne, servido frito ou congelado.",
  },
  {
    name: "Pao-de-queijo",
    image: "pao-de-queijo.jpg",
    descricao: "Massa de povilio azedo e doce, servido frito ou congelado.",
  },
];

const basket = [];

app.get("/", (req, res) => {
  res
    .status(200)
    .render("home", { title: "Paty Salgado home page", items: items });
});

app.get("/inputs", (req, res) => {
  const itemName = req.query.itemName;
  const item = items.find((i) => i.name === itemName);

  if (item) {
    res.status(200).render("inputs", {
      title: "inputs",
      itemName: item.name,
      itemImage: item.image,
      itemDescricao: item.descricao,
      errorMessage: "",
    });
  } else {
    res.status(404).render("404", { title: "Page Not Found" });
  }
});

app.post("/add-to-basket", (req, res) => {
  const {
    itemName,
    itemImage,
    itemDescricao,
    tipo,
    tamanho,
    quantidade,
    entrega,
    total
  } = req.body;
  if (tipo && tamanho && quantidade && entrega) {
    const item = {
      name: itemName,
      image: itemImage,
      descricao: itemDescricao,
      tipo: tipo,
      tamanho: tamanho,
      quantidade: quantidade,
      entrega: entrega,
      total: total
    };
    basket.push(item);
    res.redirect("/basket");
  } else {
    const item = items.find((i) => i.name === itemName);
    res.status(200).render("inputs", {
      title: "inputs",
      itemName: item.name,
      itemImage: item.image,
      itemDescricao: item.descricao,
      errorMessage: "Por favor, preencha todos os dados",
    });
  }
});


app.delete("/delete-item/:index", (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < basket.length) {
    basket.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.get("/basket", (req, res) => {
  res.status(200).render("basKet", { title: "Basket", basket: basket });
});

app.use((req, res, next) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500", { title: "Internal Server Error" });
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
    subject: 'Novo pedido recebido',
    html: `
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <h3>Itens do Pedido:</h3>
      <ul>
        ${basket.map(item => `<li>${item.name} - ${item.tipo} / ${item.tamanho} / ${item.quantidade} / ${item.entrega} - Total: ${item.total}</li>`).join('')}
      </ul>
    `
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

const port = 3052;

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`The server is running port: http://localhost:${port}`);
});



