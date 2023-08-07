# Uploading Files to AWS S3 with NodeJS

Adding Files to AWS S3 using Multer and Node.js, and saving file details in a PostgreSQL database.

## Create an account on Amazon S3

Create your free account on Amazon S3
[Create an account](https://aws.amazon.com/pm/serv-s3/)

Create your bucket and set Bucket policy to this:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::{nameOfYourBucket}/*"
        }
    ]
}
```

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

