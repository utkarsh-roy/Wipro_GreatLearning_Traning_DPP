package com.utkarsh.interfaces;

import java.util.Scanner;

public class bill {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Payment payment = null;

        System.out.println("Select Payment Method:");
        System.out.println("1. Credit Card");
        System.out.println("2. Debit Card");
        System.out.println("3. UPI");
        System.out.println("4. PayPal");

        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();

        System.out.print("Enter amount: ");
        double amount = sc.nextDouble();

        switch (choice) {
            case 1:
                payment = new CreditCard();
                break;
            case 2:
                payment = new DebitCard();
                break;
            case 3:
                payment = new UPI();
                break;
            case 4:
                payment = new Paypal();
                break;
            default:
                System.out.println("Invalid payment option!");
                System.exit(0);
        }

        
        payment.makePayment(amount);
        payment.generateRecipt();

        sc.close();
    }
}


