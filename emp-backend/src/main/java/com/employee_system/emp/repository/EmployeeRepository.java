package com.employee_system.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee_system.emp.model.Employee;

public interface EmployeeRepository extends JpaRepository <Employee,Long>{
    
}
