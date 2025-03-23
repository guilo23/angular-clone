import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  cardDescription:string="";
  @Input()
  cardTitle:string="";
  @Input()
  photoCover:string="";
  constructor(){}

  ngOnInit():void{

  }
}
