import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { NgModel } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
    { path: "Bienvenido", loadComponent: () => import('./bienvenido/bienvenido.component').then((m) => m.BienvenidoComponent) },
    // { path: 'Bienvenido', component: BienvenidoComponent },
    { path: "login", loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent) },
    // { path: 'login', component: LoginComponent },
    { path: "usuario", loadComponent: () => import('./usuario/usuario.component').then((m) => m.UsuarioComponent) },
    // { path: 'usuario', component: UsuarioComponent },
    { path: "error", loadComponent: () => import('./error/error.component').then((m) => m.ErrorComponent) },
    // { path: 'error', component: ErrorComponent },
    {
        path: "auth", loadComponent: () => import('./auth/auth.component').then((m) => m.AuthComponent),
        children:
            [
                {
                    path: 'login',
                    loadComponent: () => import('../login/login.component').then((m) => m.LoginComponent),
                }
            ]

    },
    { path: '', redirectTo: 'Bienvenido', pathMatch: "full" }, // Ruta por defecto
    { path: '**', redirectTo: 'error', pathMatch: "full" } // Ruta para no encontrados
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }