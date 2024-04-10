import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ActivityService } from '../../../services/activity.service';
import { Customer, Representative } from '../domain/activity';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent implements OnInit {
  groups: any[] = [];
  expenses: any[] = [];
  userid: any;
  groupname: any;
  customers!: Customer[];

  representatives!: Representative[];

  statuses!: any;

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  groupID: any;
  userIDD: any;
  groupdata: any;
  status: any;

  useremail!: string[]

  constructor(
    private customerService: ActivityService,
    private route: ActivatedRoute,
    private websocketService: WebsocketService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.groupID = params['id'];
    });

    this.customerService.getAllGroupsByEmail(this.groupID).subscribe(
      (data) => {
        this.groupname = data.group.name;
        this.groupdata = data.group;
        this.expenses = data.group.expenses;
        for (const exp of this.expenses) {
          this.customerService.getEmail(exp.userid).subscribe((data) => {
            this.useremail = data;
          });
        }

        for (const st of this.expenses) {
          for (const member of st.split_members) {
            this.statuses = member.status;
          }
        }
      },
      (error) => {
        console.error('Error fetching groups:', error);
      }
    );

    // Fetch initial group data
    this.fetchGroupData();

    // Subscribe to WebSocket messages for activity updates
    this.websocketService.on('activityUpdate').subscribe((expense) => {
      // Update activity with new expense data
      // You might need to filter expenses based on group ID or other criteria
      this.updateActivity(expense);
    });
  }

    //demo data
    // this.customerService.getCustomersLarge().then((customers) => {
    //   this.customers = customers;
    //   this.loading = false;

    //   this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    // });

    // this.representatives = [
    //   { name: 'Amy Elsner', image: 'amyelsner.png' },
    //   { name: 'Anna Fali', image: 'annafali.png' },
    //   { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    //   { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    //   { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    //   { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    //   { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    //   { name: 'Onyama Limba', image: 'onyamalimba.png' },
    //   { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    //   { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    // ];

    //   this.statuses = [

    //   ];
    // }

    // clear(table: Table) {
    //   table.clear();
    // }

    getSeverity(status: string): "danger" | "success" | "warning" {
      switch (status) {
        case 'pending':
          return 'danger';
    
        case 'received':
          return 'success';
    
        default:
          return 'warning'; // Handle other statuses
      }
    }

  fetchGroupData(){
    this.customerService.getAllGroupsByEmail(this.groupID).subscribe(
      (data) => {
        this.groupname = data.group.name
        this.groupdata = data.group
        this.expenses = data.group.expenses;
        this.status = data.group.expenses.split_members;
      },
      (error) => {
        console.error('Error fetching groups:', error);
      }
    );
  }

  updateActivity(expense: any) {
    // Update activity with new expense data
    // You might need to filter expenses based on group ID or other criteria
    this.expenses.push(expense);
    // Also update other properties or perform any necessary actions
  }
}
