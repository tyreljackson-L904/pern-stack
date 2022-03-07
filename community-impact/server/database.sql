CREATE DATABASE communityimpact;

CREATE TABLE communityuser
(
    id SERIAL PRIMARY KEY,
    usertype TEXT NOT NULL,
    district INTEGER NOT NULL,
    citycouncilrep TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phonenumber TEXT NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
);