package com.utkarsh.interfaces;

public interface Payment {
	
	void makePayment(double amount );
	void generateRecipt( );
	

}

class CreditCard implements Payment {
	
	@Override
	public void makePayment (double cc) {
	System.out.println("Thank you for Choosing Credit Card for Payment");
 }

	@Override
	public void generateRecipt() {
		System.out.println("Your Recipt Generated");
		
		
	}
}

class DebitCard implements Payment {
	
	@Override
	public void makePayment (double dc) {
	System.out.println("Thank you for Choosing Debit Card for Payment");
 }
	@Override
	public void generateRecipt() {
		System.out.println("Your Recipt Generated");
		
	}
}

class UPI implements Payment {
	
	@Override
	public void makePayment (double up) {
	System.out.println("Thank you for Choosing  UPI for Payment");
 }
	@Override
	public void generateRecipt() {
		System.out.println("Your Recipt Generated");
		
		
	}
}

class Paypal implements Payment {
	
	@Override
	public void makePayment (double payp) {
	System.out.println("Thank you for Choosing Paypal for Payment");
 }
	@Override
	public void generateRecipt() {
		System.out.println("Your Recipt Generated");
		
		
	}
}