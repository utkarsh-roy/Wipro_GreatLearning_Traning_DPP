package com.utkarsh.interfaces;

import java.util.*;

public class Test {
	
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		Notification notifi;
		
		System.out.println("Tell me What kind of Notification you Want 1.Email 2.SMS 3.Push");
		String x = in.next();
		
		if (x.equals("Email"))
			notifi = new  EmailNotification();
		else if (x.equals("SMS"))
			notifi = new SMSNotification();
		else
			notifi = new PushNotification();
		notifi.SendNotification(x);
	}
	
}
