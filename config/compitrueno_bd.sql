CREATE DATABASE  IF NOT EXISTS `compitrueno_bd` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `compitrueno_bd`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: compitrueno_bd
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anfitrion`
--

DROP TABLE IF EXISTS `anfitrion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anfitrion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `pais_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_anfitrion_pais1_idx` (`pais_id`),
  KEY `fk_anfitrion_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_anfitrion_pais1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_anfitrion_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anfitrion`
--

LOCK TABLES `anfitrion` WRITE;
/*!40000 ALTER TABLE `anfitrion` DISABLE KEYS */;
/*!40000 ALTER TABLE `anfitrion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `anfitriones_guardados`
--

DROP TABLE IF EXISTS `anfitriones_guardados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anfitriones_guardados` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `anfitrion_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `anfitrion_id` (`anfitrion_id`),
  CONSTRAINT `anfitriones_guardados_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `anfitriones_guardados_ibfk_2` FOREIGN KEY (`anfitrion_id`) REFERENCES `anfitrion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anfitriones_guardados`
--

LOCK TABLES `anfitriones_guardados` WRITE;
/*!40000 ALTER TABLE `anfitriones_guardados` DISABLE KEYS */;
/*!40000 ALTER TABLE `anfitriones_guardados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` text NOT NULL,
  `estrellitas` int(11) NOT NULL,
  `emisor_id` int(11) NOT NULL,
  `receptor_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comentario_usuario1_idx` (`emisor_id`),
  KEY `fk_comentario_usuario2_idx` (`receptor_id`),
  CONSTRAINT `fk_comentario_usuario1` FOREIGN KEY (`emisor_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_usuario2` FOREIGN KEY (`receptor_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,'Es una chica muy agradable',5,2,1),(2,'Marta es muy simpática',4,2,1),(3,'Alba me cae mal',1,1,2);
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiencia`
--

DROP TABLE IF EXISTS `experiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `fecha` date NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `pais_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_experiencia_usuario1_idx` (`usuario_id`),
  KEY `fk_experiencia_pais1_idx` (`pais_id`),
  CONSTRAINT `fk_experiencia_pais1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_experiencia_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiencia`
--

LOCK TABLES `experiencia` WRITE;
/*!40000 ALTER TABLE `experiencia` DISABLE KEYS */;
INSERT INTO `experiencia` VALUES (1,'Japón mola mogollón.','2020-11-27',1,1);
/*!40000 ALTER TABLE `experiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foto`
--

DROP TABLE IF EXISTS `foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `pais_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_foto_pais1_idx` (`pais_id`),
  KEY `fk_foto_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_foto_pais1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_foto_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto`
--

LOCK TABLES `foto` WRITE;
/*!40000 ALTER TABLE `foto` DISABLE KEYS */;
INSERT INTO `foto` VALUES (1,'japon.jpg',1,1);
/*!40000 ALTER TABLE `foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (1,'Japón'),(2,'Zimbabue'),(3,'Eritrea');
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(100) NOT NULL,
  `caducidad` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_token_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_token_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `nacimiento` date NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasenya` varchar(45) NOT NULL,
  `foto` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Marta','Rodriguez','1994-07-31','marta@gmail.com','marta1234',''),(2,'Alba','Martinez','1991-09-22','alba@gmail.com','alba1234','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viajero`
--

DROP TABLE IF EXISTS `viajero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viajero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `presupuesto` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `pais_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_viajero_usuario_idx` (`usuario_id`),
  KEY `fk_viajero_pais1_idx` (`pais_id`),
  CONSTRAINT `fk_viajero_pais1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_viajero_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viajero`
--

LOCK TABLES `viajero` WRITE;
/*!40000 ALTER TABLE `viajero` DISABLE KEYS */;
INSERT INTO `viajero` VALUES (1,'2020-08-15',2,'Viajo a Japon',1,1),(2,'2020-12-04',2,'Viajo a Zimbabue',1,2),(3,'2020-12-03',3,'Viajo a Eritrea',2,3);
/*!40000 ALTER TABLE `viajero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viajeros_guardados`
--

DROP TABLE IF EXISTS `viajeros_guardados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viajeros_guardados` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `viajero_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `viajero_id` (`viajero_id`),
  CONSTRAINT `viajeros_guardados_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `viajeros_guardados_ibfk_2` FOREIGN KEY (`viajero_id`) REFERENCES `viajero` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viajeros_guardados`
--

LOCK TABLES `viajeros_guardados` WRITE;
/*!40000 ALTER TABLE `viajeros_guardados` DISABLE KEYS */;
/*!40000 ALTER TABLE `viajeros_guardados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vista_anfitriones`
--

DROP TABLE IF EXISTS `vista_anfitriones`;
/*!50001 DROP VIEW IF EXISTS `vista_anfitriones`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vista_anfitriones` AS SELECT 
 1 AS `id`,
 1 AS `nombre`,
 1 AS `apellidos`,
 1 AS `nacimiento`,
 1 AS `foto`,
 1 AS `estrellitas`,
 1 AS `ciudad`,
 1 AS `descripcion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vista_anfitriones_guardados`
--

DROP TABLE IF EXISTS `vista_anfitriones_guardados`;
/*!50001 DROP VIEW IF EXISTS `vista_anfitriones_guardados`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vista_anfitriones_guardados` AS SELECT 
 1 AS `id`,
 1 AS `nombre`,
 1 AS `apellidos`,
 1 AS `nacimiento`,
 1 AS `foto`,
 1 AS `estrellitas`,
 1 AS `ciudad`,
 1 AS `descripcion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vista_reviews`
--

DROP TABLE IF EXISTS `vista_reviews`;
/*!50001 DROP VIEW IF EXISTS `vista_reviews`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vista_reviews` AS SELECT 
 1 AS `id`,
 1 AS `nombre`,
 1 AS `apellidos`,
 1 AS `nacimiento`,
 1 AS `foto`,
 1 AS `calificacion`,
 1 AS `descripcion`,
 1 AS `fecha`,
 1 AS `pais_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vista_viajeros`
--

DROP TABLE IF EXISTS `vista_viajeros`;
/*!50001 DROP VIEW IF EXISTS `vista_viajeros`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vista_viajeros` AS SELECT 
 1 AS `id`,
 1 AS `pais_id`,
 1 AS `nombre`,
 1 AS `apellidos`,
 1 AS `foto`,
 1 AS `nacimiento`,
 1 AS `descripcion`,
 1 AS `fecha`,
 1 AS `presupuesto`,
 1 AS `estrellitas`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vista_viajeros_guardados`
--

DROP TABLE IF EXISTS `vista_viajeros_guardados`;
/*!50001 DROP VIEW IF EXISTS `vista_viajeros_guardados`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vista_viajeros_guardados` AS SELECT 
 1 AS `id`,
 1 AS `pais_id`,
 1 AS `nombre`,
 1 AS `apellidos`,
 1 AS `foto`,
 1 AS `nacimiento`,
 1 AS `descripcion`,
 1 AS `fecha`,
 1 AS `presupuesto`,
 1 AS `estrellitas`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vista_anfitriones`
--

/*!50001 DROP VIEW IF EXISTS `vista_anfitriones`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER */
/*!50001 VIEW `vista_anfitriones` AS select `u`.`id` AS `id`,`u`.`nombre` AS `nombre`,`u`.`apellidos` AS `apellidos`,`u`.`nacimiento` AS `nacimiento`,`u`.`foto` AS `foto`,avg(`c`.`estrellitas`) AS `estrellitas`,`a`.`ciudad` AS `ciudad`,`a`.`descripcion` AS `descripcion` from ((`usuario` `u` left join `comentario` `c` on((`u`.`id` = `c`.`receptor_id`))) join `anfitrion` `a` on((`a`.`usuario_id` = `u`.`id`))) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vista_anfitriones_guardados`
--

/*!50001 DROP VIEW IF EXISTS `vista_anfitriones_guardados`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER */
/*!50001 VIEW `vista_anfitriones_guardados` AS select `va`.`id` AS `id`,`va`.`nombre` AS `nombre`,`va`.`apellidos` AS `apellidos`,`va`.`nacimiento` AS `nacimiento`,`va`.`foto` AS `foto`,`va`.`estrellitas` AS `estrellitas`,`va`.`ciudad` AS `ciudad`,`va`.`descripcion` AS `descripcion` from (`vista_anfitriones` `va` join `anfitriones_guardados` `ag`) where (`va`.`id` = `ag`.`anfitrion_id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vista_reviews`
--

/*!50001 DROP VIEW IF EXISTS `vista_reviews`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER */
/*!50001 VIEW `vista_reviews` AS select `u`.`id` AS `id`,`u`.`nombre` AS `nombre`,`u`.`apellidos` AS `apellidos`,`u`.`nacimiento` AS `nacimiento`,`u`.`foto` AS `foto`,format(avg(`c`.`estrellitas`),1) AS `calificacion`,`e`.`descripcion` AS `descripcion`,`e`.`fecha` AS `fecha`,`e`.`pais_id` AS `pais_id` from ((`usuario` `u` left join `comentario` `c` on((`u`.`id` = `c`.`receptor_id`))) join `experiencia` `e` on((`e`.`usuario_id` = `u`.`id`))) group by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vista_viajeros`
--

/*!50001 DROP VIEW IF EXISTS `vista_viajeros`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER */
/*!50001 VIEW `vista_viajeros` AS select `u`.`id` AS `id`,`v`.`pais_id` AS `pais_id`,`u`.`nombre` AS `nombre`,`u`.`apellidos` AS `apellidos`,`u`.`foto` AS `foto`,`u`.`nacimiento` AS `nacimiento`,`v`.`descripcion` AS `descripcion`,`v`.`fecha` AS `fecha`,`v`.`presupuesto` AS `presupuesto`,(select avg(`c`.`estrellitas`) from `comentario` `c` where (`c`.`receptor_id` = `u`.`id`)) AS `estrellitas` from (`usuario` `u` join `viajero` `v` on((`v`.`usuario_id` = `u`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vista_viajeros_guardados`
--

/*!50001 DROP VIEW IF EXISTS `vista_viajeros_guardados`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER */
/*!50001 VIEW `vista_viajeros_guardados` AS select `vv`.`id` AS `id`,`vv`.`pais_id` AS `pais_id`,`vv`.`nombre` AS `nombre`,`vv`.`apellidos` AS `apellidos`,`vv`.`foto` AS `foto`,`vv`.`nacimiento` AS `nacimiento`,`vv`.`descripcion` AS `descripcion`,`vv`.`fecha` AS `fecha`,`vv`.`presupuesto` AS `presupuesto`,`vv`.`estrellitas` AS `estrellitas` from (`vista_viajeros` `vv` join `viajeros_guardados` `vg`) where (`vv`.`id` = `vg`.`viajero_id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-09 16:35:14
