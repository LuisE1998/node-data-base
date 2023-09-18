# test it
1. clone this project
2. execute npm install to install all dependencies
3. Create your data base
4. Create this table
"""
drop table school if exists cascade;

create table school (
	school_id serial primary key,
	school_name varchar(50) unique not null,
	school_email varchar(50) not null 
);

insert into school (school_name,school_email) values ('Colegio A', 'colegioa@prueba.com');
insert into school (school_name,school_email) values ('Colegio B', 'colegiob@prueba.com');

"""
5. Configure client with your credentials
6. Execute npm start