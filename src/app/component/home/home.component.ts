import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees: any;
  search: string;
  constructor(private service: ServiceService) { }
  public gender:boolean = false;

  ngOnInit() {
    this.getEmpData();
    $(document).on('click', '.emp-col', function(){
      let id = $(this).find('#id').text()
      let name = $(this).find('#name').text()
      let age = $(this).find('#age').text()
      let salary = $(this).find('#salary').text()
      $('.modal-body .id span').html(id)
      $('.modal-body .name span').html(name)
      $('.modal-body .age span').html(age)
      $('.modal-body .salary span').html(salary)
      console.log(name)
    })
    $(document).on('click','#grid', function(){
      $('.emp-col').removeClass('col-md-12');
      $('.emp-col > div').removeClass('row');
      $('.emp-col > div').addClass('grid');
      $('.emp-col').addClass('col-md-3');
      $('.emp-col.heading-emp').css('display','none');
    })
    $(document).on('click','#list', function(){
      $('.emp-col').removeClass('col-md-3');
      $('.emp-col > div').addClass('row');
      $('.emp-col > div').removeClass('grid');
      $('.emp-col').addClass('col-md-12');
      $('.emp-col.heading-emp').css('display','block');
    })
  }
  getEmpData(){
    return this.service.getEmployeesData().subscribe(response =>{
      this.employees = response.results
      this.gender = response.results.gender
      console.log(this.employees)
    })
  }

}
