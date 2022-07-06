class Test extends HTMLElement {
  constructor(){
  	super()
    this.addEventListener('hover', _ => {
      console.log('I have been hovered');
    });
  
  }
}