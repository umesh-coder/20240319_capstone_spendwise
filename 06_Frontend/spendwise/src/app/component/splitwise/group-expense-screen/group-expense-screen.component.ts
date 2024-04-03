import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertBoxComponent } from '../../../shared/alert-box/alert-box.component';
import { SettleUpComponent } from '../settle-up/settle-up.component';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'app-group-expense-screen',
  templateUrl: './group-expense-screen.component.html',
  styleUrl: './group-expense-screen.component.scss',
})
export class GroupExpenseScreenComponent implements OnInit {
  userID = localStorage.getItem('Id');
  token: string | null = localStorage.getItem('LEAD_ID');
  wordAfterSpace: string | undefined;
  groupMembers: string[] = [];

  showDialog: boolean = false;

  constructor(public dialog: MatDialog, private http: HttpClient) {
    console.log(this.groupMembers);
  }

  ngOnInit(): void {
    this.getGroupDetails();
  }

  getGroupDetails(): void {
    if (this.userID !== null) {
      const tokenParts = this.userID.split(' ');
      this.wordAfterSpace = tokenParts[1]; // Assign value to wordAfterSpace property
    }
    const groupId = '660a58a06109096b2662ca54';

    this.http
      .get<any>(`http://localhost:2000/group/groupbyid?groupId=${groupId}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }),
      })
      .subscribe({
        next: (response) => {
          this.groupName = response.group.name;
          // Initialize amounts to 0
          let amountOwedToYou = 0;
          let amountOwed = 0;

          // Iterate over expenses
          for (const expense of response.group.expenses) {
            console.log('This is exense user id' + expense.userid);
            console.log('This is user id' + this.wordAfterSpace);
            // Check if the current user is the one who posted the expense
            if (expense.userid == this.wordAfterSpace) {
              amountOwedToYou += expense.amount;
              // Check if the current user is present in the split members
              for (const splitMember of expense.split_members) {
                if (splitMember.member_id == this.wordAfterSpace) {
                  amountOwedToYou -= splitMember.shareamount;
                }
              }
            }
            else{
              // Check if the current user is present in the split members
            for (const splitMember of expense.split_members) {
              if (splitMember.member_id == this.wordAfterSpace) {
                amountOwed += splitMember.shareamount;
              }
            }
            }
            
          }

          // Assign the calculated amounts to component properties
          this.amountOwedToYou = amountOwedToYou;
          this.amountOwed = amountOwed;
          // Calculate totalAmount
          this.totalAmount = amountOwedToYou - amountOwed;

          this.groupMembers = response.group.members;
          console.log('hihihihihhihiihihihi' + this.groupMembers);

          console.log(response);
        },
        error: (error) => {
          console.error('Error fetching group details:', error);
          // Handle error as needed
        },
      });
  }

  onLogout() {
    this.dialog.open(AlertBoxComponent, {
      data: { type: 'alert' },
    });
  }

  groupName: String = '';
  totalAmount: Number = 5000;
  amountOwed: Number = 1000;
  amountOwedToYou: Number = 20;

  openSettleUpDialog(): void {
    this.dialog.open(SettleUpComponent, {
      width: '400px',
    });
  }
  openAddExpenseDialog(): void {
    this.dialog.open(AddExpenseComponent, {
      width: '400px',
    });
  }

  openActivity(): void {}
}
