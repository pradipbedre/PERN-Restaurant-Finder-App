-- for hepl = \?
-- list databases = \l
-- connect to ne bd = \c
-- list all tables = \d

Create database yelp;

Create table restaurants (
  id BIGSERIAL not null primary key,
  name varchar[50] not null,
  location varchar[50] not null,
  price_range INT not null check(price_range >= 1 and price_range<=5)
);


insert into restaurants(name, location, price_range) values('{apanaJayka}','{dheli}',5);
select * from restaurants;



CREATE TABLE reviews(
  id BIGSERIAL NOT NULL primary key,
  restaurant_id  bigint not null references restaurants(id),
  name varchar(50) not null,
  review text not null,
  rating int not null check (rating>=1 and rating<=5)
);

INSERT INTO reviews (restaurant_id,name,review,rating) values('45','kailas','good restaurant',4);

/* it will gives us average rating of each restaurants how many rating rae there  */
select * from restaurants left join 
(select restaurant_id,COUNT(*), TRUNC(AVG(rating),1) 
as average_rating from reviews group by restaurant_id) 
reviews on restaurants.id=reviews.restaurant_id;



 select * from restaurants left join (select restaurant_id,COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id=reviews.restaurant_id where id=45;