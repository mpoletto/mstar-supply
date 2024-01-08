-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mstar_supply
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mstar_supply
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mstar_supply` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin ;
USE `mstar_supply` ;

-- -----------------------------------------------------
-- Table `mstar_supply`.`mercadoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mstar_supply`.`mercadoria` (
  `registro` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(32) NOT NULL,
  `fabricante` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`registro`),
  INDEX `nome_idx` (`nome` ASC) INVISIBLE,
  INDEX `fabricante_idx` (`fabricante` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mstar_supply`.`entrada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mstar_supply`.`entrada` (
  `origem` VARCHAR(45) NOT NULL,
  `nf` INT UNSIGNED NOT NULL,
  `mercadoria_registro` INT UNSIGNED NOT NULL,
  `quantidade` INT UNSIGNED NOT NULL,
  `_local` VARCHAR(45) NOT NULL,
  `data_hora` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`origem`, `nf`, `mercadoria_registro`),
  INDEX `fk_entrada_mercadoria_idx` (`mercadoria_registro` ASC) VISIBLE,
  INDEX `_local_idx` (`_local` ASC) VISIBLE,
  CONSTRAINT `fk_entrada_mercadoria`
    FOREIGN KEY (`mercadoria_registro`)
    REFERENCES `mstar_supply`.`mercadoria` (`registro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mstar_supply`.`saida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mstar_supply`.`saida` (
  `destino` VARCHAR(45) NOT NULL,
  `nf` INT UNSIGNED NOT NULL,
  `mercadoria_registro` INT UNSIGNED NOT NULL,
  `quantidade` INT UNSIGNED NOT NULL,
  `_local` VARCHAR(45) NOT NULL,
  `data_hora` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`destino`, `nf`, `mercadoria_registro`),
  INDEX `fk_saida_mercadoria1_idx` (`mercadoria_registro` ASC) VISIBLE,
  INDEX `_local_idx` (`_local` ASC) VISIBLE,
  CONSTRAINT `fk_saida_mercadoria1`
    FOREIGN KEY (`mercadoria_registro`)
    REFERENCES `mstar_supply`.`mercadoria` (`registro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
