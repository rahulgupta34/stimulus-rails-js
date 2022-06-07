import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-element"
export default class extends Controller {
  static targets = ["display", "label"]

  static values = {
    url: String
  }


  connect() {
    
  }

  showHide(event){
    let dis = this.displayTarget
    if(event.target.value == "passcode_protected"){
      dis.style.display= "block"
      this.labelTarget.classList.add("main")
    }else{
      dis.style.display= "none"
      this.labelTarget.classList.remove("main")
    }
    
  }
}
