package com.utkarsh.interfaces;



public interface SmartDevices {

    void turnOn();
    void turnOff();
    void showStatus();
}



class Light implements SmartDevices {

    boolean status = false;

    @Override
    public void turnOn() {
        status = true;
        System.out.println("Light is turned ON");
    }

    @Override
    public void turnOff() {
        status = false;
        System.out.println("Light is turned OFF");
    }

    @Override
    public void showStatus() {
        System.out.println("Light status: " + (status ? "ON" : "OFF"));
    }
}

class Fan implements SmartDevices {

    boolean status = false;

    @Override
    public void turnOn() {
        status = true;
        System.out.println("Fan is running");
    }

    @Override
    public void turnOff() {
        status = false;
        System.out.println("Fan is stopped");
    }

    @Override
    public void showStatus() {
        System.out.println("Fan status: " + (status ? "ON" : "OFF"));
    }
}

class AC implements SmartDevices {

    boolean status = false;

    @Override
    public void turnOn() {
        status = true;
        System.out.println("AC is cooling");
    }

    @Override
    public void turnOff() {
        status = false;
        System.out.println("AC is turned OFF");
    }

    @Override
    public void showStatus() {
        System.out.println("AC status: " + (status ? "ON" : "OFF"));
    }
}

class SmartTV implements SmartDevices {

    boolean status = false;

    @Override
    public void turnOn() {
        status = true;
        System.out.println("Smart TV is ON");
    }

    @Override
    public void turnOff() {
        status = false;
        System.out.println("Smart TV is OFF");
    }

    @Override
    public void showStatus() {
        System.out.println("TV status: " + (status ? "ON" : "OFF"));
    }
}