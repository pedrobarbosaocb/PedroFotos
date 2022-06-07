import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  //imagem modelo (modal) - é somente a pasta/url vazia de uma imagem
  imagem : string = '';

  //banco de dados
  fotos = [
    { id:1, date:'12-05-22', folder:'../../../assets/fotos/IMG_1609.jpg' },
    { id:2, date:'12-05-22', folder:'../../../assets/fotos/IMG_3025.jpg' },
    { id:2, date:'12-05-22', folder:'../../../assets/fotos/IMG_4442.jpg' },
    { id:2, date:'12-05-22', folder:'../../../assets/fotos/IMG_4523.jpg' },
    { id:2, date:'12-05-22', folder:'../../../assets/fotos/IMG_4943.jpg' },
    { id:2, date:'12-05-22', folder:'../../../assets/fotos/IMG_4944.jpg' },
    { id:2, date:'12-05-22', folder:'../../../assets/fotos/IMG_5275.jpg' },
    { id:2, date:'12-05-22', folder:'../../../assets/fotos/IMG_6851.jpg' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?1' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?2' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?3' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?4' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?5' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?6' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?7' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?8' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?9' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?10' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?11' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?12' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?13' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?15' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?16' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?17' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?18' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?19' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?20' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?21' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?22' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?23' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?24' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?25' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?26' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?27' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?28' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?29' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?30' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?31' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?32' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?33' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?34' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?35' },
    { id:2, date:'12-05-22', folder:'https://picsum.photos/400?36' },
  ]

  // altera a var imagem pela string colocada
  abrirModal(imagem : string) {
    this.imagem = imagem;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
