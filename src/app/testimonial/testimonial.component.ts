import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonials = {
    tagline: '',
    title: '',
    description:'',  
    feedbacks: [
      {name: '', userimage: '', comments: '', company: ''},
      {name: '', userimage: '', comments: '', company: ''},
      {name: '', userimage: '', comments: '', company: ''},
    ],
  };

  constructor(private config: ConfigService) { }

  ngOnInit() {

    this.testimonials = this.getTestimonial();

  
  }
  getTestimonial() {
    return this.config.getConfig().testimonials;
  }

}
