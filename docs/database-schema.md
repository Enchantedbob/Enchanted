# Database Schema

## Security Table
```sql
CREATE TABLE security (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50),
    ssn_last4 CHAR(4),
    username VARCHAR(50) UNIQUE,
    password_hash VARCHAR(255),
    two_fa_connection VARCHAR(255)
);
```

## Employee Table
```sql
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    title VARCHAR(100),
    phone1 VARCHAR(15),
    phone2 VARCHAR(15),
    phone3 VARCHAR(15),
    street_address VARCHAR(255),
    city VARCHAR(100),
    state CHAR(2),
    zip VARCHAR(10)
);
```

## Projects Table
```sql
CREATE TABLE projects (
    id INTEGER PRIMARY KEY,
    employee_id INTEGER,
    performance_rating INTEGER,
    amount_paid DECIMAL(10,2),
    amount_billed DECIMAL(10,2),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);
```

## CRM Table
```sql
CREATE TABLE crm (
    id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    customer_number VARCHAR(50) UNIQUE,
    business_connections TEXT,
    business_description TEXT,
    naics_code CHAR(6),
    contact_fname VARCHAR(50),
    contact_lname VARCHAR(50),
    title VARCHAR(100),
    phone1 VARCHAR(15),
    phone2 VARCHAR(15),
    phone3 VARCHAR(15),
    street_address VARCHAR(255),
    city VARCHAR(100),
    state CHAR(2),
    zip VARCHAR(10),
    lead_source VARCHAR(100),
    lead_status VARCHAR(50),
    purchase_history TEXT,
    service_type VARCHAR(100),
    service_description TEXT,
    interaction_history TEXT,
    preferred_communication VARCHAR(50),
    social_media_handles TEXT,
    total_value DECIMAL(10,2),
    recurring_billing_amount DECIMAL(10,2),
    recurring_billing_frequency VARCHAR(50),
    billing_contact_name VARCHAR(100),
    billing_phone VARCHAR(15),
    el_contact_fname VARCHAR(50),
    comments1 TEXT,
    comments2 TEXT,
    comments3 TEXT,
    do_not_text BOOLEAN,
    do_not_email BOOLEAN
);
```

## Invoicing Table
```sql
CREATE TABLE invoicing (
    id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    billing_address VARCHAR(255),
    city VARCHAR(100),
    state CHAR(2),
    zip VARCHAR(10),
    customer_number VARCHAR(50),
    service_type VARCHAR(100),
    contact_fname VARCHAR(50),
    contact_lname VARCHAR(50),
    billing_frequency VARCHAR(50),
    amount DECIMAL(10,2),
    total DECIMAL(10,2),
    overdue BOOLEAN,
    FOREIGN KEY (customer_number) REFERENCES crm(customer_number)
);
```

## Task Management Table
```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    task_name VARCHAR(255),
    due_date DATE,
    start_date DATE,
    priority_status VARCHAR(50),
    percentage_complete INTEGER,
    task_details TEXT,
    people_involved TEXT
);
```

## Calendar Events Table
```sql
CREATE TABLE calendar_events (
    id INTEGER PRIMARY KEY,
    event_name VARCHAR(255),
    start_datetime DATETIME,
    end_datetime DATETIME,
    description TEXT,
    outlook_calendar_id VARCHAR(255),
    preparation_task_id INTEGER,
    FOREIGN KEY (preparation_task_id) REFERENCES tasks(id)
);
```