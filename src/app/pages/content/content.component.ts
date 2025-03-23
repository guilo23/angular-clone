import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content',
  imports: [MenuBarComponent,RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string="";
  cardTitle:string=""
  cardDescription:String=""
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValues(this.id)
  }
  setValues(id:string| null){
    const result = dataFake.filter( article => article.id == id)[0]

      this.cardTitle = result.title
      this.cardDescription = result.description
      this.photoCover = result.photo
    }
}
