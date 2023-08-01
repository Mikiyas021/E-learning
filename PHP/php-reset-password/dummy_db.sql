-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 03:09 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `dummy_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `contact` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `contact`, `email`, `password`, `about`) VALUES
(1, 'Mark Cooper', '09123456798', 'mcooper62314@gmail.com', '$2y$10$EV6xjIC478dLe.YDxUoaEedj/J.MGsf65ciVfJkknFldlH0SkBxX6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lacus nec velit hendrerit molestie. Ut nec aliquam arcu. Duis ut libero nec risus egestas viverra non ac risus.'),
(2, 'Claire Blake', '09123654456', 'cblake.6231415@gmail.com', '$2y$10$EV6xjIC478dLe.YDxUoaEedj/J.MGsf65ciVfJkknFldlH0SkBxX6', 'Vestibulum sem dui, venenatis eu eleifend nec, placerat ut enim. Phasellus luctus, lectus aliquet ullamcorper vulputate, justo magna fermentum est, vel vulputate tortor augue vel ex.'),
(3, 'John Smith', '09759874562', 'jsmith231415@gmail.com', '$2y$10$EV6xjIC478dLe.YDxUoaEedj/J.MGsf65ciVfJkknFldlH0SkBxX6', 'Vivamus dictum rutrum dolor, ut pretium mauris tempor elementum. Pellentesque facilisis neque ut efficitur tincidunt.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;
