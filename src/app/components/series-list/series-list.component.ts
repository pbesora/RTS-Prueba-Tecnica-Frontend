import { Component, OnInit } from '@angular/core';
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series?:any;

  constructor(private seriesService: SeriesService){
  }

  ngOnInit(): void {
    this.retrieveMovies();
  }

  retrieveMovies():void{
    this.seriesService.getAll()
      .subscribe(
        data => {
          this.series = data;
          console.log(data);
        },
        error => {
          console.log(error)
        });
  }
}
