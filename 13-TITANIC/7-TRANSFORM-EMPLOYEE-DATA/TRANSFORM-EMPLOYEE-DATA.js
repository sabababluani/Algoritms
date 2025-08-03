function transformEmployeeData(employees) {
  return employees.map((employee) => ({
    fullName: `${
      employee.lastName.charAt(0).toUpperCase() + employee.lastName.slice(1)
    }, ${
      employee.firstName.charAt(0).toUpperCase() + employee.firstName.slice(1)
    }`,
    annualSalary: employee.monthlySalary * 12,
    department: employee.department.toUpperCase(),
  }));
}
