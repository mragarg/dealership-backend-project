create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(200),
    password varchar(500)
);

create table cars (
    id serial primary key,
    year integer,
    make varchar(100),
    model varchar(100),
    price integer,
    mileage integer
);

create table soldCars (
    id serial primary key,
    car_id integer references cars(id),
    user_id integer references users(id)
);