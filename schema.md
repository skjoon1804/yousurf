# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
passwordHash	| string    | not null
name   			| string    | not null 
email   		| string    | not null 
dob   			| string    | not null 
favorite   		| list    	| not null