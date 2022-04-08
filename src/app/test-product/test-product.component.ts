import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-product',
  templateUrl: './test-product.component.html',
  styleUrls: ['./test-product.component.scss']
})
export class TestProductComponent implements OnInit {

  name = 'Rômulo';
  age = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
