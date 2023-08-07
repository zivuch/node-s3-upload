# Uploading Files to AWS S3 with NodeJS

Uploading Files to AWS S3 with Multer and Node.js and storing the file information in postgres database

## Create an account on Amazon S3

[Create an account](https://aws.amazon.com/pm/serv-s3/)

## Example .env

In the project directory, you have a .env.example file

```
DB_HOST=
DB_PORT=
DB_USER=
DB_NAME=
DB_PASS=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET=
AWS_REGION=
```

### Database Table

To store the file metadata in your database create this table 
```
create table uploads(
 id serial primary key,
 key varchar(255),
 mimetype varchar(50),
 location varchar(1000),
 originalname varchar(1000)
)
```

### `npm install`

run 'npm i' in both server (root) and client folder  

### `npm start`

run 'npm start' in both server (root) and client folder  

