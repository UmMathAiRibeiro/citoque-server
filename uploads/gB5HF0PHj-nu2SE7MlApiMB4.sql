-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: choosepet
-- ------------------------------------------------------
-- Server version	5.5.62

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animal` (
  `id_animal` int(11) NOT NULL AUTO_INCREMENT,
  `nome_animal` varchar(100) DEFAULT NULL,
  `familia_animal` varchar(50) DEFAULT NULL,
  `raca_animal` varchar(100) DEFAULT NULL,
  `idade_animal` int(11) DEFAULT NULL,
  `sexo_animal` varchar(20) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `fk_id_usuario` int(11) DEFAULT NULL,
  `imagem_animal` varchar(300) DEFAULT NULL,
  `adotado_animal` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_animal`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
INSERT INTO `animal` VALUES (1,'noah','Cachorro','vira-lata',6,'Macho',NULL,1,'noah.jpg',0),(2,'noah2','Hamster','vira-prato',10,'Macho','123456',1,'noah.png',1),(3,'coelho','Coelho','coelho',10,'Fêmea','1234',1,'coelho.jpg',0),(4,'kako','Cachorro','vira-lata',8,'Macho','1999999',1,'noah.jpg',1),(5,'kako2','Gato','viralata',10,'Fêmea','199999',1,'noah.jpg',0);
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog` (
  `id_blog` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_blog` varchar(100) DEFAULT NULL,
  `imagem_blog` varchar(100) DEFAULT NULL,
  `noticia_blog` varchar(500) DEFAULT NULL,
  `link_blog` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_blog`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'Corrida de Corgi','corgicorrendo.jpg','Centenas de pets da raça Corgi participaram da segunda edição do evento, realizado neste domingo, 26, em uma pista de corrida de cavalos nos Estados Unidos','https://veja.abril.com.br/galeria-fotos/fotos-a-corrida-de-caes-corgi-nationals-27-05-2019/'),(2,'Botsuana autoriza caça de elefante','elefante.jpg','Aumento da população dos animais coloca em risco a produção e a segurança de pequenos agricultores, alega o governo','https://veja.abril.com.br/mundo/botsuana-autoriza-caca-de-elefantes-em-seu-territorio/'),(3,'Morre Grumpy Cat, gata que virou meme','grumpy.jpg','Animal de 7 anos teve complicações decorrentes de uma infecção no trato urinário','https://veja.abril.com.br/entretenimento/morre-grumpy-cat-gata-mal-humorada-que-virou-celebridade-na-internet/');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perdidos`
--

DROP TABLE IF EXISTS `perdidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perdidos` (
  `id_animal` int(11) NOT NULL AUTO_INCREMENT,
  `nome_animal` varchar(100) DEFAULT NULL,
  `familia_animal` varchar(50) DEFAULT NULL,
  `raca_animal` varchar(100) DEFAULT NULL,
  `sexo_animal` varchar(20) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `texto_perdido` varchar(250) DEFAULT NULL,
  `fk_id_usuario` int(11) DEFAULT NULL,
  `imagem_animal` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_animal`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perdidos`
--

LOCK TABLES `perdidos` WRITE;
/*!40000 ALTER TABLE `perdidos` DISABLE KEYS */;
INSERT INTO `perdidos` VALUES (1,'kako','Cachorro','vira-lata','Macho','19999',NULL,1,'noah.jpg'),(2,'theodor','Cachorro','viralata','Macho','1000',NULL,1,'noah.jpg'),(6,'alice','Gato','siamês','Fêmea','19994798392',NULL,1,'patricia.jpg'),(8,'kika','Cachorro','bace','Fêmea','19999',NULL,1,'tita.jpg'),(10,'dob','Cachorro','doberman','Macho','1900000','perdido perto da rua tal',3,'noah.jpg');
/*!40000 ALTER TABLE `perdidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produtos` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(100) DEFAULT NULL,
  `preco_produto` float DEFAULT NULL,
  `categoria_produto` varchar(45) DEFAULT NULL,
  `img_produto` varchar(200) DEFAULT NULL,
  `link_empresa` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (4,'argola',12,'Brinquedos','argola.jpg','https://www.franciscajoias.com.br/argola'),(5,'macaco de pelucia',10,'Brinquedos','macacopelucia.jpg','https://pt.wikipedia.org/wiki/Macaco');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `login_usuario` varchar(100) DEFAULT NULL,
  `senha_usuario` varchar(512) DEFAULT NULL,
  `contato_usuario` varchar(20) DEFAULT NULL,
  `endereco_usuario` varchar(255) DEFAULT NULL,
  `data_nasc_usuario` date DEFAULT NULL,
  `privilegio_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'admin','c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec','0',NULL,NULL,1),(2,'user','b14361404c078ffd549c03db443c3fede2f3e534d73f78f77301ed97d4a436a9fd9db05ee8b325c0ad36438b43fec8510c204fc1c1edb21d0941c00e9e2c1ce2','19239213',NULL,NULL,2),(3,'gabriel','3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2','19988509231','rua kkk','2019-10-03',2);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venda` (
  `id_venda` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_produto` int(11) DEFAULT NULL,
  `fk_id_usuario` int(11) DEFAULT NULL,
  `data_venda` date DEFAULT NULL,
  PRIMARY KEY (`id_venda`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
INSERT INTO `venda` VALUES (1,3,2,'2019-08-12'),(2,3,2,'2019-08-12');
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'choosepet'
--

--
-- Dumping routines for database 'choosepet'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-20 22:44:32
