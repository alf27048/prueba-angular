import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importamos la pagina se hace automatico
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
