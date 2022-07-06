class MyCustomElement extends HTMLElement {
  constructor() {
    super();

    var self = this;

    self.addEventListener('click', _ => {
      self.innerHTML = '<b style="color: red"> I have been clicked </b>';
    });
  }
}

customElements.define('my-custom-element', MyCustomElement);


class DiepElement extends HTMLElement{

  constructor(){
  	super();
    this.addEventlistener('hover', _ =>{
   		this.innerHTML = '<p style="color: red"> I have been hovered </p>';
    })
  }

}

customElements.define('diep-element', DiepElement);
