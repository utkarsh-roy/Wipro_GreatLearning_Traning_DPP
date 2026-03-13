package com.utkarsh.interfaces;

public interface Notification {
   void SendNotification(String notifi);
}


class EmailNotification implements Notification{
	
	@Override
	public void SendNotification(String EN) {
		
		System.out.println("You Recieved Email Notification");
	}
}

class SMSNotification implements Notification{
	
	@Override
	public void SendNotification(String SMS) {
		
		System.out.println("You Recieved SMS Notification");
	}
}

class PushNotification implements Notification{
	
	@Override
	public void SendNotification(String PH) {
		
		System.out.println("You Recieved Push Notification");
	}
}
