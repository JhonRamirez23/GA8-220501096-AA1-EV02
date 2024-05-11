import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Se agregan las rutas a los módulos
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { QueHacemosComponent } from './pages/que-hacemos/que-hacemos.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: DashboardComponent},
  {path: 'iniciar-sesion', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'quienesSomos', component: QuienesSomosComponent},
  {path: 'queHacemos', component: QueHacemosComponent},
  {path: 'FAQS', component: PreguntasComponent},
  {path: 'contactanos', component: ContactoComponent},
  {path: 'error-404', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
