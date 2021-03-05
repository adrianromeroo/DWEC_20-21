CREATE DATABASE IF NOT EXISTS `dwec` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `dwec`;

CREATE TABLE `ghibli_films`
(
  `id` varchar(1024) NOT NULL,
  `title` varchar(1024),
  `description` varchar(1024),
  `director` varchar(1024),
  `producer` varchar(1024),
  `release_date` integer,
  `rt_score` integer,
  `url` varchar(1024),
  CONSTRAINT id PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

CREATE TABLE `ghibli_people`
(
  `id` varchar(1024) NOT NULL,
  `name` varchar(1024),
  `gender` varchar(1024),
  `age` integer,
  `eye_color` varchar(1024),
  `hair_color` varchar(1024),
  CONSTRAINT id PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

CREATE TABLE `ghibli_people_films`
(
  `id_people` varchar(1024) NOT NULL,
  `id_film` varchar(1024) NOT NULL,
  CONSTRAINT id PRIMARY KEY (id_people, id_film)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
