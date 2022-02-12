INSERT INTO department (name)
VALUES
    ('Management'),
    ('Production'),
    ('Research and Development'),
    ('Purchasing'),
    ('Marketing'),
    ('Human Resources'),
    ('Accounting');

INSERT INTO role (department_id, title, salary)
VALUES
    (1, 'Manager', 151559.00),
    (2, 'Production Coordinator', 50228.00),
    (2, 'Location Manager', 60835.00),
    (2, 'Unit Manager', 55098.00),
    (2, 'Transportation Coordinator', 54345.00),
    (3, 'Project Manager', 76395.00),
    (3, 'Research Specialist', 76395.00),
    (3, 'Consultant', 70095.00),
    (3, 'Analyst', 69694.00),
    (4, 'Project Manager', 76395.00),
    (4, 'Buyer', 60853.00),
    (4, 'Procurement Officer', 67843.00),
    (4, 'Materials Manager', 60345.00),
    (5, 'Creative Director', 65394.00),
    (5, 'Content Marketing Specialist', 66572.00),
    (5, 'Digital Marketing Manager', 65934.00),
    (6, 'Diversity Officer', 50943.00),
    (6, 'Recruiter', 50843.00),
    (6, 'Compensation and Benefits Manager', 50845.00),
    (6, 'Information Specialist', 54394.00),
    (7, 'Comptroller', 70572.00),
    (7, 'Bookkeeper', 60574.00),
    (7, 'Financial Analyst', 58345.00)
    ;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Evie', 'Arias', 1, NULL),
    ('Shereen', 'Nairn', 1, NULL),
    ('Anja', 'Phillips', 1, NULL),
    ('Johanna', 'Roy', 1, NULL),
    ('Alara', 'Parry', 1, NULL),
    ('Dalia', 'Butt', 1, NULL),
    ('Nana', 'Noble', 2, 1),
    ('Patryk', 'Serrano', 3, 1),
    ('Cassie', 'Wooten', 4, 1),
    ('Tamara', 'Ramone', 5, 1),
    ('Carol', 'Blundell', 6, 2),
    ('Roxie', 'Richardson', 7, 2),
    ('Molly', 'Morales', 8, 2),
    ('Derry', 'Mathis', 9, 2),
    ('Jaiden', 'England', 10, 3),
    ('Ansh', 'Blair', 11, 3),
    ('Asmaa', 'Khan', 12, 3),
    ('Kurtis', 'Diaz', 13, 3),
    ('Brandi', 'Morin', 14, 4),
    ('Jackson', 'Dodson', 15, 4),
    ('Tye', 'Winter', 16, 4),
    ('Garrett', 'Forrest', 17, 5),
    ('Hector', 'Rivers', 18, 5),
    ('Ayra', 'Orr', 19, 5),
    ('Jordana', 'Hodges', 20, 5),
    ('Roisin', 'French', 21, 6),
    ('Tamzin', 'Lane', 22, 6),
    ('Jaylen', 'Fields', 23, 6)
    ;

