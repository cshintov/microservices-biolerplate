--
-- Table structure for table `patients`
--
DROP TABLE IF EXISTS `patients`;
CREATE TABLE `patients` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `pid`  mediumint(8) unsigned NOT NULL,
  `name` varchar(25) NOT NULL COMMENT 'name',
  `age`  tinyint(3) unsigned NOT NULL,
  `ssn`  bigint unsigned NOT NULL,
  `phone`  bigint unsigned NOT NULL,
  `lang` varchar(25) NOT NULL COMMENT 'facility name',
  `facility` varchar(25) NOT NULL COMMENT 'facility name',
  `patient_type` varchar(25) NOT NULL COMMENT 'patient type',
  `gender` varchar(6) NOT NULL COMMENT 'patient gender',
  `dob` varchar(25) NOT NULL COMMENT 'dob',
  `address` varchar(255) NOT NULL COMMENT 'address',
  PRIMARY KEY (`id`),
  KEY `idx_pid` (`pid`)
) ENGINE=InnoDB;

LOCK TABLES `patients` WRITE;
INSERT INTO `patients` VALUES (1, 7728, 'John Doe', 45, 132456789, 9874563210, 'Spanish', 'Test Facility', 'Native', 'Male', '05/08/1983', 'ZH Healthcare, Cochin, India'); 
UNLOCK TABLES;
