import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { <%=classify(name)%>Service } from '../<%=dasherize(name)%>.service';

@Component({
  selector: 'dn-<%=dasherize(name)%>',
  templateUrl: './<%=dasherize(name)%>.component.html',
  styleUrls: ['./<%=dasherize(name)%>.component.scss'],
})
export class <%=classify(name)%>Component {
  <%=camelize(name)%>Fetch$: Observable<any>;
  constructor(private <%=camelize(name)%>Service: <%=classify(name)%>Service) {
  }
  private get<%=classify(name)%>() {
    this.<%=camelize(name)%>Fetch$ = this.<%=camelize(name)%>Service.get<%=classify(name)%>();
  }
}