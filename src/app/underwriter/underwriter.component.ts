import { Component } from '@angular/core';

@Component({
  selector: 'app-underwriter',
  standalone: false,
  
  templateUrl: './underwriter.component.html',
  styleUrl: './underwriter.component.css'
})
export class UnderwriterComponent {
  name:string |null=sessionStorage.getItem("name")
}
