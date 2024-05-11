import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(): void {
    
  }

  login() {
    if(this.loginForm.valid) {
      console.log("Llamar al servicio técnico");
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
      
    } else {
      alert("Error al ingresar los datos")
    }
  }

}
