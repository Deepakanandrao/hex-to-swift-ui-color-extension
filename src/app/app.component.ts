import { Component } from '@angular/core';
import hexToRgba from 'hex-to-rgba';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ext = 'public static let myColor:Color = Color(UIColor(red:#/255, green:#/255, blue:#/255, alpha:1))';
  inputCodes = "#112233 #112233 #112233";
  outputExtension = "";
  codes = [];

  public generate(event:Event): void{
    // Read Input and use newline or space char to break it into an array
    this.inputCodes = this.stringToArray(this.inputCodes);
    this.codes =  this.inputCodes.split(" ").map((e)=>hexToRgba(e));
    // Use hexto rbga or map that to a new array 
    this.outputExtension = "extension Color {\n\t".concat(this.codes.join("\n\t")).concat("\n}");
    // Generate output
  }

  public stringToArray(codes:String):any {
    return codes.replace("\n"," ").replace(","," ").replace("  "," ");
  }
}
