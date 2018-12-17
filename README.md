# React Redux with Sagas

// DO NOT HIT DELETE ON ADMIN PAGE, DELETE HITS WRONG ROW
## Setup

1. Create a database named `portfolio`
2. Run the following SQL using the `portfolio` database:

```SQL
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');
```

1. `npm install`
1. `npm run server`
1. `npm run client`

## Notes

## Feature List

For this project I created a basic portfolio for previous weekend challenges.

### Project Page

- [x] Client side route that displays projects that are stored in the database
- [x] Each project should conditionally render a name, description, thumbnail, website, date complete and a tag. Many of the fields are optional, only show properties that aren't null.
- [x] Include a link to GitHub that opens in a new window
- [x] Add your name at the top of the page
- [x] Use Sagas for API requests to your server

### Admin Page

- [x] Client side route that displays a form allowing you to add a new project to your portfolio
- [x] Include a drop down menu with a list of tags
- [x] Send data to the server and notify the user of success or failure
- [ ] List projects by name and allow the user to delete them //NOT COMPLETE
- [x] Include a button that navigates to the project page

### General Tasks

- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features. //only 11
- [x] Comment your code.
- [x] Update this README to include a description of the project in your own words.

## Wireframes
### Project Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/project_page.png" width="560">


### Admin Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/admin_page.png" width="560">

## Stretch Goals

- [ ] Use the GitHub API to get user information to display at the top of the page
- [ ] Improve styling on the page using Material UI
- [ ] Include a form on the admin page for adding new tags
- [ ] Implement additional features of the GitHub API
