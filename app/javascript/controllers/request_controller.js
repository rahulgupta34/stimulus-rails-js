import { Controller } from "@hotwired/stimulus"
import { post } from "@rails/request.js"

// Connects to data-controller="request"
export default class extends Controller {
  static targets = [ "name", "age", "divElement" ]
   
  connect() {
    
  }
  submitEnd(event){
    event.preventDefault();
    let formValue = {
      name: this.nameTarget.value,
      age: this.ageTarget.value
    }
    
      post(`/request`,{
      responseKind: "turbo-stream",
      body: formValue
      })
      this.divElementTarget.remove()
  }
  hideForm(){
    this.divElementTarget.remove()
  }
}
