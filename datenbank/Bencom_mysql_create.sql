CREATE DATABASE bencom;


CREATE TABLE `student` (
	`id` int(255) NOT NULL AUTO_INCREMENT,
	`first_name` varchar(20) NOT NULL,
	`last_name` varchar(20) NOT NULL,
	`birth_date` varchar(20) NOT NULL,
	`birth_place` varchar(20) NOT NULL,
	`nationality` varchar(20) NOT NULL,
	`tel_nr` varchar(20) NOT NULL,
	`mobile_nr` varchar(20) NOT NULL,
	`email` varchar(40) NOT NULL,
	`living_place` varchar(20) NOT NULL,
	`street` varchar(20) NOT NULL,
	`haus_nr` varchar(4) NOT NULL,
	`post_code` varchar(10) NOT NULL,
	`co` varchar(20),
	`password` varchar(255) NOT NULL,
	`university` varchar(40) NOT NULL,
	`add_to_address` varchar(40),
	`personal_id_nr` varchar(40) NOT NULL,
	`role` varchar(10) NOT NULL,
	`sex` varchar(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `company` (
	`id` int(255) NOT NULL AUTO_INCREMENT,
	`company_name` varchar(40) NOT NULL,
	`origin` varchar(20) NOT NULL,
	`found_date` varchar(40) NOT NULL,
	`reg_nr` varchar(20) NOT NULL,
	`street` varchar(20) NOT NULL,
	`haus_nr` varchar(4) NOT NULL,
	`post_code` varchar(10) NOT NULL,
	`city` varchar(20) NOT NULL,
	`tel_nr` varchar(20) NOT NULL,
	`fax_nr` varchar(20) NOT NULL,
	`email_company` varchar(40) NOT NULL,
	`add_to_address` varchar(40),
	`first_name_rep` varchar(20) NOT NULL,
	`last_name_rep` varchar(20) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email_rep` varchar(40) NOT NULL,
	`tel_nr_rep` varchar(20) NOT NULL,
	`mobile_nr_rep` varchar(20) NOT NULL,
	`role` varchar(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `job` (
	`id` int(255) NOT NULL AUTO_INCREMENT,
	`id_company` int(255) NOT NULL,
	`title_job` varchar(40) NOT NULL,
	`days_nr` varchar(20) NOT NULL,
	`per_hour_money` varchar(20) NOT NULL,
	`city` varchar(20) NOT NULL,
	`neighborhood` varchar(20) NOT NULL,
	`persons_nr` varchar(20) NOT NULL,
	`day_name` varchar(20) NOT NULL,
	`hours_nr` varchar(4) NOT NULL,
	`time_from` varchar(20) NOT NULL,
	`time_until` varchar(20) NOT NULL,
	`date` varchar(20) NOT NULL,
	`describtion` varchar(255) NOT NULL,
	`note_and_requirements` varchar(255) NOT NULL,
	`street` varchar(20) NOT NULL,
	`haus_nr` varchar(4) NOT NULL,
	`post_code` varchar(10) NOT NULL,
	`add_to_address` varchar(40),
	PRIMARY KEY (`id`)
);

CREATE TABLE `applied` (
	`id_application` int(255) NOT NULL AUTO_INCREMENT,
	`id_job` int(255) NOT NULL,
	`id_student` int(255) NOT NULL,
	`id_company` int(255) NOT NULL,
	`status` varchar(20) NOT NULL,
	PRIMARY KEY (`id_application`)
);

ALTER TABLE `job` ADD CONSTRAINT `job_fk0` FOREIGN KEY (`id_company`) REFERENCES `company`(`id`);

ALTER TABLE `applied` ADD CONSTRAINT `applied_fk0` FOREIGN KEY (`id_job`) REFERENCES `job`(`id`);

ALTER TABLE `applied` ADD CONSTRAINT `applied_fk1` FOREIGN KEY (`id_student`) REFERENCES `student`(`id`);

ALTER TABLE `applied` ADD CONSTRAINT `applied_fk2` FOREIGN KEY (`id_company`) REFERENCES `company`(`id`);


ALTER TABLE `applied` DROP FOREIGN KEY `applied_fk2`; ALTER TABLE `applied` ADD CONSTRAINT `applied_fk2` FOREIGN KEY (`id_company`) REFERENCES `company`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT; ALTER TABLE `applied` DROP FOREIGN KEY `applied_fk0`; ALTER TABLE `applied` ADD CONSTRAINT `applied_fk0` FOREIGN KEY (`id_job`) REFERENCES `job`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT; ALTER TABLE `applied` DROP FOREIGN KEY `applied_fk1`; ALTER TABLE `applied` ADD CONSTRAINT `applied_fk1` FOREIGN KEY (`id_student`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;


