import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private authService: AuthenticationService,private formBuilder:FormBuilder, private router: Router) { }
   ngOnInit(): void {
    sessionStorage.clear();
    console.log("Local cleared");
    this.initForm();
     
    }
  initForm(){
    this.loginForm=this.formBuilder.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]

    })
  }
  get control(){

return this.loginForm.controls;
  }
  loginProcess(){
    this.submitted=true;
    console.log("LOGGING IN");
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        result=>{
         
          sessionStorage.setItem('token',result.token);
          sessionStorage.setItem('userId',result.userId);
          sessionStorage.setItem('userType', result.userType);
          console.log(sessionStorage.getItem('token'));
          if(result.userType === "1") {
            this.router.navigate(['/home']);

          }
          else {
            this.router.navigate(['/admin']);
          }
         
          
          

      }, (error) => { 
        console.log(error)
        alert('Invalid Cridential');
        
      }
      
      )
    }
  }
}