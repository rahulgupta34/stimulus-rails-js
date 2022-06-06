import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = [ "query", "errorMessage", "results" ]
  connect() {
    console.log();
  }

  copy(event){
    console.log(event);
  }

  changeAction(event){
    if (this.hasQueryTarget){
      this.resultsTarget.textContent = this.queryTarget.value
    }
  }
}
