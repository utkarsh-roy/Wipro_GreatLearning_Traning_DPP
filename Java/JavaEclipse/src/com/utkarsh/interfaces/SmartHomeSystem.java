package com.utkarsh.interfaces;

import java.util.Scanner;

public class SmartHomeSystem {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        SmartDevices device = null;

        System.out.println("Select Device:");
        System.out.println("1. Light");
        System.out.println("2. Fan");
        System.out.println("3. AC");
        System.out.println("4. Smart TV");

        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                device = new Light();
                break;
            case 2:
                device = new Fan();
                break;
            case 3:
                device = new AC();
                break;
            case 4:
                device = new SmartTV();
                break;
            default:
                System.out.println("Invalid choice");
                System.exit(0);
        }

       
        device.turnOn();
        device.showStatus();
        device.turnOff();
        device.showStatus();

        sc.close();
    }
}
