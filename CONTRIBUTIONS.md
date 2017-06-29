# Welcome (Please contribute to this document if you think of something)

If you want to make contributions to the D-Guild Webpage please read this document first. To keep the code base clean and easy to read we have some basic rules that needs to be followed. 

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
