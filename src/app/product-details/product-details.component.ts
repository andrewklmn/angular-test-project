import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product;
  @Input() count: number = 0;

  constructor(private route: ActivatedRoute) {}

  clicker($event: any): void {
    const target = $event?.target;
    console.log(this.count++);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get('productId')];
    });
  }
}
