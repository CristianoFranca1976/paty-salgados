const selecionarSalgado = `
<div class="top">
        <h2>Coxinha</h2>
        <img src="/assets/coxinha.jpg" alt="coxinha" id="imgBasket">
        </div>
        <div class="button">
          <form action="" method="get" class="form-pedido">
            <div class="tipos">
              <label for="tipo">Tipo: </label>
            <select name="tipo" id="tipo" title="tipo" required>
            <option value="Tipo"></option>
              <option value="frito">Frito</option>
              <option value="congelado">Congelado</option>
            </select>
              <label for="">Tamanho: </label>
              <select name="tamanho" id="tamanho" title="select o tamanho" required>
                <option value="tamanho"></option>
                <option value="pequeno">Pequeno</option>
                <option value="medio">Medio</option>
                <option value="grande">Grande</option>
              </select>
              <label for="number">Quantidade: </label>
              <input type="number" name="quantidade" id="quantidade" placeholder="Quantidade" size="10" required>
              <label for="entrega">Entrega: </label>
              <select name="sim" id="sim" title="Tipo de entrega" required>
                <option value="entrega"></option> 
                <option value="nao">Nao</option>
                <option value="sim">Sim</option>
              </select>
            </div>
             <div class="total">
                <p id="total-pay">£ 00.00</p>
              </div>
              <div id="btns">
              <button type="button" class="btn-adicionar" id="btn-voltar" >Voltar</button>
              <button type="button" class="btn-adicionar" id="btn-adicionar" >Adicionar</button>
              
              </div>
          </form>
        </div>
`;

const sectionSalgados = `

<div id="line-one" class="lines">
<div class="itens">
  <img src="/assets/coxinha.jpg" alt="coxinha" class="salgadosIMG" />
  <div class="info">
    <div class="nome">
      <h2>Coxinha</h2>
      <button type="button" class="basket" onclick="openPedido('Coxinha', '/assets/coxinha.jpg')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
          id="btn-coxinha"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com frango desfiado, servido frito ou congelado.
    </p>
  </div>
</div>
<div class="itens">
  <img
    src="/assets/bolinho-de-queijo.jpg"
    alt=""
    class="salgadosIMG"
  />
  <div class="info">
    <div class="nome">
      <h2>Bolinha de Queijo</h2>
      <button type="button" class="basket" onclick="openPedido('Bolinho de Queijo', '/assets/bolinho-de-queijo.jpg')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com recheio de queijo, servido frito ou congelado.
    </p>
  </div>
</div>
</div>
<div id="line-two" class="lines">
<div class="itens">
  <img src="/assets/maravilha.jpeg" alt="" class="salgadosIMG" />
  <div class="info">
    <div class="nome">
      <h2>Maravilha</h2>
      <button type="button" class="basket" onclick="openPedido('Maravilha', '/assets/maravilha.jpeg')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com presunto e queijo, servido frito ou congelado.
    </p>
  </div>
</div>
<div class="itens">
  <img src="/assets/kibe.webp" alt="" class="salgadosIMG" />
  <div class="info">
    <div class="nome">
      <h2>Kibe</h2>
      <button type="button" class="basket" onclick="openPedido('Kibe', '/assets/kibe.webp')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com recheio de queijo, servido frito ou congelado.
    </p>
  </div>
</div>
</div>
<div id="line-three" class="lines">
<div class="itens">
  <img src="/assets/croquete.jpg" alt="" class="salgadosIMG" />
  <div class="info">
    <div class="nome">
      <h2>Croquete</h2>
      <button type="button" class="basket" title="Adicione ao basket" onclick="openPedido('Croquete', '/assets/croquete.jpg')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com recheio de carne, servido frito ou congelado.
    </p>
  </div>
</div>
<div class="itens">
  <img src="/assets/empada.webp" alt="" class="salgadosIMG" />
  <div class="info">
    <div class="nome">
      <h2>Empada</h2>
      <button type="button" class="basket" onclick="openPedido('Empada', '/assets/empada.webp')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com recheio, servido frito ou congelado.
    </p>
  </div>
</div>
</div>
<div id="line-four" class="lines">
<div class="itens">
  <img src="/assets/esfira.webp" alt="" class="salgadosIMG" />
  <div class="info">
    <div class="nome">
      <h2>Esfira</h2>
      <button type="button" class="basket" onclick="openPedido('Esfira', '/assets/esfira.webp')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com frango desfiado, servido frito ou congelado.
    </p>
  </div>
</div>
<div class="itens">
  <img src="/assets/risole.jpg" alt="" class="salgadosIMG" />
  <div class="info">
    <div class="nome">
      <h2>Risole</h2>
      <button type="button" class="basket" onclick="openPedido('Risole', '/assets/risole.jpg')">
        <img
          src="/assets/basket.png"
          alt="basket"
          class="basketLogo"
        />
      </button>
    </div>
    <p class="description">
      Massa fresca com recheio de carne, servido frito ou congelado.
    </p>
  </div>
</div>
</div>

`;

const removeSecction = document.body.children[0].children[3];

const salgadosSet = (document.body.children[0].children[3].innerHTML =
  sectionSalgados);
document.body.children[0].firstElementChild.innerHTML = selecionarSalgado;

document.addEventListener("DOMContentLoaded", (event) => {
  const inputTexto = document.querySelector("#quantidade");
  const outputTexto = document.getElementById("total-pay");

  inputTexto.addEventListener("input", function () {
    const tamanhoText = tamanho.options[tamanho.selectedIndex].textContent;
    const pequeno = 0.6;
    const medio = 3.5;
    const grande = 5.0;

    if (tamanhoText === "Pequeno") {
      return (outputTexto.textContent = "£ " + inputTexto.value * pequeno);
    } else if (tamanhoText === "Medio") {
      return (outputTexto.textContent = "£ " + inputTexto.value * medio);
    } else if (tamanhoText === "Grande") {
      return (outputTexto.textContent = "£ " + inputTexto.value * grande);
    }
  });
});

const btnCoxinha = document.getElementById("btn-coxinha");
const addBasket = document.getElementById("addBasket");
const section = document.getElementsByTagName("section")[0];
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const formEmail = document.getElementsByClassName("form-email")[0];
const bascket = document.getElementsByClassName("basket")[0];

const h2 = document.body.childNodes[1].children[0].children[0].childNodes[1];
const imgPedido =
  document.body.childNodes[1].children[0].children[0].childNodes[3];

function openPedido(id, img) {
  section.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
  formEmail.style.display = "none";
  bascket.style.display = "none";
  addBasket.style.display = "flex";
  h2.textContent = id;
  imgPedido.src = img;
  document.body.style.height = "100vh";
}

const btnVolta = document.getElementById("btn-voltar");
let count = 0;

const lista = document.getElementsByClassName("listas")[0];
const btnAdicionar = document.getElementById("btn-adicionar");
const basketSalvo = document.getElementsByClassName("basket-salvo")[0];
const option = document.getElementsByTagName("option")[0];
const option1 = document.getElementsByTagName("option")[1];

btnVolta.addEventListener("click", () => {
  addBasket.style.display = "none";
  basketSalvo.style.display = "none";
  section.style.display = "block";
  header.style.display = "flex";
  footer.style.display = "flex";
  formEmail.style.display = "flex";
  console.log("Clicked");
});

btnAdicionar.addEventListener("click", (id) => {
  const tipo = document.getElementById("tipo");
  const tamanho = document.getElementById("tamanho");
  const quantidade = document.getElementById("quantidade").value;
  const sim = document.getElementById("sim");

  const tipoText = tipo.options[tipo.selectedIndex].textContent;
  const tamanhoText = tamanho.options[tamanho.selectedIndex].textContent;
  const simText = sim.options[sim.selectedIndex].textContent;
  const h2Value = h2.textContent;

  const somaQuantidade = function () {
    const pequeno = 0.6;
    const medio = 3.5;
    const grande = 5.0;

    if (tamanhoText === "Pequeno") {
      var somaPequeno = quantidade * pequeno;
      return somaPequeno.toFixed(2);
    } else if (tamanhoText === "Medio") {
      var somaMedio = quantidade * medio;
      return somaMedio.toFixed(2);
    } else if (tamanhoText === "Grande") {
      var somaGrande = quantidade * grande;
      return somaGrande.toFixed(2);
    }
  };

  const newOder = somaQuantidade();
  ++count;

  const newItem = `<div class="item" id='${count}'>
    <div  onclick='checkedTask(${count})' class="item-icon">
   <img id='icon_${count}' class='imagem-notchecked' src="./assets/rec.png" style="width: 20px;height: 20px;" alt="">
    </div>
    <div onclick='checkedTask(${count})' class="item-name" id='adicionados'>

      <p id='h2-value' class='paragraph-value'>${h2Value}</p>
      <p id='tipo-value' class='paragraph-value'>${tipoText}</p>
      <p id='tamanho-value' class='paragraph-value'>${tamanhoText}</p>
      <p id='quantidade-value' class='paragraph-value'>${quantidade}</p>
      <p id='delivery-value' class='paragraph-value'>${simText}</p>
      <p id='total-value' class='paragraph-value'>£ ${newOder}</p>
    </div>
    <div class="item-button">
     <button  onclick='deleteItem(${count})' type="button" class="delete" id='deleteId_${count}' disabled> <img  id='bin_${count}' src="/assets/recycle-bin.png" style="height: 20px;width: 20px;" alt="">Delete</button>
    </div>
   </div>
   `;
  if (
    tipoText !== "" &&
    tipoText !== null &&
    tipoText !== undefined &&
    tamanhoText !== "" &&
    tamanhoText !== null &&
    tamanhoText !== undefined &&
    quantidade !== "" &&
    quantidade !== null &&
    quantidade !== undefined &&
    simText !== "" &&
    simText !== null &&
    simText !== undefined
  ) {
    section.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
    formEmail.style.display = "none";
    bascket.style.display = "none";
    addBasket.style.display = "none";
    basketSalvo.style.display = "flex";
    lista.innerHTML += newItem;
  } else {
    alert("Por favor, preencha os campos vazios");
  }
});

const btnVoltarOrder = document.getElementById("btn-voltarOrder");

btnVoltarOrder.addEventListener("click", () => {
  addBasket.style.display = "none";
  basketSalvo.style.display = "none";
  section.style.display = "block";
  header.style.display = "flex";
  footer.style.display = "flex";
  formEmail.style.display = "flex";
});



function invoice() {
  
  const invoice = `
   <div id="top">
      <img src="/assets/LetraC.png" alt="" id="logo">
      <h2>Invoice</h2>
      </div>
 <div class="table_component" role="region" tabindex="0">
        <table id="myTable">
            <caption>Paty Salgados</caption>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Descricao</th>
                    <th>Preco</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2">Total</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
`;

  const invoiceLocation = document.getElementById("invoice");

  

  invoiceLocation.innerHTML = invoice;

  console.log();
}

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
  const contactForm = document.getElementById("contactForm");

  section.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
  formEmail.style.display = "none";
  bascket.style.display = "none";
  basketSalvo.style.display = "none";
  contactForm.style.display = "flex";


  function invoice() {

    const invoice = `
     <div id="top">
        <img src="/assets/LetraC.png" alt="" id="logo">
        <h2>Invoice</h2>
        </div>
   <div class="table_component" role="region" tabindex="0">
          <table id='myTable'>
              <caption>Paty Salgados</caption>
              <thead>
                  <tr>
                      <th>Item</th>
                      <th>Descricao</th>
                      <th>Preco</th>
                  </tr>
              </thead>
              
              <tbody>
                  <tr>
                      <td colspan="2">Total</td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          </div>
  `;

    const invoiceLocation = document.getElementById("invoice");

    invoiceLocation.innerHTML = invoice;
  }
  invoice();
});

function checkedTask(id) {
  const deleteId = document.getElementById("deleteId_" + id);
  const checkedItem = document.getElementById(id);
  const classItem = checkedItem.getAttribute("class");

  if (classItem == "item") {
    checkedItem.classList.add("clicked");

    var icon = document.getElementById("icon_" + id);

    icon.removeAttribute("src", "/assets/rec.png");
    icon.setAttribute("src", "/assets/check.png");

    var bin = document.getElementById("bin_" + id);

    bin.removeAttribute("src", "/assets/recycle-bin.png");
    bin.setAttribute("src", "/assets/bin.png");

    deleteId.removeAttribute("disabled");
    checkedItem.parentNode.appendChild(checkedItem);
  } else {
    checkedItem.classList.remove("clicked");
    var icon = document.getElementById("icon_" + id);
    icon.removeAttribute("src", "/assets/check.png");
    icon.setAttribute("src", "/assets/rec.png");

    var bin = document.getElementById("bin_" + id);

    bin.removeAttribute("src", "/assets/bin.png");
    bin.setAttribute("src", "/assets/recycle-bin.png");

    deleteId.setAttribute("disabled", "");
  }
}

function deleteItem(id) {
  const task = document.getElementById(id);
  task.remove();
}
