-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: mstar_supply
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `entrada`
--

DROP TABLE IF EXISTS `entrada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entrada` (
  `origem` varchar(45) NOT NULL,
  `nf` int unsigned NOT NULL,
  `mercadoria_registro` int unsigned NOT NULL,
  `quantidade` int unsigned NOT NULL,
  `_local` varchar(45) NOT NULL,
  `data_hora` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`origem`,`nf`,`mercadoria_registro`),
  KEY `fk_entrada_mercadoria_idx` (`mercadoria_registro`),
  KEY `_local_idx` (`_local`),
  CONSTRAINT `fk_entrada_mercadoria` FOREIGN KEY (`mercadoria_registro`) REFERENCES `mercadoria` (`registro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrada`
--

LOCK TABLES `entrada` WRITE;
/*!40000 ALTER TABLE `entrada` DISABLE KEYS */;
/*!40000 ALTER TABLE `entrada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mercadoria`
--

DROP TABLE IF EXISTS `mercadoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mercadoria` (
  `registro` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  `fabricante` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`registro`),
  KEY `nome_idx` (`nome`) /*!80000 INVISIBLE */,
  KEY `fabricante_idx` (`fabricante`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mercadoria`
--

LOCK TABLES `mercadoria` WRITE;
/*!40000 ALTER TABLE `mercadoria` DISABLE KEYS */;
INSERT INTO `mercadoria` VALUES (1,'Action','FCCSA','catalisador','Parceria com Albermale, tecnologia de zeólita - gasolina para GLP.'),(2,'AFX','FCCSA','catalisador','Parceria com Albermale, alto rendimento de propeno.'),(3,'AMBER','FCCSA','catalisador','Para refinadores de gasóleo, proporciona máxima produção de gasolina e destilados médios.'),(4,'Denali','FCCSA','catalisador','Parceria com Albermale, liderança no rendimento de butenos. Tecnologia GRANITE.'),(5,'Everest','FCCSA','catalisador','Parceria com Albermale, alto rendimento de butenos e octanagem. Tecnologia GRANITE.'),(6,'Ruby','FCCSA','catalisador','Parceria com Albermale, seletividade a nafta/LCO e maior octanagem.');
/*!40000 ALTER TABLE `mercadoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saida`
--

DROP TABLE IF EXISTS `saida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saida` (
  `destino` varchar(45) NOT NULL,
  `nf` int unsigned NOT NULL,
  `mercadoria_registro` int unsigned NOT NULL,
  `quantidade` int unsigned NOT NULL,
  `_local` varchar(45) NOT NULL,
  `data_hora` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`destino`,`nf`,`mercadoria_registro`),
  KEY `fk_saida_mercadoria1_idx` (`mercadoria_registro`),
  KEY `_local_idx` (`_local`),
  CONSTRAINT `fk_saida_mercadoria1` FOREIGN KEY (`mercadoria_registro`) REFERENCES `mercadoria` (`registro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saida`
--

LOCK TABLES `saida` WRITE;
/*!40000 ALTER TABLE `saida` DISABLE KEYS */;
/*!40000 ALTER TABLE `saida` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-09  2:51:25
