import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="preview"
export default class extends Controller {
  static targets = [ "getData", "error" ]
  static values = {
    url: String
  }

  connect() {
    console.log("i am connect");
    // console.log(this.urlValue);
    fetch(this.urlValue).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })
  }

  submitEnd(event){
    event.preventDefault()
    console.log("i am submit end method");
  }

  fetchInput(event){
    console.log(event.params["id"]);
    if(this.getDataTarget.value == ""){
      this.errorTarget.textContent = "Required*"
    }else{
      this.errorTarget.textContent = ""
    }
  }
}
