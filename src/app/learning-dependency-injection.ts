export class TaskService{
  public exceptionNotifier;

  public constructor(exceptionNotifier){
    this.exceptionNotifier = exceptionNotifier;
  }
}

export class ExceptionNotifier{
  public notifier;

  public constructor(notifier){
    this.notifier = notifier;
  }
}

export class EmailNotifier{
  public sendMessage(email, message){ }
}

export class SMSNotifier{
  public sendMessage(cell_number, message){ }
}


// nofify by email
// let notifier = new EmailNotifier();
// let exceptionNotifier = new ExceptionNotifier(notifier);
// let taskService = new TaskService(exceptionNotifier);


// nofify by sms
let notifier = new SMSNotifier();
let exceptionNotifier = new ExceptionNotifier(notifier);
let taskService = new TaskService(exceptionNotifier);

