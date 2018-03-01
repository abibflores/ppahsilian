import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  marca= 'Dailish';
  play= '';
  public reproducirVideo() {
    this.play = 'https://www.youtube.com/embed/OEaA_p_MRvE?autoplay=1';
    $('#btn-play-youtube').css('display', 'none');
    $('#videoyoutube').attr('src', this.play);
  }
}
