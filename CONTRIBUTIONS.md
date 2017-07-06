# Welcome (Please contribute to this document if you think of something)

If you want to make contributions to the D-Guild Webpage please read this document first. To keep the code base clean and easy to read we have some basic rules that needs to be followed. 

# Issue handling
When starting development on something, please assign yourself to the issue you are doing (If one does not exist, create on).

# Code standard 
Download the ES Lint config, and make sure your editor use it.

# Unit tests
All written code should have unit tests. Commits which make the tests fail will not be accepted. 

# Branches
We will have 2 main branches, master and procution. master is the development branch, all pull requests shall be aimed at master. production is our release branch and is unreachable to everyone except the Admin team. Here our current website with it's features will be and as soon as we've made major improvments on the dev branch we will merge them with production and change the hosted website to the code in master!

Any questions, suggestions or complaints reach out to one of the admins.

# Backend Guidelines
## Creating routes
When creating routes the following convention should be respected:

Example for users:
* get all users: GET /users
* insert new user: POST /users
* get one user: GET /users/:id
* update user: PUT /users/:id
* delete user: DELETE /users/:id

## Database
The database is a mysql database configured to use the ORM (Object-relational mapping). This is some what different then
 a traditional database since it uses an objekt oriented approach. To support this development process we are using 
 a module called Sequalize. (http://docs.sequelizejs.com)
 
 Changes to the database structure is done via the concept of migrations. This means that each change is described in a 
 so called migration file. To be able to use all features please install the following: (http://docs.sequelizejs.com/manual/tutorial/migrations.html)
 
 Then use the generation feature to make the changes you want. More detailed instructions are coming.
