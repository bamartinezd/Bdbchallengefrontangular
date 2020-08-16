import { Component, OnInit } from '@angular/core';
import { RouterModel } from '../../constants/route.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  ROUTE = { ...RouterModel.ROUTES };

  constructor() { }

  ngOnInit(): void {
  }

}
