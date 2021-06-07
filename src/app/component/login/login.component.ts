import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string='';

 
  profileForm = new FormGroup({
    email: new FormControl(['', Validators.required]),
    password: new FormControl(['', Validators.required]),
  });

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(profileForm:FormGroup) {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    this.service.login(this.profileForm.value).subscribe((res: any)=>{
      this.router.navigateByUrl('/home');
    }, error => {
        this.msg='credenciales incorrectas, ingresar usuario o contraseña correcta'
    }
    
    );

    
    
  }

}
