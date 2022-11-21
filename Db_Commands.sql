-- for hepl = \?
-- list databases = \l
-- connect to ne bd = \c
-- list all tables = \d

Create table yelp;

Create table restaurants (
  id BIGSERIAL not null primary key,
  name varchar[50] not null,
  location varchar[50] not null,
  price_range INT not null check(price_range >= 1 and price_range<=5)
);

INSERT INTO restaurants(id,name,location,price_range) values(123,'mcdonals', 'new york', 3);

insert into restaurants(name, location, price_range) values('{apanaJayka}','{dheli}',5);
select * from restaurants;

drop table restaurants;

CREATE TABLE reviews(
  id BIGSERIAL NOT NULL primary key,
  restaurant_id  bigint not null references restaurants(id),
  name varchar(50) not null,
  review text not null,
  rating int not null check (rating>=1 and rating<=5)
);

INSERT INTO reviews (restaurant_id,name,review,rating) values('45','kailas','good restaurant',4);


select trunc(AVG(rating),2) from reviews where restaurant_id=106;


select count(rating) from reviews where restaurant_id=106;