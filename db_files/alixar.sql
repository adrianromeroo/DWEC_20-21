-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb
-- Tiempo de generación: 25-12-2020 a las 14:59:19
-- Versión del servidor: 10.4.17-MariaDB-1:10.4.17+maria~focal
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alixar`
--
CREATE DATABASE IF NOT EXISTS `alixar` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci;
USE `alixar`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `idAlumno` int(11) NOT NULL,
  `alumno` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `puntuacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`idAlumno`, `alumno`, `puntuacion`) VALUES
(1, 'Abraham', 140),
(2, 'Claudia', 230),
(3, 'Javier', 150),
(4, 'Jorge', 180),
(5, 'Marco', 95),
(6, 'Rocio', 100),
(7, 'Pedro', 110),
(8, 'Antonio', 120),
(9, 'Cesar', 140),
(10, 'Juan', 200),
(11, 'David G.', 250),
(12, 'Juanjo', 100),
(13, 'Cristian', 80),
(14, 'Juanma', 140),
(15, 'Salvador', 150),
(16, 'Carlos M.', 130),
(17, 'Fani', 90),
(18, 'Jose Manuel', 210),
(19, 'Carlos P.', 80),
(20, 'David R.', 160),
(21, 'Adrian', 170);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`idAlumno`);
