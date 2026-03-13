package com.utkarsh.testing;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;



public class Testing {

    Calculation obj;

    @BeforeAll
    static void show() {
        System.out.println("Before class it is running!");
    }

    @BeforeEach
    void initialize() {
        obj = new Calculation();
    }

    @AfterEach
    void display() {
        System.out.println("test cases running fine!");
    }

    @Test
    void testAdd() {
        assertEquals(10, obj.add(5, 5));
    }

    @Test
    void testSub() {
        assertFalse(5 > 6);
        assertTrue(6 == 6);
        assertNotNull(obj);
    }
}
