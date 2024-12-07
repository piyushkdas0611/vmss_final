import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-under-writer',
  standalone: false,
  
  templateUrl: './register-under-writer.component.html',
  styleUrl: './register-under-writer.component.css'
})
export class RegisterUnderWriterComponent {

  underwriter = {
    name: '',
    dob: '',
    gender: '',
    address: '',
    doj: ''
  };

  constructor(private http:HttpClient,private route:Router){}

  onSubmit()
  {
      const apiUrl= "http://localhost:8081/addUnderWritter"
      this.http.post(apiUrl,this.underwriter).subscribe(
        (response) => {
          console.log('Registeration Succesfull:',response);
          alert("Underwriter registered succesfully");

          this.route.navigate(['/success'],{ state:this.underwriter})

        },
        (error)=>{
          console.error('Error during registeration',error);
          alert('Failed to register the underwriter.please try again');
        }
      );
    }

    onClick()
    {
      this.route.navigate(['/admin']);
    }

}
