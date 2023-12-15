let totalGeral = 0;
limpar();

function adicionar(){
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitario = produtoSelecionado.split('R$')[1];
    let quantidadeEscolhida = document.getElementById('quantidade').value;
    
    let subTotal = valorUnitario * quantidadeEscolhida;
    if(quantidadeEscolhida <= 0){
      alert('Quantidade incorreta!')
    }
    else{
      let carrinho = document.getElementById('lista-produtos');
      carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidadeEscolhida}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
      </section>`; 
      totalGeral = totalGeral + subTotal;
    }
    
  let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}
function limpar(){
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
  totalGeral = 0;
 
}
//encontrar uma maneira de somar os subtotais 
//Descobrir qual produto foi selecionado e qual sua quantidade -FEITO
//Adicionar os itens em uma lista
//Somar o valor da lista e imprimir no id valor total

