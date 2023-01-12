import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professores =[
    {nome:'Carlos' , telefone:'33518581'},
    {nome:'Joao' , telefone:'33817543'},
    {nome:'Ze' , telefone:'33748655'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
