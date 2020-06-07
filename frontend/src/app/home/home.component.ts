import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';
import { PlayDynamoDb, PlayLambda } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isLambdaDoneLoading = false;
  public isLambdaDoneResponse: PlayLambda;

  public isGoogleDoneLoading = false;
  public isGoogleDoneResponse: PlayDynamoDb;

  public constructor(private readonly playSvc: PlayService) {}

  public ngOnInit() {}

  public onPlayLambda() {
    this.isLambdaDoneLoading = !this.isLambdaDoneLoading;
    this.playSvc.playLambda().subscribe((val: PlayLambda) => {
      this.isLambdaDoneLoading = !this.isLambdaDoneLoading;
      this.isLambdaDoneResponse = val;
    });
  }

  public onGetGoogleFrameworks() {
    this.isGoogleDoneLoading = !this.isGoogleDoneLoading;
    this.playSvc.getGoogleFrameworks().subscribe((val: PlayDynamoDb) => {
      this.isGoogleDoneLoading = !this.isGoogleDoneLoading;
      console.log(val);
      this.isGoogleDoneResponse = val;
    });
  }
}
