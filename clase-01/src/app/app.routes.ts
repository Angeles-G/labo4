import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
    { path: 'Bienvenido', component: BienvenidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'error', component: ErrorComponent },
    { path: '', redirectTo: 'Bienvenido', pathMatch: "full"}, // Ruta por defecto
    { path: '**', redirectTo: 'error', pathMatch:"full"} // Ruta para no encontrados
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }