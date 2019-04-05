insert into users
    (first_name, last_name, email, password)
values
    ('AdminFirstTest', 'AdminLastTest', 'admin@test.com', '$2a$10$EFnriFosFJ0L/hTGDgR1M.hxUtuSFZG9OmOXoXS/3tG.iEMp//YsG'), -- admin
    ('Lightning', 'McQueen', 'kachow@mcqueen.com', '$2a$10$wIrUc9y7dyS38GuZpoueK.NxeSnm3lPj074gK0Gm4EqimNntgPCpi'), -- 95McQueen
    ('Dominic', 'Toretto', 'family_first@toretto.com', '$2a$10$ptfZcq1WfxwQnY54jGSupOKu8Sj/UvkrLKNqWs4.9cAuDg8jWLxQW'), -- 2Fast4U
    ('Ricky', 'Bobby', 'first@ricky.bobby', '$2a$10$pheAXD5wxXT3AXcmf2YFvuwPS0WwXCYfhMCu3IAd08jWvNeucTzDu') -- aintLast
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