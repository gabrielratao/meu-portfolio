  // verificar o tamanho da tela do usuário assim que a página é carregada
  window.addEventListener('load', verificarLarguraDaTela);



  
// função para ajustar layout da tela
function verificarLarguraDaTela() {
    const larguraDaTela = window.innerWidth;
    console.log(`Largura da tela: ${larguraDaTela}px`);
    
    

    if (larguraDaTela <= 900){ //dispositivo móvel
        // console.log('Dispositivo Móvel')
        // alert('Esse sistema ainda não está 100% disponível em Mobile. Reduza o Zoom para utilizar. Role para baixo para ver o resultado da API!')
        var mainPage = document.getElementById('main-page')
        var textH1 = document.getElementById('h1-text')
        var leftSide = document.getElementById('left-side')
        var rightSide = document.getElementById('right-side')
        var hdTextPortfolio = document.getElementById('header-text-portifolio')
        var header = document.getElementById('header')


        mainPage.style.flexDirection = 'column'

        leftSide.style.width = '100vw'
        leftSide.style.height = '300px'

        rightSide.style.width = '100vw'
        rightSide.style.marginTop = '110px'

        textH1.style.fontSize = '30px'

        hdTextPortfolio.remove()
        header.style.justifyContent = 'space-around'
        
        // header.style.
        // mainSection.style.flexDirection = 'column'
        // mainSection.style.height = '180vh'
        // mainSection.style.marginLeft = '10px'

        // rickMorty.style.width = '440px'
        // rickMorty.style.height = '70vh'
        

        
    } 
    
  

}