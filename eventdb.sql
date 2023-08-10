-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2023 at 10:22 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diseasedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `diseases`
--

CREATE TABLE `diseases` (
  `id` bigint(20) NOT NULL,
  `ename` varchar(200) NOT NULL,
  `etype` varchar(20) NOT NULL,
  `price` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `visitors_cnt` varchar(10) NOT NULL,
  `diseaseaddress` text NOT NULL,
  `uid` varchar(10) NOT NULL,
  `vid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `diseases`
--

INSERT INTO `diseases` (`id`, `ename`, `etype`, `price`, `description`, `visitors_cnt`, `diseaseaddress`, `uid`, `vid`) VALUES
(1, 'Testing', 'meeting', '100000', 'some description', '500', 'solapur', '1', '1'),
(2, 'testing 2', 'meeting', '500000', 'lkasld;j', '200', 'solapur', '1', '');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `email`, `password`) VALUES
(1, 'balkrishna', 'balkrishna@gmail.com', 'abcd'),
(2, 'undefined', 'balkrishnayemulby@gmail.com', 'abcd'),
(3, 'balkrishna', 'abc@gmail.com', 'abcd'),
(4, 'abc', 'abcd@gmail.com', 'abcd');

-- --------------------------------------------------------

--
-- Table structure for table `patients_doctor`
--

CREATE TABLE `patients_doctor` (
  `id` bigint(20) NOT NULL,
  `vname` varchar(500) NOT NULL,
  `vemail` varchar(50) NOT NULL,
  `vmob` varchar(11) NOT NULL,
  `vadd` text NOT NULL,
  `vpass` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patients_doctor`
--

INSERT INTO `patients_doctor` (`id`, `vname`, `vemail`, `vmob`, `vadd`, `vpass`) VALUES
(1, 'Balkrishna yemul', 'balkrishnayemulby@gmail.com', '09404919907', '33 bramhanath nagar vidi gharkul', 'abcd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `diseases`
--
ALTER TABLE `diseases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients_doctor`
--
ALTER TABLE `patients_doctor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `diseases`
--
ALTER TABLE `diseases`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `patients_doctor`
--
ALTER TABLE `patients_doctor`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
