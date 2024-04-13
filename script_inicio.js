

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
    <div class="cabeça">
        <div class="logo">
          <a href="inicio.html"><img src="./imagens/abctech.png" width="20%"/> </a> 
        </div>    
      
        <!--menu-->
        
        <div class="nav-list">
          <ul>
            <li><a href="inicio.html">INICIO</a></li>
            <li><a href="cursos.html">CURSOS</a></li>
            <li><a href="colabore.html">COLABORE</a></li>
            <li><a href="contato.html">CONTATO</a></li>
          </ul>
        </div>  <!--nav-list-->
        
        
        <div class="nav-login"> 
            <ul>
                <li class="1"> <a class= "3" href="tela_login.html">LOGIN</a></li>
                <li class="2"> <a class= "4" href="tela_registra-se.html">SIGN</a> </li>
            </ul>
        </div>    
    </div>          
         <!--nav-login-->
                
         
  </header>  
        
        `
    }
}







customElements.define('my-hearder', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>  
        
      <div class="rodape">      
          <p class="pe"> Visite nossas rede sociais </p>
            <div class="link">
                <ul class="rede">
                    <li><a href="https://github.com/Fatorialview/Projeto-ABCTECH-oficial" target="_blank"> GitHub </a></li>
                </ul>
              
                
                <p class="creditos"><i>© ABCTech todos os direitos reservados</i></p>

                 

            </div>
      </div>     
      
    </footer>

        `
    }
}

customElements.define('my-footer', MyFooter)




