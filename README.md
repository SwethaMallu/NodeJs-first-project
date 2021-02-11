# NodeJs-first-project
Build a basic rest API using Node.js express server, mysql database. 

Implemented primary and foreign key constraints on mysql server with four tables:
1. customer - id(PK), name
2. company - companyid(PK), customerid(FK), companyname
3. products - productid(PK), companyid(FK), productname
4. sales - productid(FK), totalsales

Implemented get, post, put requests.
