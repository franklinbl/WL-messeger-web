import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LayoutComponent } from './components/layout/layout.component';
import { VerSolicitudesComponent } from './components/ver-solicitudes/ver-solicitudes.component';
import { EnviarSolicitudComponent } from './components/enviar-solicitud/enviar-solicitud.component';



@NgModule({
  declarations: [ContactsComponent, MessagesComponent, LayoutComponent, VerSolicitudesComponent, EnviarSolicitudComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
