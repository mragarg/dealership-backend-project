insert into users
    (first_name, last_name, email, password)
values
    ('AdminFirstTest', 'AdminLastTest', 'admin@test.com', 'admin'), -- admin
    ('Lightning', 'McQueen', 'kachow@mcqueen.com', '95McQueen'), -- 95McQueen
    ('Dominic', 'Toretto', 'kachow@mcqueen.com', '2Fast4U'), -- 2Fast4U
    ('Ricky', 'Bobby', 'first@ricky.bobby', 'aintLast') -- aintLast
;

insert into cars
    (year, make, model, price, mileage)
values
    (1970, 'Dodge', 'Charger RT', 77950, 7),
    (2012, 'Chevorlet', 'Corvette ZR1', 59977, 27303),
    (2018, 'Ford', 'Raptor', 61995, 5262),
    (1969, 'Chevorlet', 'Chevelle', 59990, 58721)
;

insert into soldCars
    (car_id, user_id)
values
    (1, 3)
;