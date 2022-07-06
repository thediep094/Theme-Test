class Test extends HTMLElement {
  constructor(){
  	super()
    this.addEventListener('click', _ => {
      console.log('I have been hovered');
    });
  
  }
}
customElements.define('test', Test);