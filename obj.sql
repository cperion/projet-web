-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 30, 2019 at 09:07 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geoescape`
--

-- --------------------------------------------------------

--
-- Table structure for table `obj`
--

CREATE TABLE `obj` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(999) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `minZoom` int(11) NOT NULL,
  `img` varchar(999) NOT NULL,
  `taille_img_x` int(11) NOT NULL,
  `taille_img_y` int(11) NOT NULL,
  `indice` text NOT NULL,
  `requirements` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `obj`
--

INSERT INTO `obj` (`id`, `name`, `lat`, `lng`, `minZoom`, `img`, `taille_img_x`, `taille_img_y`, `indice`, `requirements`) VALUES
(1, 'carte du forum romain', 2.35535, 48.867, 18, 'carte_forum_romain.jpg', 192, 108, 'La carte indique un endroit sur le forum romain de Rome.', 1),
(2, 'code statue César', 12.4854, 41.8941, 18, 'code_statue_cesar.jpg', 192, 108, 'Le code portant le nom de la statue.\r\nLa clé réside dans le message.', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `obj`
--
ALTER TABLE `obj`
  ADD UNIQUE KEY `id_2` (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `obj`
--
ALTER TABLE `obj`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
