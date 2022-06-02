import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbomodl"
export default class extends Controller {
  connect() {

  }

  submitEnd(event){
    if (event.detail.success){
      this.hideModal()
    }
    
  }

  hideModal(){
    this.element.remove()
  }
}
