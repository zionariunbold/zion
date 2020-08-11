import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = {
    tagline: '',
    title: '',
    description:'',
    companies: [
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
      {name: '', weblink: '', logo: ''},
   ]
  };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.clients = this.getClients();
  }

  getClients() {
    return this.config.getConfig().clients;
  }

}


