import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosUnasComponent } from './servicios/servicios-unas/servicios-unas.component';
import { NavegacionServiciosComponent } from './servicios/navegacion-servicios/navegacion-servicios.component';
import { ServiciosCabelloComponent } from './servicios/servicios-cabello/servicios-cabello.component';
import { ServiciosMaquillajeComponent } from './servicios/servicios-maquillaje/servicios-maquillaje.component';
import { ServiciosMasajeComponent } from './servicios/servicios-masaje/servicios-masaje.component';
import { MenuInferiorComponent } from './home/menu-inferior/menu-inferior.component';
import {CarritoComprasService} from './services/carrito-compras.service';
import { ListaComprasComponent } from './servicios/lista-compras/lista-compras.component';
import {PerfilesModule} from './perfiles/perfiles.module';
import { ListarPerfilesComponent} from './perfiles/listar-perfiles/listar-perfiles.component';
import { EresEstilistaComponent } from './home/eres-estilista/eres-estilista.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import {AccesoModule} from './acceso/acceso.module';
import {IncioSesionComponent} from './acceso/incio-sesion/incio-sesion.component';
import {BlogModule} from './blog/blog.module';
import {BlogComponent} from './blog/blog/blog.component';
import { PasarelaServicioComponent } from './servicios/pasarela-servicio/pasarela-servicio.component';
import { MenuPrincipalComponent } from './home/menu-principal/menu-principal.component';
import {CatalogoModule} from './catalogo/catalogo.module';
import {ConsultarProductosComponent} from './catalogo/consultar-productos/consultar-productos.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AdminModule} from './admin/admin.module';
import {InicioSesionAdminComponent} from './admin/inicio-sesion-admin/inicio-sesion-admin.component';
import {FormsModule} from '@angular/forms';
const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'servicios/decoracion-de-unas', component: ServiciosUnasComponent},
  {path: 'servicios/corte-de-cabello', component: ServiciosCabelloComponent},
  {path: 'servicios/maquillaje-a-domicilio', component: ServiciosMaquillajeComponent},
  {path: 'servicios/masaje-relajante-a-domicilio', component: ServiciosMasajeComponent},
  {path: 'servicios/carrito-de-compras', component: ListaComprasComponent},
  {path: 'profesionales/perfiles-de-estilistas', component: ListarPerfilesComponent},
  {path: 'bolsa-de-trabajo/eres-estilista', component: EresEstilistaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio-sesion-usuarios', component: IncioSesionComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'admin/catalogo/:id', component: ConsultarProductosComponent},
  {path: 'admin', component: InicioSesionAdminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ServiciosUnasComponent,
    NavegacionServiciosComponent,
    ServiciosCabelloComponent,
    ServiciosMaquillajeComponent,
    ServiciosMasajeComponent,
    MenuInferiorComponent,
    ListaComprasComponent,
    EresEstilistaComponent,
    ContactoComponent,
    PasarelaServicioComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    PerfilesModule,
    AccesoModule,
    BlogModule,
    CatalogoModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AdminModule,
    FormsModule
  ],
  providers: [CarritoComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
