import { Controller } from "@hotwired/stimulus"
import { get } from "@rails/request.js"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = [ "results", "message" ]
  connect() {
    this.messageTarget.innerHTML = "Type Something in the input field."
  }

  submit(event){
    let valueInput = event.target.value
   if(valueInput.length > 0){
    get(`/live_search?target=${this.resultsTarget.id}&query=${valueInput}`,{
      responseKind: "turbo-stream"
    })
   }else{
    get(`/all_get_data?target=${this.resultsTarget.id}`,{
      responseKind: "turbo-stream"
    })
   }
  }
}
