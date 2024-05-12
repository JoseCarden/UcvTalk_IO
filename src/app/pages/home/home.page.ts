import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService
  ) {}

  goToLogin(){
    this.navCtrl.navigateForward('/login');
  }

  goToLogup(){
    this.navCtrl.navigateForward('/logup');
  }

  ngOnInit() {
    this.estService.getEstudiantes()
    .subscribe( (estudiantes) => {
      console.log(estudiantes)
    });
  }

}
