INSERT INTO users(employee_id,email,password_hash,role,email_verified) VALUES
('HR001','hr@dayflow.com',crypt('Dayflow@123',gen_salt('bf',12)),'HR',true),
('EMP001','employee@dayflow.com',crypt('Dayflow@123',gen_salt('bf',12)),'EMPLOYEE',true),
('EMP002','ananya@dayflow.com',crypt('Dayflow@123',gen_salt('bf',12)),'EMPLOYEE',true);
INSERT INTO employees(user_id,employee_id,name,email,phone,job_title,department,joining_date,employment_status,basic_salary,allowances,deductions)
SELECT id,employee_id,email,email,'9000000000',CASE WHEN role='HR' THEN 'HR Officer' ELSE 'Software Engineer' END,CASE WHEN role='HR' THEN 'Human Resources' ELSE 'Engineering' END,CURRENT_DATE,'Active',CASE WHEN role='HR' THEN 70000 ELSE 55000 END,5000,3000 FROM users;
INSERT INTO notifications(user_id,title,message,type) SELECT id,'Welcome to Dayflow','Your HRMS account is ready.','INFO' FROM users;
