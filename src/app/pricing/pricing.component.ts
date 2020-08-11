import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing = {
    tagline: '',
    title: '',
    description:'',
    plans: [
      {title: '', subtitle: '', description: '', price: '', currency: '' ,
        downloads: '', extensions: '', tutorials: '', support:'', updates: '' ,
      buttontext: '', buttonlink: '', featured: true
      },
      {title: '', subtitle: '', description: '', price: '', currency: '', 
        downloads: '', extensions: '', tutorials: '', support: '', updates: '' ,
      buttontext: '', buttonlink: '', featured: true
      },
      {title: '', subtitle: '', description: '', price: '', currency: '', 
        downloads: '', extensions: '', tutorials: '', support: '', updates: '' ,
      buttontext: '', buttonlink: '', featured: true
      }
    ],
  };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.pricing = this.getPricing();
  }
  
  getPricing() {
    return this.config.getConfig().pricing;
  }

}
