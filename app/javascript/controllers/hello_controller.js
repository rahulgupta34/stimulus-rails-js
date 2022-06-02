import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello");
    this.element.textContent = "Hello World!"
  }
  submitEnd(){
    console.log("hello hello");
  }
}
