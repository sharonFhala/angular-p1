import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 productId: any=0;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
      this.productId = this.route.snapshot.paramMap.get('id');
  }


}
