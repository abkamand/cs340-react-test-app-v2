-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2022 at 07:16 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bsg_universe`
--

-- --------------------------------------------------------

--
-- Table structure for table `bsg_cert`
--

CREATE TABLE `bsg_cert` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bsg_cert`
--

INSERT INTO `bsg_cert` (`id`, `title`) VALUES
(1, 'Raptor'),
(2, 'Viper'),
(3, 'Mechanic'),
(4, 'Command');

-- --------------------------------------------------------

--
-- Table structure for table `bsg_cert_people`
--

CREATE TABLE `bsg_cert_people` (
  `cid` int(11) NOT NULL DEFAULT 0,
  `pid` int(11)  NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bsg_cert_people`
--

INSERT INTO `bsg_cert_people` (`cid`, `pid`) VALUES
(1, 7),
(2, 2),
(2, 4),
(3, 8),
(3, 9),
(4, 2),
(4, 3),
(4, 6);

-- --------------------------------------------------------

--
-- Table structure for table `bsg_people`
--

CREATE TABLE `bsg_people` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `homeworld` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bsg_people`
--

INSERT INTO `bsg_people` (`id`, `fname`, `lname`, `homeworld`, `age`) VALUES
(1, 'William', 'Adama', 3, 61),
(2, 'Lee', 'Adama', 3, 30),
(3, 'Laura', 'Roslin', 3, NULL),
(4, 'Kara', 'Thrace', 3, NULL),
(5, 'Gaius', 'Baltar', 3, NULL),
(6, 'Saul', 'Tigh', NULL, 71),
(7, 'Karl', 'Agathon', 1, NULL),
(8, 'Galen', 'Tyrol', 1, 32),
(9, 'Callandra', 'Henderson', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bsg_planets`
--

CREATE TABLE `bsg_planets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `population` bigint(20) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `capital` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bsg_planets`
--

INSERT INTO `bsg_planets` (`id`, `name`, `population`, `language`, `capital`) VALUES
(1, 'Gemenon', 2800000000, 'Old Gemenese', 'Oranu'),
(2, 'Leonis', 2600000000, 'Leonese', 'Luminere'),
(3, 'Caprica', 4900000000, 'Caprican', 'Caprica City'),
(7, 'Sagittaron', 1700000000, NULL, 'Tawa'),
(16, 'Aquaria', 25000, NULL, NULL),
(17, 'Canceron', 6700000000, NULL, 'Hades'),
(18, 'Libran', 2100000, NULL, NULL),
(19, 'Picon', 1400000000, NULL, 'Queestown'),
(20, 'Scorpia', 450000000, NULL, 'Celeste'),
(21, 'Tauron', 2500000000, 'Tauron', 'Hypatia'),
(22, 'Virgon', 4300000000, NULL, 'Boskirk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bsg_cert`
--
ALTER TABLE `bsg_cert`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bsg_cert_people`
--
ALTER TABLE `bsg_cert_people`
  ADD PRIMARY KEY (`cid`,`pid`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `bsg_people`
--
ALTER TABLE `bsg_people`
  ADD PRIMARY KEY (`id`),
  ADD KEY `homeworld` (`homeworld`);

--
-- Indexes for table `bsg_planets`
--
ALTER TABLE `bsg_planets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bsg_cert`
--
ALTER TABLE `bsg_cert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bsg_people`
--
ALTER TABLE `bsg_people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `bsg_planets`
--
ALTER TABLE `bsg_planets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bsg_cert_people`
--
ALTER TABLE `bsg_cert_people`
  ADD CONSTRAINT `bsg_cert_people_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `bsg_cert` (`id`),
  ADD CONSTRAINT `bsg_cert_people_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `bsg_people` (`id`)ON DELETE CASCADE;

--
-- Constraints for table `bsg_people`
--
ALTER TABLE `bsg_people`
  ADD CONSTRAINT `bsg_people_ibfk_1` FOREIGN KEY (`homeworld`) REFERENCES `bsg_planets` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;