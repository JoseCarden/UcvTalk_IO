import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-logup-estudiante',
  templateUrl: './logup-estudiante.page.html',
  styleUrls: ['./logup-estudiante.page.scss'],
})
export class LogupEstudiantePage implements OnInit {

  formLogupEstudiante: FormGroup;
  
  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService,
    public alertCrl: AlertController,
    public fb: FormBuilder
  ) { 
    this.formLogupEstudiante = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'correo': new FormControl(null,Validators.email),
      'genero': new FormControl()
    })
  }

  ngOnInit() {
  }

  async registrarEstudiante(){

    var form = this.formLogupEstudiante.value;

    if(this.formLogupEstudiante.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Tienes que poner un usuario y contraseña',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    var estudiante = {
      Correo: form.correo,
      Usuario: form.usuario,
      Contra: form.password,
      Genero: parseInt(form.genero)
    }

    this.estService.postEstudiante(estudiante)
    .subscribe( resp => {
      console.log(resp);
    })

    this.navCtrl.navigateBack('/home');
  }
}
