import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importamos la pagina se hace automatico
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
