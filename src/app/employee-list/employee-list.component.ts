import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employes = [
    { nom: 'John Doe', poste: 'Développeur Web', equipe: 'Tech & Innovation' },
    { nom: 'Marie Dupont', poste: 'Directrice des Ressources Humaines', equipe: 'RH Innovante' },
    // Ajoute les autres employés ici
  ];

}
