import { Component,OnInit,Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
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
  @Input()
  id:string="0";

  constructor(){}

  ngOnInit():void{

  }
}
