import { Controller } from "@hotwired/stimulus";
import { get } from "@rails/request.js";

export default class extends Controller {
  static targets = ["stateSelect"]
  connect() {
    console.log("hello");
  }

  change(event){
    // event.target.selectedOptions[0].value
    // yarn add @rails/request.js for ajax call 
    let country = event.target.value
    let target = this.stateSelectTarget.id
    console.log(target);
    get(`/addresses/state?target=${target}&country=${country}`,{
      responseKind: "turbo-stream"
    })
  }
}
