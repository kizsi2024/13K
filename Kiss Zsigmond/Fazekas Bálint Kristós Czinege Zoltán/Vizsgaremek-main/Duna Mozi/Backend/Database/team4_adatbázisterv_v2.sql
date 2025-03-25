

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `dunamozi` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci ;
USE `dunamozi` ;

CREATE TABLE IF NOT EXISTS `dunamozi`.`alkalmazott` (
  `idalkalmazott` INT NOT NULL AUTO_INCREMENT,
  `alkalmazottNev` VARCHAR(200) NULL,
  `jelszo` BLOB(100) NULL,
  `email` VARCHAR(200) NULL,
  `admin` INT NULL,
  `token` TEXT NULL,
  PRIMARY KEY (`idalkalmazott`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `dunamozi`.`kategoria` (
  `kategoriaid` INT NOT NULL AUTO_INCREMENT,
  `kategorinev` VARCHAR(100) NULL,
  PRIMARY KEY (`kategoriaid`)
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `dunamozi`.`filmek` (
  `idfilmek` INT NOT NULL AUTO_INCREMENT,
  `filmnev` VARCHAR(200) NULL,
  `foszereplok` LONGTEXT,
  `filmdescription` LONGTEXT NULL,
  `filmhossz` VARCHAR(10) NULL,
  `filmkorhatár` INT NULL,
  `film_kategoriaid` INT NOT NULL,
  `film_keplink` TEXT,
  PRIMARY KEY (`idfilmek`),
  INDEX `fk_filmek_kategoria1_idx` (`film_kategoriaid`),
  CONSTRAINT `fk_filmek_kategoria1`
    FOREIGN KEY (`film_kategoriaid`)
    REFERENCES `dunamozi`.`kategoria` (`kategoriaid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `dunamozi`.`vetitoterem` (
  `idtetitoterem` INT NOT NULL AUTO_INCREMENT,
  `terem` VARCHAR(255) NULL,
  PRIMARY KEY (`idtetitoterem`)
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `dunamozi`.`vetitesek` (
  `idvetitesek` INT NOT NULL AUTO_INCREMENT,
  `vetitesDATUM` DATETIME NULL,
  `vetites_idtetitoterem` INT NOT NULL,
  `vetites_idfilmek` INT NOT NULL,
  PRIMARY KEY (`idvetitesek`),
  INDEX `fk_vetitesek_vetitoterem1_idx` (`vetites_idtetitoterem`),
  INDEX `fk_vetitesek_filmek1_idx` (`vetites_idfilmek`),
  CONSTRAINT `fk_vetitesek_vetitoterem1`
    FOREIGN KEY (`vetites_idtetitoterem`)
    REFERENCES `dunamozi`.`vetitoterem` (`idtetitoterem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_vetitesek_filmek1`
    FOREIGN KEY (`vetites_idfilmek`)
    REFERENCES `dunamozi`.`filmek` (`idfilmek`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `dunamozi`.`ulesek` (
  `ules_id` INT NOT NULL AUTO_INCREMENT,
  `vetitoterem_idtetitoterem` INT NOT NULL,
  `vetites_vetitesID` INT NOT NULL,
  `sor` VARCHAR(1) NULL,
  `szekszam` INT NULL,
  `foglalt` TINYINT NULL,
  PRIMARY KEY (`ules_id`),
  INDEX `fk_ulesek_vetitoterem1_idx` (`vetitoterem_idtetitoterem`),
  CONSTRAINT `fk_ulesek_vetitoterem1`
    FOREIGN KEY (`vetitoterem_idtetitoterem`)
    REFERENCES `dunamozi`.`vetitoterem` (`idtetitoterem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `dunamozi`.`jegyek` (
  `jegyid` INT NOT NULL AUTO_INCREMENT,
  `jegynev` VARCHAR(100),
  `ar` INT NOT NULL,
  PRIMARY KEY(`jegyid`)
);

CREATE TABLE IF NOT EXISTS `dunamozi`.`vasarlasok` (
  `vasarlasid` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255),
  `vetites` INT NOT NULL,
  `ulesek` TEXT,
  `fizetett(Ft)` INT,
  `jegyek` TEXT,
  PRIMARY KEY(`vasarlasid`)
);

CREATE TABLE IF NOT EXISTS `dunamozi`.`esemenyek`(
  `esemenyid` INT NOT NULL AUTO_INCREMENT,
  `esemenynev` VARCHAR(100),
  `datum` DATE NULL,
  `kep_url` TEXT,
  PRIMARY KEY(`esemenyid`)
);

CREATE TABLE IF NOT EXISTS `dunamozi`.`osszekoto`(
  `eid` INT NOT NULL,
  `fid` INT NOT NULL
);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO jegyek VALUES(NULL,"Gyermek (0-17)",1000),(NULL,"Felnőtt (18-64)",4000),(NULL,"Nyugdíjas (+65)",1500),(NULL,"Családi (2db felnőtt 2db gyermek)",7600),(NULL,"Csoportos (10db felnött)",30000);

SELECT
  vetitesek.`idvetitesek`,vetitesek.`vetitesDATUM`,filmek.filmnev,vetitoterem.`terem`,ulesek.sor, ulesek.szekszam, ulesek.foglalt
  FROM
  vetitesek
  INNER join filmek ON vetitesek.`vetites_idfilmek` = filmek.idfilmek
  INNER JOIN vetitoterem ON vetitesek.`vetites_idtetitoterem` = vetitoterem.`idtetitoterem`
  INNER JOIN ulesek ON vetitoterem.`idtetitoterem` = ulesek.`vetitoterem_idtetitoterem`;

INSERT INTO kategoria VALUES (NULL,"Akció"),(NULL,"Animációs"),(NULL,"Autóversenyzős"),(NULL,"Áldokumentumfilmek"),(NULL,"Börtönfilmek"),(NULL,"Bünügyi"),(NULL,"Családi"),(NULL,"Dokumentumfilmek"),(NULL,"Életrajzi"),(NULL,"Fantasi"),(NULL,"Filmdráma"),(NULL,"Filmszatíra"),(NULL,"Harcmüvészeti"),(NULL,"Háborus"),(NULL,"Horror"),(NULL,"Kaland"),(NULL,"Kalózos"),(NULL,"Kémfilmek"),(NULL,"Musical"),(NULL,"Romantikus"),(NULL,"Sci-Fi"),(NULL,"Thriller"),(NULL,"Történelmi"),(NULL,"Vígjáték"),(NULL,"Western");
INSERT INTO `vetitoterem` VALUES (NULL,"1-es terem"),(NULL,"2-es terem"),(NULL,"3-mas terem"),(NULL,"4-es terem");
INSERT INTO `filmek` (`idfilmek`,`filmnev`, `foszereplok`, `filmdescription`, `filmhossz`, `filmkorhatár`, `film_kategoriaid`, `film_keplink`) VALUES
(NULL,"Star Trek I", "William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Két és fél év telt el azóta, hogy Kirk befejezte ötéves parancsnoki szolgálatát a USS Enterprise-on. Az Enterprise-t felújították, és James T. Kirköt előléptették admirálissá, így ő a Csillagflotta egyik parancsnoka. Egy masszív energiafelhő formájában megjelenő idegen erőt érzékelnek klingon felségterületen, amely a Föld felé halad. A felhő útja során elpusztít három klingon hajót, és a föderáció Epszilon-9 megfigyelő űrállomását. A flottaparancsnokság úgy dönt, az Enterprise-t bízza meg azzal, hogy kapcsolatba lépjen a jelenséggel.","132 perc",12,21,"https://upload.wikimedia.org/wikipedia/en/d/df/Star_Trek_The_Motion_Picture_poster.png"),
(NULL,"Star Trek II","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Mindeközben a USS Reliant (NCC-1864) Miranda osztályú kutatóhajó a Genezis projekt végcéljául szolgáló bolygót, a Ceti Alpha VI-ot kutatja, dr. Carol Marcus utasítására. A projekt célja: M típusú, lakható bolygót teremteni akármilyen lakhatatlan planétából. A bolygó átvizsgálása közben Terrell kapitány és társa, az Enterprise korábbi biztonsági főnöke, Chekov első tiszt egy űrhajó roncsait találja meg, a Botany Bay az. Chekov felismeri a roncsokat, s menekülnének, ám Khan és Augmentjei elfogják őt és Terrell kapitányt. Khan elmagyarázza, hogy a bolygó, melyen tartózkodnak a Ceti Alpha V, élővilágát azonban elpusztította a szomszédos Ceti Alpha VI bolygó felrobbanása. Khan és emberei csak nagy nehézségek árán maradtak életben a bolygón. Khan rájön, hogy Chekovék összetévesztették a bolygókat, ezért érdekli, hogy miért jöttek ide, de mivel vonakodnak válaszolni, egy parazitával manipulálja áldozatai agyát, így megtudja, hogy Terrell és Chekov miért vannak a bolygón."," 113 perc",12,21,"https://m.media-amazon.com/images/M/MV5BNmZiZmM2OTUtZDlmOC00YzYyLThkMGEtZWFkMjJmM2EwZDVkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Star Trek III","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Mindeközben Kirk fia, David Marcus és Saavik hadnagy a USS Grissom nevű kutatóhajón tartózkodnak, és a Genesis bolygót tanulmányozzák, ami a második film végén keletkezett. Ők ketten lesugároznak a bolygó felszínére, hogy a terraformáció stádiumát tanulmányozzák. A bolygón töltött idő alatt felfedezik, hogy Spock teste újjászületett a Genesis effektus hatására, habár emlékei nincsenek, és egy gyermek testi és szellemi szintjén van. Marcus, Saavik unszolására elismeri, hogy instabil proto-anyagot alkalmazott a Genesis készülék építése közben, hogy így áthidaljon néhány problémát. Enélkül ugyanis a Genesis folyamat évekbe tellett volna, vagy egyáltalán le sem játszódott volna.","105 perc",12,21,"https://m.media-amazon.com/images/M/MV5BMmFiMTczYjgtMWQwOC00MjFlLWFlZjUtMjJjNTcxNjAzY2Q1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Star Trek IV","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Egy óriási idegen szonda érkezik a Földhöz, és különlegesen erős jeleket sugároz a planétára, melynek következtében elszívja a közelben lévő hajók energiáját, és felforralja a tengereket. James T. Kirk admirális és csapata éppen Spockért megy a Vulcanra, amikor értesülnek a flottától a Földnél kialakult helyzetről. Kirk tudja, hogy a flotta nem fogja örömmel fogadni, hiszen a USS Enterprise megsemmisült, ezért az előző kalandból zsákmányolt klingon hajóval indulnak a Föld felé.","119 perc",12,21,"https://m.media-amazon.com/images/M/MV5BZmU3ZGE3NzEtYTdmYi00YTYxLWIxYTItZGY5YjFlOTA2NWI3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Star Trek V","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","A Star Trek IV: A hazatérésben történtek után az Enterprise legénysége megérdemelt pihenését tölti, miközben az űrhajót éppen javítják. James T. Kirk Yosemite-nél pihen, de közben két igazi kihívást is teljesíteni akar: megmászni a Kapitány-csúcsot, és megtanítani Spockot tábori dalokra. Szerencsétlenségükre a pihenésük hamar véget ér, amikor a legénységet a távoli Nimbus III-hoz vezénylik túszmentés céljából.","107 perc",12,21,"https://m.media-amazon.com/images/M/MV5BZmUzNjYzZDEtMWQ1Ny00OGIxLTk4MTktMzU5NTZmZjk5MTQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Star Trek VI","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Nyugtalanság keríti hatalmába a klingon anyabolygó, Qo'nos (a Kronosz) lakosait, miután a Praxis nevű holdjuk felrobban. A hold kulcsfontosságú volt az energia előállítása szempontjából, ráadásul a robbanás beszennyezte a Kronoszt is. Az előrejelzések szerint ez 50 évre tönkretette a légkört. Mivel a planéta már nem képes elegendő oxigénnel ellátni a lakosságot, a Klingon Birodalom úgy dönt, hogy békét köt a Föderációval. A Csillagflotta a USS Enterprise-t küldi, hogy vegyék fel a kapcsolatot Gorkon kancellárral, és kísérjék a Földre. Ez az ötlet nem tetszik James T. Kirk kapitánynak, hiszen fiát egy klingon ölte meg.","113 perc",12,21,"https://m.media-amazon.com/images/M/MV5BYzJiZDdmODQtMDM0Yi00ZTcwLWJjMjItM2QxOWJjZDdmYmQ5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Star Trek VII","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány"," James T. Kirk és Montgomery Scott kapitányok, továbbá Pavel Andrejevics Csekov parancsnok részt vesznek a következő csillaghajó, a USS Enterprise-B ünnepélyes megkeresztelésén, de ez tragédiával végződik. 78 évvel később vagyunk, a USS Enterprise-D fedélzetén. Worf-ot előléptetik parancsnokhelyettessé, a legénység a holofedélzeten ünnepli, eközben Jean-Luc Picard kapitány szomorú híreket kap otthonról. Az Enterprise később vészjelzéseket fog az Amargosa nevű csillagnál keringő űrállomásról. A megérkezéskor az űrállomás teljesen elhagyatottnak tűnik megtámadták a romulánok, akik a tőlük ellopott trilítiumot keresték. Worf parancsnokhelyettes egy túlélőt talál: Sorant, akivel visszatér az Enterprise fedélzetére. Soran biztosítja Picard-t, hogy jól van, de sürgősen vissza kell térnie az űrállomásra, hogy befejezhesse a kísérletét. Picard ebbe beleegyezik, de azt mondja, csak akkor térhet vissza, ha előbb az állomást tüzetesen átvizsgálták.","118 perc",12,21,"https://m.media-amazon.com/images/M/MV5BOTk5Mjg4MzktZTczNC00ZWI3LWFlNjgtNjgwZDQwOGU5NmQ3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Star Trek VIII","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","A USS Enterprise-D megsemmisülése után a hajó legénységét, Worf kivételével, áthelyezik az újonnan épített Sovereign osztályú csillaghajóra, a USS Enterprise-E-re.A film elején egy Borg kockahajó belép a föderációs űrbe és a Föld felé veszi az irányt. A közelgő veszély ellenére a Csillagflotta parancsnoksága úgy dönt, hogy a legfejlettebb hajójukat, az Enterprise-t nem a Földhöz vezénylik, a bolygó védelmére, hanem a Romulán semleges zónához küldik járőrözni, nehogy a Romulánok kihasználják a tökéletes alkalmat egy, a Föderáció elleni támadásra.","111 perc",12,21,"https://m.media-amazon.com/images/M/MV5BYzMzZmE3MTItODYzYy00YWI5LWFkNWMtZTY5NmU2MDkxYWI1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Star Trek IX","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Egy diplomáciai küldetés során a USS Enterprise értesül arról, hogy Data parancsnokhelyettes megvadult egy megfigyelési küldetés során a Ba’ku bolygón.","103 perc",12,21,"https://upload.wikimedia.org/wikipedia/en/3/3c/Star_Trek_Insurrection.png"),
(NULL,"Star Trek X","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Miközben a USS Enterprise-E legénysége a frissen összeházasodott William T. Rikernak és Deanna Troinak búcsú estéjét tartják, különös jeleket fognak a Romulán Semleges Zónához közel eső Kolarus III nevű bolygóról, ahol is találnak egy Data parancsnokhelyetteshez hasonlító android darabjait.","116 perc",12,21,"https://upload.wikimedia.org/wikipedia/en/9/9c/Star_Trek_Nemesis_poster.jpg"),
(NULL,"Star Trek XI","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","2233-ban a USS Kelvin föderációs csillaghajó egy különös kozmikus jelenség kivizsgálását kezdi meg. Ekkor váratlanul egy hatalmas és félelmetes, polipszerű űrhajó bukkan elő egy szingularitásból, amihez képest a föderáció helyszínen lévő járműje teljesen eltörpül.","127 perc",12,21,"https://m.media-amazon.com/images/I/81d08CBsAGL._AC_UF894,1000_QL80_.jpg"),
(NULL,"Star Trek XII","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Az USS Enterprise-t a Nibiru bolygóra küldik, hogy megfigyeljenek egy űrutazás előtti civilizációt. Kirk és Spock megpróbálják megmenteni a lakosokat egy közelgő vulkánkitöréstől, amely mindannyiukat megölhetné. Amikor Spock élete veszélybe kerül, James T. Kirk kapitány megszegi az Elsődleges irányelvet, és a helyiek meglátják a Spock megmentésére igyekvő Enterprise-t. Miután visszahívják őket a Földre, Kirköt elsőtisztté fokozzák le, míg Christopher Pike admirális visszaveszi az Enterprise parancsnokságát.","133 perc",12,21,"https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_.jpg"),
(NULL,"Star Trek XIII","William Shatner mint: James T. Kirk kapitány, Leonard Nimoy  mint: Spock elsötiszt, DeForest Kelley  mint: Dr. Leonard McCoy hajóorvos, James Doohan  mint: Montgomery Scott főgépész, George Takei  mint: Hikaru Sulu kormányos, Walter Koenig  mint: Pavel Chekov navigátor, tudományos tiszt, Nichelle Nichols  mint: Uhura kommunikációs tiszt, Majel Barrett  mint: Dr. Christine Chapel fönövér, Grace Lee Whitney mint: Janice Rand transzporter fönök, Persis Khambatta  mint:  Ilia hadnagy, Stephen Collins  mint:  Willard Decker parancsnok, Mark Lenard  mint: Klingon kapitány","Az USS Enterprise-t ötéves útja felénél egy diplomáciai küldetést teljesít; nem sok sikerrel. Az Abronath ereklye végül az ő kezükben marad. Így térnek Yorktownba, a Föderáció legújabb és legnagyobb mesterséges bolygójára.","125 perc",12,21,"https://m.media-amazon.com/images/M/MV5BNDc2YThlMTgtN2M3Yi00YzkxLWE4MDQtMWJmYmZiNTNjNjJlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"),
(NULL,"Doctor who - Kivagy Doki?",NULL,"Rose Tyler véres, megmagyarázhatatlan események tanúja lesz, azonban felbukkan egy rejtélyes férfi - aki magát nemes egyszerűséggel Doktornak nevezi - és aki nem csak őt menti meg. Rose rövid időn belül egy lázas és mozgalmas csata közepén találja magát, ahol a tét nem más, mint a Föld és az emberiség megmentése.","45 perc",15,16,"https://upload.wikimedia.org/wikipedia/en/9/94/Doctor_Who_Series_1.jpg"),
(NULL,"Indiana Jones és a kristálykoponya királysága",NULL,"Javában dúl a hidegháború. Indiana Jones tevékenysége is szemet szúr a hatóságoknak, a régészprofesszort ki akarják rúgni az egyetemről. Jones találkozik az ifjú Mutt-tal, aki a segítségével meg akarja szerezni a legendás kincset, Akator kristálykoponyáját. A két kincsvadász Peruba utazik, ám kiderül, hogy a szovjetek személyében vetélytársuk is akad. Az oroszok ugyanis azt hiszik, hogy a koponya segítségével leigázhatják a világot. Csapatukat a jéghideg szépség, Irina Spalko vezeti. Indiana és Mutt meg akarja akadályozni, hogy a varázslatos erejű koponya az ellenség kezébe kerüljön.","123 perc",15,16,"https://marvin.bline.hu/product_images/382/F10411.JPG"),
(NULL,"Tomb Raider",NULL,"A rettenthetetlen, független fiatal nő, Lara Croft kislány volt még, mikor édesapja, a különc kalandor nyomtalanul eltűnt. Most, 21 évesen, csak él bele a világba; East London nem túl bizalomgerjesztő utcáit rója biciklis futárként, miközben alig telik neki lakbérre, és alig ér oda időben a főiskolai előadásokra. Mindenáron a saját lábán kíván megállni, így nem hajlandó átvenni apja cégbirodalmának irányítását, ahogy az is szent meggyőződése, hogy Lord Croft még él. Hét év eltelte és a tényekkel való folytonos szembesítés dacára Lara elindul, hogy egyszer s mindenkorra megoldja az apja halálát övező rejtélyt. Hátrahagyva addigi életét, Lara apja utolsó ismert tartózkodási helyét veszi célba: egy mesebeli sírkamrát, ami egy legendás szigeten, valahol Japán mellett található. Küldetésével nagy fába vágja a fejszéjét; már a sziget megközelítése is veszedelmes kalandot ígér. A tét nagyobb nem is lehetne Lara számára, aki a kedvezőtlen esélyekre fittyet hányva, éles eszére és tántoríthatatlanságára támaszkodva feszegeti tűrőképessége határait, útban az ismeretlen felé.","113 perc",18,1,"https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg"),
(NULL,"BATMAN",NULL,"Batman (Robert Pattinson) már két éve rója Gotham City utcáit, és üldözi a város gonosztevőit – így hát egyre mélyebbre merül a sikátorok sötétségébe. Már alig néhány emberben bízhat: mindenfelől korrupt hivatalnokok és romlott nagymenők veszik körül. csupán Alfred Pennyworth-szel (Andy Serkis) és Jame Gordon hadnaggyal (Jeffrey Wright) oszthatja meg a titkait. Egyedül maradt: rajta kívül nincs más, aki bosszút állhatna a város lakóinak sérelmeiért. Egy gyilkos épp Gotham elitjét veszi célba, és a szadista machinációi után hátrahagyott titokzatos nyomok a világ legnagyobb detektívjét a város alvilágába vezetik. Ott találkozik Selina Kyle-lal, vagyis Macskanővel (Zoë Kravitz), Oswald Cobblepottal, a Pingvinnel (Colin Farrell), Carmine Falcone-nal (John Turturro) és Edward Nashtonnal, Rébusszal (Paul Dano). A bizonyítékok azonban a saját otthona felé vezetik, és minél jobban szűkül a gyanúsítottak köre, annál félelmetesebbé válik. Batmannek új szövetségeket kell kötnie, le kell lepleznie az igazi bűnöst, és meg kell szabadítania Gothamet a hatalmaskodás és a korrupció pestisétől.","176 perc",18,1,"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"),
(NULL,"Shrek",NULL,"Hol volt, hol nem volt, egy messzi mocsárban, meghitt magányban élt egyszer egy morcos ogre, akit Shreknek hívtak. Ám a zöld szörny nyugalmát és életét egy napon fenekestül felbolygatta egy különös esemény: mesebeli lények lepték el a mocsarat – és lepték meg gyanútlan hősünket. A három vak egér futkározott a vacsoráján, a nagy, gonosz farkas feküdt az ágyában, a hét törpe Hófehérke koporsóját tette az asztalára, kunyhója előtt pedig ott nyüzsgött a három hajléktalan kismalac, és mindenféle más varázslatos figurák, akiket a gonosz Farquaad nagyúr űzött el otthonukból. Shrek tehát elment a nagyúrhoz, hogy visszakövetelje a mocsarát, de ehhez előbb meg kell mentenie a szörnyű tűzokádó sárkány karmaiból Fiona királylányt, hogy Farquaad feleségül vehesse, és így király lehessen. A nagy kalandban társa is akad az ogrének: a szószátyár Szamár, aki bármit megtenne Shrekért, egyvalamit kivéve: a világ minden kincséért sem hajlandó befogni a száját. Hamarosan kiderül, hogy a sárkánynál sokkal nagyobb problémát jelent Fiona különös titka...","94 perc",6,2,"https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"),
(NULL,"Kung Fu Panda",NULL,"A rendkívül lelkes, eléggé nagydarab és kissé esetlen Po a legnagyobb kungfurajongó, ami nem éppen előny, ha az ember (vagyis panda) a családi levesbüfében dolgozik naphosszat. Ám váratlanul őt választják ki arra, hogy teljesítsen egy ősi jövendölést, így Po álma valóra válik: bekerül a kungfu világába, és együtt gyakorolhat bálványaival, a legendás Őrjöngő Ötössel: Tigrissel, Daruval, Sáskával, Viperával és Majommal, gurujuk, Shifu mester vezetésével. Hőseink nem is sejtik, hogy a bosszúszomjas és alattomos hóleopárd, Tai Lung már úton van feléjük, és Pónak kell mindenkit megvédenie a közelgő veszélytől. Vajon valóra tudja váltani az álmát, és igazi kungfuhős lesz belőle? Po teljes szívével – és terjedelmével – a feladat megoldásán fáradozik, s végül rájön, hogy a leggyengébb pontjai lesznek a legnagyobb erényei.","92 perc",6,2,"https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"),
(NULL,"Need for Speed",NULL,"Az autószerelő Tobey versenyautókban utazik. Amikor a csőd szélére kerül, vonakodva, de összeáll a gazdag és arrogáns egykori NASCAR-pilótával, Dino Brewsterrel. A fickó azonban átveri, és Tobey ártatlanul rács mögé kerül. Két évvel később szabadul, és bosszút akar állni Dinón. Ehhez kapóra jön a hírhedt De Leon-futam. Ám ahhoz, hogy időben befusson a versenyre, minden akadályt? beleértve a zsarukat és Dino embereit - le kell küzdenie a keleti parttól a nyugati partig. A népszerű videojáték alapján.","130 perc",18,3,"https://m.media-amazon.com/images/M/MV5BZTliZGM2NzUtYjQ0My00YWM4LTg1NjUtYTNjMzFkNzczYTAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"),
(NULL,"Halálos iramban",NULL,"Dominic az egyik vezéralakja a Los Angeles utcáin rendszeresen lezajló illegális autóversenyeknek. Ezeken a felturbózott járgányokkal felvonuló helyi vagány csávók bebizonyíthatják a csajoknak, hogy igenis van vér a pucájukban. Szuper kocsik száguldoznak az utakon, és ezt persze a helyi rendfenntartók nem nézik jó szemmel. Ebbe a világba csöppen bele az ifjú Brian. Igazi zöldfülűként nem rest versenyre hívni Dominicot. Senki sem sejti, hogy valójában álruhás zsaru, aki egy kamionokat fosztogató csapatot szeretne lekapcsolni. Valami azt súgja neki, Dominic és barátai körében kell keresnie az elkövetőket.","101 perc",18,3,"https://www.mafab.hu/static/profiles/2014/293/11/45652_6.jpg"),
(NULL,"The Blair Witch Project",NULL,"A found footage horrorok (azaz, amikor dokumentarista stílusban, remegő kézzel vesznek fel mindent, de tényleg mindent, hiszen eszetlen menekülés közben is rögzít az operatőr, sőt, akkor is, ha a rémség épp őt majszolja) mára elárasztották a piacot, hiszen nagyon olcsón, kézműves körülmények között előállíthatók. Ezeknek a filmeknek (legalábbis modern változatuknak) műfajteremtő alapvetése, az 1999-es The Blair Witch Project még tényleg valós események felvételének volt eladva, és a gyártók mindent elkövettek, hogy átverjék a nézőket. Internetes portálokat, fórumokat szórtak tele olyan tartalmakkal, amelyek azt voltak hivatottak bizonygatni, hogy a Blair-i boszorkány egy létező legenda, és az átok több, tisztázatlan körülmények között elhunyt áldozatot követelt. A forgatócsoport eltűnését is álhírekkel erősítették meg - hiszen a film koncepciója tényleg az volt, hogy úgy találták meg a kazettát, ami rögzítette a boszorkány nyomában járó stáb utolsó napjait. A ködösítés még hozzánk is eljutott: a film mozipremierje körüli napokban az egyik tévécsatornán levetítették azt a kisfilmet, ami a három filmes rejtélyes eltűnését és a talált kazettán látott események valódiságát bizonygatta.","86 perc",18,4,"https://m.media-amazon.com/images/M/MV5BYjJiMjI5MjEtNWQ3YS00N2NkLWFlMDItYTEyM2NkN2I0MTY5XkEyXkFqcGdeQXVyNjUxMDQ0MTg@._V1_.jpg"),
(NULL,"A sötét lovag - Felemelkedés",NULL,"Nyolc év telt el azóta, hogy egy szörnyű éjszakát követően Batman nyom nélkül eltűnt. Magára vállalta Harvey Dent államügyész minden vétkét, és a hősből üldözött bűnöző lett. Önfeláldozása azonban nem volt hiábavaló: a Dent-törvénynek köszönhetően Gotham békés várossá vált. Átmenetileg. A városban feltűnik egy macskajelmezes betörő, aki sötét titkokat rejteget; és megérkezik Bane is, a különös álarcot viselő, gátlástalan bűnöző. Bruce Wayne féltve őrzött magánya nem tarthat örökké, a városnak ismét szüksége van a Sötét Lovagra. Ám a köpönyeg és az álarc ellenére úgy tűnik, Bane legyőzhetetlen.","165 perc",18,5,"https://images-2.rakuten.tv/storage/global-movie/translation/artwork/8af845dc-9c37-42ad-ab72-c96e443cc9b7-a-sotet-lovag-felemelkedes-1611398080.jpeg"),
(NULL,"A múmia",NULL,"Az ókori királynő, kinek életét igazságtalanul oltották ki, évezredek óta nyugszik kriptájába temetve, mélyen a sivatag kérlelhetetlen homoktengere alatt. Legalább is eddig így hittük. Ám most életre kel, és a világra szabadítja régóta felgyülemlett bosszúvágyát, és az ezzel járó elképzelhetetlen borzalmakat. A Közel-Kelet homokdűnéitől a mai London alatti titkos labirintusokig ívelő nagyszabású kaland meglepő izgalmaival és lélegzetelállító csodáival páratlanul fantáziadús betekintést ad az istenek és a szörnyetegek újraértelmezett világába.","110 perc",16,5,"https://media.port.hu/images/000/956/298.jpg"),
(NULL,"Bűnvadászok",NULL,"Wilbur Walsh (Bud Spencer) és Matt Kirby (Terence Hill) a kikötőben bóklászva próbálnak munkát szerezni. Ám a furcsa párosnak nincs nagy szerencséje, munka helyett néhány helyi gengszter és pár autó szétpüfölésével kell vigasztalódniuk. Ezért úgy döntenek, hogy kirabolnak egy szupermarketet, de az akció balul sül el. A bolt hátsó bejárata helyett a helyi rendőrőrs ajtaján robbannak be. Hogy elkerüljék a letartóztatást, beállnak rendőrnek. A törvény jó oldalán állva sem hazudtolják meg önmagukat, de aktuális pofonzáporaik között nyomozni kezdenek egy kínai titokzatos halála után, és miközben a szálakat gombolyítják, előszeretettel teszik helyre a környékbeli rossz fiúk állkapcsát és más, ütésre zsibbadó testrészeit is.","115 perc",14,6,"https://image.tmdb.org/t/p/original/imPVYVk3nKQ1nSrSdUX8PZ8L8qo.jpg"),
(NULL,"Sherlock Holmes 2. – Árnyjáték",NULL,"A világ különböző részein különös halálesetek történnek. Senki nem veszi észre az összefüggést az események között, egyedül csak a magándetektív Sherlock Holmest ejtik gondolkodóba a történtek. Hamarosan kiderül, hogy egy zseniális, ám gátlástalan gonosztevő, James Moriarty professzor áll az ügy háttérben. Miközben Watson doktor az esküvőjére készül, Holmest egyre váratlanabb helyzetbe sodorja nyomozása. Az ügybe nemcsak a doktort, de a saját bátyját, valamint a gyönyörű, de veszélyes jósnőt is magával rántja. Fél Európán keresztül üldözik Moriarty professzort, ám ő mindig egy lépéssel előrébb jár.","129 perc",16,6,"https://lira.erbacdn.net/upload/M_28/rek1/128/588128.jpg"),
(NULL,"Harry Potter és a bölcsek köve",NULL,"Szülei halála után Harry Potter mostohaszülőknél nevelkedik. Sanyarú a sorsa: a lépcső alatti kuckóban lakik, és elviselhetetlen az unokatestvére. Ám hamarosan kiderül, hogy Harry nem közönséges kisfiú, hanem egy varázslóházaspár árvája, aki csak átmenetileg keveredett a lényegről mit sem sejtő muglik közé. Most viszont végigsétál az Abszol úton, hogy beiratkozzon a titokzatos Roxfort Boszorkány- és Varázslóképző Szakiskolába. Néhány jó barát, néhány nagy kaland és néhány ősi ellenség vár itt rá – de mi az egy elsőéves varázslótanoncnak?","152 perc",16,7,"https://static.darabanth.com/images/2/2/2254152.jpg"),
(NULL,"Harry Potter és a titkok kamrája",NULL,"Harry Potter nyári vakációja nem a legjobban sikerült. Mindezt tetézi, hogy megjelenik nála Dobby, a házimanó, hogy figyelmeztesse: nagy veszély leselkedik rá a Roxfort Boszorkány- és Varázslóképző Szakiskola falai közt. Harry és Ron lekési a Roxfort Expresszt, ami visszavinné őket az iskolába, így egy repülő autóval indulnak útnak, nehogy elkéssenek az új tanév kezdetéről. Harry csakhamar megint az érdeklődés középpontjában találja magát, ugyanis az iskolában új rajongói akadnak, köztük a Feketemágia-ellenes Liga professzora, Gilderoy Lockhart. Lockhart különös módon egyre gyakrabban mutatkozik Harry társaságában...","161 perc",16,7,"https://images-2.rakuten.tv/storage/global-movie/translation/artwork/b26df67f-1692-436b-a372-42893b75239f-harry-potter-es-a-titkok-kamraja-1611398024.jpeg"),
(NULL,"Pingvinek vándorlása",NULL,"A császárpingvinek megközelítőleg száz évvel ezelőtt találkoztak először emberekkel, amikor az első felfedezők az Antarktisz jégsivatagában jártak. A rendkívüli hideg és zord körülmények miatt az ember még sosem volt tanúja a pingvinek vándorlásának. A film forgatása 13 hosszú hónapig tartott, de végül sikerrel járt a küldetés: a pingvinek életmódját természetes környezetükben örökítette meg a kitartó stáb. A film történetet mesél, ábrázolja az érzelmekben gazdag jellemek különös és látványos sorsát, megjegyzésekkel, humorral ötvözve. Misztikus és leplezetlen dráma, ez különbözteti meg a tudományos fejtegetés monotonságától.","85 perc",6,8,"https://img2.topfilmek.hu/original/sT7J4wCIZwENLaxbZLucQjlcX9j.jpg"),
(NULL,"Trópusi esőerdő",NULL,"A világszerte milliók által látott film napjaink egyik legfontosabb környezetvédelmi problémája kapcsán 400 millió évet átfogó utazásra viszi a nézőt. Hihetetlen képi és hanghatások segítségével mutatja be a Föld tüdejének nevezett trópusi esőerdők kialakulását, szépségét és sokszínűségét, az ott élő több százezer madár és rovarfaj mindennapi életét. Az esőerdők mélye - hasonlóan az óceánok örök sötétségbe burkolódzó világához, vagy éppen az Antarktisz jégsivatagához - egészen a legutóbbi évtizedekig a Föld fehér foltjaihoz tartozott. Felfedezésük azonban megkezdődött, rögtön azután, hogy a tudomány felismerte jelentőségüket a Föld ökoszisztémájában. A filmben láthatjuk a kutatók sokszor elképesztően kockázatos kísérleteit, hogy közel férkőzzenek a talajtól sokszor harminc-negyven méterre, az esőerdők lombkoronájában nyüzsgő madarak és kisemlősök világához. Fantasztikus közelképek segítségével figyelhetjük meg a talajszinthez közeli párás félhomályban rejtőzködő, változatos formájú, szinű és alakú rovarok életét. Megtudhatjuk, miért tartják a tudósok és a környezetvédők fontosnak, hogy felhívják a figyelmet az esőerdők pusztulására, és miért olyan fontos a megmentésük az emberiség, a Föld jövőjének szempontjából.","40 perc",6,8,"https://www.mafab.hu/static/profiles/2014/293/05/26693_40.jpg"),
(NULL,"Egy csodálatos elme",NULL,"1947-et írunk: John Forbes Nash Jr. megérkezik a Princeton egyetemre, hogy matematikát tanuljon. A titokzatos nyugat-virginiai zseninek sem pedigrés iskolai múltja, sem pénze nincs elég ahhoz, hogy bekerüljön az elit diákok körébe. Ám számára semmit sem jelent a társasági élet - sem az órák látogatása. A különc fiút egyetlen dolog érdekli: egy egészen eredeti ötlet megtalálása. A matematika szakon könyörtelen verseny folyik, és sokan szívesen látnák Nash bukását. Mégis épp a rivalizálás adja meg neki a kellő lökést: egy este a helyi bárban megfigyeli, hogyan versengenek a fiúk egy szőke lányért, és az ötlet, mely oly régóta kísérti, megfogan. Megírja dolgozatát a játékelméletről - a versengés matematikájáról -, mely bátran szembeszegül Adam Smithnek, a modern közgazdaságtan atyjának, doktrínáival. 150 év elfogadott gondolatvilága hirtelen idejétmúltnak tűnik és Nash élete örökre megváltozik. Megnyer egy rangos ösztöndíjat és tanári állást kap, de nem elégedett. A tudomány jelentős szerepet játszott Amerika második világháborús győzelmében, és most, a hidegháború csúcsán Nash feladatot akar az új konfliktusban. Vágyai teljesülnek, amikor felbukkan a rejtélyes William Parcher, és szigorúan titkos megbízatást ad neki: ellenséges kódokat kell megfejtenie. Nash teljes szívvel és aggyal veti magát a munkába. Ám szívére másfelől is vár feladat. Megismerkedik a gyönyörű és ragyogóan okos Aliciával, aki Nasht egy számára eleddig teljesen ismeretlen fogalommal ismerteti meg: a szerelemmel. Összeházasodnak, de Nash nem avathatja be hitvesét kettős életébe. Ám ennek a munkának, veszélynek és titkolódzásnak súlyos ára van...","135 perc",16,9,"https://filmtett.ro/uploads/thumbs/cikk_385.jpg"),
(NULL,"Zöld könyv - Útmutató az élethez",NULL,"Tony Lip egyszerű, ugyanakkor jó lelkű fickó, az a típus, akinek a problémamegoldó készsége kimerül az „előbb ütök és csak aztán kérdezek” módszerben. Egy kis mellékes reményében elvállalja, hogy egy afroamerikai zongorista, Don Shirley sofőrje lesz, aki Amerika déli államaiba indul turnézni, oda, ahol a helyiek nem látják szívesen azokat, akiknek más a bőrszíne. Don kifinomult stílusa szöges ellentéte az egykori kidobó ember nyers modorának, ám az út során rájönnek, hogy nem is annyira különbözőek.","130 perc",16,9,"https://media.port.hu/images/001/121/024.jpg"),
(NULL,"A Gyűrűk Ura – A Gyűrű Szövetsége",NULL,"Frodó (Elijah Wood), az ifjú hobbit egy gyűrűt kap Bilbótól, amiről kiderül, hogy az Egy Gyűrű, mellyel a Sötétség Ura rabszolgasorba taszíthatja Középfölde népeit. Gandalf (Ian McKellen) Völgyzugolyba küldi Frodót, ahol a tündék legbölcsebb vezetője, Elrond dönt a gyűrű sorsáról. Nincs más lehetőség, a gyűrűt el kell pusztítani Mordorban, a Végzet-katlanban. A szabadnépek tanácsán megújul a Szövetség, és Gandalf vezetésével Frodó és társai, a dúnadán Aragorn (Viggo Mortensen), a tünde Legolas (Orlando Bloom), Gimli, a törp (John Rhys-Davies), és Boromir, az emberek képviseletében, nekivágnak a reménytelen küldetésnek. A jövő attól függ, hogyan alakul a szövetség sorsa.","178 perc",18,10,"https://upload.wikimedia.org/wikipedia/hu/b/bf/A_Gy%C5%B1r%C5%B1k_Ura_A_Gy%C5%B1r%C5%B1_Sz%C3%B6vets%C3%A9ge.jpg"),
(NULL,"A Gyűrűk Ura - A két torony",NULL,"Hamarosan eldől Középfölde sorsa: a gonosz ereje egyre nő, mert szövetséget kötött a két torony: Barad-dúr, Szauron, a sötét úr vára és Orthanc, amely Szarumán, az áruló mágus erődje. Frodó, a Gyűrűhordozó és hű barátja, Samu Mordor földje felé tart, hogy a tűzbe hajítsa terhét: ám egy újabb veszéllyel kell szembenézniük - felbukkan Gollam, aki magának követeli a kincset. Eközben a szövetség még élő tagjai a Kósza vezetésével újabb harcokba keverednek. Rohan lovasai mellett küzdenek és különös szövetségesekre lelnek: az Entekre. Árnyék vetül a világra. A Sötét Úr hadseregei Gondor felé vonulnak. Kezdetét veszi a Gyűrűháború.","210",18,10,"https://upload.wikimedia.org/wikipedia/hu/2/24/A_Gy%C5%B1r%C5%B1k_Ura_A_k%C3%A9t_torony.jpg"),
(NULL,"A Zongorista",NULL,"1939, Varsó. Wladyslaw Szpilman zongoraművész egy lemezstúdióban dolgozik, amikor bombázni kezdik a várost. A felvétel félbeszakad, Wladyslaw hazatér. Otthon zsidó szülei és testvérei megpróbálják eldönteni, mit vigyenek magukkal, ha a növekvő náci fenyegetés miatt menekülniük kell Varsóból. Wladyslaw nem akarja elhagyni a várost, mivel szereti, s legalább annyira rajong Dorotáért, a fiatal csellistáért. A nő nagyon aggódik a növekvő antiszemitizmus miatt. Családja nem sokkal azelőtt költözött be a fallal körülvett gettóba, és megpróbálnak alkalmazkodni az ottani élethez","143 perc",16,11,"https://media.port.hu/images/000/842/783.jpg"),
(NULL,"Good Will Hunting",NULL,"Will Hunting még csak húsz éves, de már kilóg a kemény dél-bostoni munkásnegyed környezetéből. Barátaihoz hasonlóan gürcöl, amikor éppen nem a helyi bárban lóg vagy nem keveredik összetűzésbe a törvénnyel. Sohasem járt egyetemre, legfeljebb gondnokként felmosni a padlót. Mégis homályos történelmi utalásokat idéz fel fényképszerű emlékezetéből és szinte azonnal old meg Nobel-díjas professzorokat is zavarba ejtő matekpéldákat. Az egyetlen dolog, amire ez a bámulatosan okos és lehetetlenül dühös fiatalember nem képes, hogy újabb kocsmai verekedése után kidumálja magát a várható börtönbüntetés alól. Egyetlen reménye Sean McGuire, az egyetemi professzorból lett pszichológus, aki csodálja a fiú érzelmi küszködéseit és megérti, milyen az, amikor az ember élete állandó küzdelem. A film forgatókönyvéért Matt Damon és Ben Affleck Oscar-díjat kapott.","126 perc",15,11,"https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"),
(NULL,"Ének az esőben",NULL,"Az Ének az esőben az egyik legbájosabb zenés film, amit valaha vászonra vittek. Ki ne ismerné a képsort, amikor egy jókötésű férfi dalol és táncol egy szál esernyővel a rend ámuló őre előtt a zuhogó esőben? E rögtönzött előadás 'tettese', Don Lockwood és barátja, Cosmo Brown a Monumental Picturesnél keresi a kenyerét. 1927-ben járunk, a némafilm a virágkorát éli. Egy szerencsés véletlennek köszönhetően Don népszerű sztár lesz, s filmek sorát forgatja az ünnepelt színésznő, Lina Lamont oldalán. A férfit távolról sem kötik mély érzelmek a mutatós, de üresfejű nőhöz, ám képzelt, a filmek által sugallt románcukat a sajtó szenzációként tálalja. Don valódi imádottja Kathy Selden, egy fiatal, kezdő énekes-táncosnő, akit a féltékeny Lina ukmukfukk kirúgat a stúdióból. Ám a sztárszínésznőt új veszély fenyegeti: a hangosfilm megjelenése. Lina ugyanis egyáltalán nem tud énekelni, sőt a beszédhangja is borzalmas. Sürgősen találnia kell valakit, aki 'szinkronizálja' neki a dalokat és a dialógokat. Így kerül vissza a történetbe Kathy, aki azonkívül, hogy beszélni és énekelni is képes, csajnak is nagyon belevaló.","98 perc",14,12,"https://www.rocky.hu/imgcache/221009/200.jpg"),
(NULL,"Gyalog galopp",NULL,"Artúr, a britek királya (Graham Chapman) azt a feladatot kapja Istentől, hogy kutassa fel a Szent Grált. Egy ilyen horderejű küldetés kooperatív munkát igényel, ezért Artúr maga köré gyűjti Albion (fél)tökös lovagjait, Sir Bedevere-t, a tudóst (Terry Jones), a szűzies Sir Galahadot (Michael Palin), a bátor Sir Lancelotot (John Cleese) és Sir Robint (Eric Idle), aki nem olyan bátor, mint Sir Lancelot. A Kerekasztal lovagjai felkerekednek hát, hogy megannyi kalandot átvészelve begyűjtsék a menő poharat.","92 perc",14,12,"https://upload.wikimedia.org/wikipedia/hu/a/ab/Gyalog_galopp.png"),
(NULL,"A sárkány közbelép",NULL,"A történet középpontjában Bruce Lee áll, akit a harcművészetek szakértőjeként felkérnek arra, hogy épüljön be egy kábítószerkereskedő hálózatba. Részt kell vennie egy furcsa, meghívásos kung-fu versenyen, melyet egy eldugott szigeten álló erődítményben rendeznek. A verseny legfőbb szponzora pedig nem más, mint a hálózat feje, egy félkezű drogbáró. Az erődítmény kungfu iskolájának egyetlen célja, hogy az onnan üzemeltetett kábítószer kereskedelmet és prostitúciót álcázza. A kungfu bajnok Lee (Bruce Lee), aki húga haláláért akar elégtételt venni, behatol a kábítószerkirály birodalmába, mely egy eldugott szigeten van és benevez az ott megrendezendő, illegális bajnokságra. Hamarosan azonban rá kell döbbennie, hogy ellenfelei veszélyesebbek, mint hitte.","98 perc",18,13,"https://www.mafab.hu/static/2023/291/10/17007_1697704752.8047.jpg"),
(NULL,"Részeges karatemester",NULL,"Wong Fei-hungot apja alkoholista nagybátyjához küldi, hogy tisztességet tanuljon és harcos váljon belőle. A bácsika azonban brutálisan bánik a tanítványaival, Fei-Hong ezért elhatározza, hogy elszökik kegyetlen kínzójától. Nem sokkal szökése után azonban elkapják, embertelenül megalázzák és szinte holttá verik. A bosszúvágytól fűtött, megszégyenített, mindenre elszánt fiatal srác megfogadja, hogy mostantól tanulni fog és nemsokára visszavág ellenségeinek.","111 perc",12,13,"https://www.mafab.hu/static/2014/268/16/46197_26.jpg"),
(NULL,"A fegyvertelen katona",NULL,"A Hacksaw Ridge Desmond Doss [Andrew Garfield] szinte hihetetlen története, aki a második világháború egyik legvéresebb csatájában Okinawa szigetén 75 bajtársa életét mentette meg úgy, hogy ő maga nem viselt fegyvert. Vallási meggyőződése volt, hogy noha hazája igazságos háborút vív, neki magának nem szabad ölnie. Szanitécként több alkalommal is egymaga hozta ki sebesült bajtársait az ellenséges vonalak mögül vagy a tűz alatt tartott senkiföldjéről, miközben ő maga is súlyos sérüléseket szenvedett. Doss volt az első olyan katona, aki lelkiismereti okokból megtagadta a fegyveres szolgálatot, és megkapta a Kongresszusi Becsület Érdemrendet, Amerika legmagasabb katonai kitüntetését.","131 perc",18,14,"https://upload.wikimedia.org/wikipedia/hu/0/0f/A-fegyvertelen-katona.jpg"),
(NULL,"Amerikai mesterlövész",NULL,"A mesterlövész Chris Kyle hajszálpontos lövései számtalan életet mentettek meg a csatatéren, és legendává tették. Négy szolgálat után hazatérve azonban rájön, hogy a háborút nem tudja maga mögött hagyni.","133 perc",18,14,"https://media.port.hu/images/000/714/137.jpg"),
(NULL,"Ragyogás",NULL,"Kubrick hátborzongatóan izgalmas remekművében - amelyet a Newsweek kritikusa az első epikus horrorfilmnek nevezett - az ember ezen utóbbi, mindenkiben mélyen megbúvó félelme jelenik meg. A Stephen King azonos című regénye alapján készült mesterműben Jack Nicholson élete egyik legjobb alakítását nyújtja, mint Jack Torrace, aki a családjával a téli holtszezon idejére egy, a világtól elzárt kísérteties hotelba költözik gondnoknak. Ha az évszázados falak mesélni tudnának, hátborzongató történetek tucatjai kerülnének a felszínre. Úgy tűnik, hogy Jack kisfia előtt nincsenek is titkai a háznak, mert látja a fürdőkádba fulladt nőt, az elegáns lakosztályban kivégzett férfit és az összes holt lelket, amelyek nem találnak nyugalmat. De lehet, hogy mindezek a rémképek csupán jeleznek valamit. A Jack agyát elborító őrületet, a folyamatot, amelynek hatására a szerető apa vérszomjas, gyilkos indulatokkal teli szörnyeteggé válik.","115 perc",18,15,"https://media.port.hu/images/000/848/418.jpg"),
(NULL,"A dolog",NULL,"Néhány norvég kutatóval való összeütközés után az amerikai Antarktisz-kutató állomás tagjai befogadnak egy szánhúzó kutyát. A befogadott eb azonban szörnyű átalakuláson megy keresztül, a testébe ugyanis idegen organizmus költözött. Felderítő csapat indul a szomszédos norvég telepre, ahol a romok és halottak mellett az amerikaiak egy jégből kiásott űrhajóroncsra bukkannak. Nyilvánvalóvá válik, hogy amikor a járművet felszínre hozták, az utasa elszabadult és bármilyen alakot képes felölteni. Miközben beköszönt a rideg sarki tél, rettegés költözik az amerikai bázisra.","109 perc",18,15,"https://lira.erbacdn.net/upload/M_28/rek1/598/607598.jpg"),
(NULL,"A Karib-tenger kalózai - A Fekete Gyöngy átka",NULL,"A XVII. században a Karib-tenger a kalózok birodalma volt, akik megfélemlítették az angol királyi flottát is. Elizabeth Swannt (Keira Knightley), az angol kormányzó lányát elrabolja a rettegett kalóz, Barbossa kapitány (Geoffrey Rush). A lány gyerekkori barátja és szerelme, Will Turner (Orlando Bloom) Elizabeth megmentésére indul, és ebben szándéka ellenére is a kalózok segítségét kell kérnie. Jack Sparrow, a kalózok vezére (Johnny Depp) felfedi Barbossa és társai titkát. Will és Jack megkísérlik a lehetetlent: megszerezni a Fekete Gyöngyöt, megmenteni a lányt és mellesleg megszerezni a világ legdrágább kincsét.","143 perc",12,17,"https://marvin.bline.hu/product_images/165/F9007.JPG"),
(NULL,"A Karib-tenger kalózai 2. - Holtak kincse",NULL,"Jack Sparrow kapitánynak (Johnny Depp) ezúttal is természetfeletti kalózokkal gyűlik meg a baja: kiderül ugyanis, hogy egy régi vérszerződés miatt még mindig adósa a legendás Davy Jonesnak, a Repülő Hollandi nevű szellemhajó kapitányának (Bill Nighy). Jacknek mihamarabb rendeznie kell a tartozását, különben örök átokra és szolgaságra ítéltetik. S ha mindez még nem lenne elég, a kapitány zűrjei miatt meghiúsul Will Turner (Orlando Bloom) és Elizabeth Swann (Keira Knightley) kisasszony esküvője. Ugyanis ők is kénytelenek elkísérni Sparrow-t a nagy kalandra, ami akár életük utolsó útja is lehet.","151 perc",12,17,"https://upload.wikimedia.org/wikipedia/hu/f/fc/Karib-tenger_kal%C3%B3zai_Holtak_kincse_poszter.png"),
(NULL,"Kém a szomszédban",NULL,"Bob Ho a beépített szuper-spéci titkos ügynök diktátorokat, terroristákat és gonosz birodalmakat vont ki a forgalomból, de most élete legnehezebb megbízatása várja. Úgy dönt, felhagy a kémkedéssel és újéletet kezd szomszédjával és barátnőjével, Gilliannel. A nő azonban egy fontos küldetést tartogat a számára: csak akkor hajlandó hozzámenni, ha Bob megnyeri 3 pimasz gyerekét is az ügynek. Mikor Gilliennek hirtelen el kell utaznia, Bob önként jelentkezik, hogy vigyáz a csemetékre. A kémkedés azonban bakfitty a csőszködéshez képest. James Bondot megszégyenítő kütyü arzenálra lesz szükség a feladat teljesítéséhez. És ha nem lenne elég, hogy a kölykök pokollá teszik az életét, az egyikük véletlenül letölt a gépéről egy szupertitkos képletet, amitől beindul a nagy gépezet. Bob régi ellensége, egy orosz terrorista, támadásba lendül arra kényszerítve az ex-kém leendő mostoha apát, hogy Jackie Chant megszégyenítő sebességgel páholja az ellent és váltogasson a szerepei között.","94 perc",12,18,"https://www.mafab.hu/static/profiles/2014/293/12/49298_5.jpg"),
(NULL,"Mission: Impossible - Fantom protokoll",NULL,"Terrorakció elkövetésével és összeesküvéssel vádolják Ethan Hunt ügynököt és csapatát. Az elnök életbe lépteti a Fantom-protokolt, aminek következtében mindnyájan törvényen kívüliekké válnak. Hunt azonban nem adja fel olyan könnyen a dolgot. Tény és való, hogy senkiben sem bízhat. Ráadásul pénz és mindenféle támogatás nélkül kénytelen kitalálni, hogyan moshatná tisztára a maga és az ügynökség nevét. Versenyt fut az idővel, hogy tisztázza magukat, ugyanakkor meg kell állítania a terroristákat is, akik újabb merényletre készülnek.","133 perc",12,18,"https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_.jpg"),
(NULL,"Grease",NULL,"Nyaralás közben találkozott a tengerparton Danny Zuko és Sandy Olsson. Akkor kezdődött a két fiatal szerelme. Ám a nyár gyorsan véget ért, és mindketten azt hitték, többé sosem látják egymást. A gimiben azonban újra összefutnak. A sok civódás után mindig édes a békülés. Minden idők egyik legsikeresebb filmmusicalje, amely az ugyancsak emlékezetes Broadway-produkción alapul, nem csupán nosztalgikus visszatekintés az ötvenes évekre, hanem energikus és izgalmas zenei tiszteletadás a rock and roll aranykorának.","110 perc",12,19,"https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"),
(NULL,"Óz, a csodák csodája",NULL,"Kansason félelmetes erejű tornádó söpör végig. A kis Dorothy nem tud elmenekülni, balesetet szenved. Ájult állapotban kis kutyájával, Totóval csodálatos helyre, Óz birodalmába kerül. Útja során barátokat szerez az Oroszlán, a Madárijesztő és a Bádogember személyében, ám egy kegyetlen ellenséggel, a Boszorkánnyal is szembe kerül. Noha itt minden színes és szép, Dorothy legfőbb vágya, hogy visszajusson az ő fekete-fehér, mégis úgy szeretett otthonába...","98 perc",12,19,"https://media.port.hu/images/000/111/269.jpg"),
(NULL,"Piszkos tánc",NULL,"1963 nyarán egy luxus nyaralóhelyen tölti vakációját Baby, egy tizenhétéves lány, akinek életében a táncé a döntő szerep. Megismerkedik Johnnyval, a jóképű tánctanárral, akibe hamarosan fülig szerelmes lesz. Amikor Johnnyt faképnél hagyja táncpartnere egy nagy verseny előtt, Baby veszi át a helyét, s kiderül, hogy remek kettőst alkotnak. Ám Baby szülei nem nézik jó szemmel a turbékoló párost és a lány apja mindent megtesz, hogy a fiatalokat szétválassza.","100 perc",12,20,"https://media.port.hu/images/000/087/177.jpg"),
(NULL,"Kellékfeleség",NULL,"A nőcsábász Danny jegygyűrű viselésével védi magát a tartós kalandoktól. Ám Palmer esetében csődöt mond a taktika, ugyanis beleszeret álmai nőjébe. Danny jobb híján újabb hazugságra ragadtatja magát, megkéri a gyermekeit egyedül nevelő titkárnőjét, játssza el az elhidegült felesége szerepét. Miközben a 'házaspár' igyekszik kitartani a mese mellett, a hazugság újabb hazugságokat szül, Katherine gyerekei, sőt Danny unokatestvére is belekeveredik a színjátékba. A társaság végül közös családi utazáson találja magát, ahol már senki sem tudja, mi igaz, és mi nem.","117 perc",12,20,"https://media.port.hu/images/000/285/428.jpg"),
(NULL,"Drágán add az életed!",NULL,"John McClane (Bruce Willis) nyomozó New Yorkból Los Angelesbe tart, hogy rendbe hozza házasságát. Még csak nem is sejti, hogy rajta kívül még mások is nagy dobásra készülnek Los Angelesben, méghozzá éppen a szeretet ünnepén. Terroristák egy csapata a hidegvérű Hans Gruber (Alan Rickman) vezényletével arra készül, hogy megszabadítsa a multinacionális Nakatomi céget a kötvényeitől. A terroristák behatolnak az épületbe, túszul ejtik a Nakatomi cég dolgozóit, köztük McClane feleségét, Hollyt (Bonnie Bedelia), és nekilátnak, hogy kinyissák a cég széfjét. Ám McClane, akiről a támadóknak fogalma sincs, mindent elkövet, hogy meghiúsítsa ezt. Nem könnyű feladata, hiszen a terroristák nemcsak létszámbeli fölényben vannak, hanem hatalmas fegyverarzenállal is rendelkeznek, szemben McClane szolgálati fegyverével. A 34 emeletes épületben megkezdődik a macska-egér harc.","131 perc",16,22,"https://upload.wikimedia.org/wikipedia/hu/b/ba/Dr%C3%A1g%C3%A1n_add_az_%C3%A9leted.png"),
(NULL,"A gépész",NULL,"Trevor Reznik egy éve nem aludt már rendesen. Álmatlansága azonban nem szokványos inszomnia, hiszen folyamatos ébrenléte nem más, mint szakadatlan rémálmok sora, melyekben megdöbbentő paranoiák, bűnök, szorongások kísértik. Éjszakáit vagy a repülőtéri kávézóban tölti Marie-val, a felszolgálólánnyal, vagy egy prostituáltnál, Stevienél, akinek ő a legrendszeresebb kuncsaftja. Egy ideje azonban Trevorral egyre furcsább dolgok történnek. Ki hagy kódolt üzeneteket a lakásán? Miért kezd Marie egyre inkább hasonlítani az anyjára? Miért nem szólt neki Stevie arról, hogy jól ismeri új munkatársát, Ivánt? És egyáltalán, ki valójában Iván? A férfi egyre zavaróbb és nyugtalanítóbb, mintha állandóan őt figyelné. Mi történik vele tulajdonképpen? Összeesküvés áldozata lett vagy az egész csak meggyötört elméjének képzelgése?","101 perc",18,22,"https://snitt.hu/system/covers/big/covers_1082.jpg?1617127458"),
(NULL,"István, a király",NULL,"A rockopera főhősei az első magyar király, István, aki az országot a keresztény Európába integrálta, és a törzsi-nemzetségi kötelékekhez ragaszkodó, az ősi tradíciókat őrző-védelmező Koppány. Az országba Gizellával érkezett lovagokat és papokat Asztrik apát vezeti István és a kereszténység pártján, Laborc és Torda táltos pedig Koppány mellett sorakozik fel a békétlen magyar főurakkal együtt. Géza halála után Koppány ősi szokás szerint feleségül kéreti Saroltot és át akarja venni Géza örökét. Véres összeütközésre kerül sor, amelyben István seregei győznek. Bár Réka, Koppány kereszténnyé lett leánya méltón el akarja temettetni apját, Sarolt ragaszkodik az elrettentő példastatuáláshoz, így Koppányt felnégyelik. István magányosan vívódik a rá váró feladatok súlya alatt, de vállalja sorsát. Az 1000. év decemberének 25. napján királlyá koronázzák.","94 perc",12,23,"https://m.media-amazon.com/images/M/MV5BZDY3YTg5ZDItNTdlZS00Yzk1LThiNTMtZTU4ZmE1ZmE2ZmNhXkEyXkFqcGdeQXVyMTU1NTI2MA@@._V1_.jpg"),
(NULL,"A hőlégballon",NULL,"Igaz történet alapján. 1979. Német Demokratikus Köztársaság. 1 hőlégballon, 2 000 méteres magasság, négy gyermek, négy felnőtt, 28 perc – két család eszement terve. A nyolc fős társaság a hidegháború idején kettészakított Európa keleti felén rekedt, és szabadságáról álmodozik. Elképzelésük szerint – amely bár őrültnek tűnik, kivitelezni talán mégsem lehetetlen – egy hőlégballont építenek, amivel átjuthatnak a Berlini Fal felett. S bár a kezdeti kudarcokon ügyesen túlteszik magukat, idővel a STASI (Állambiztonsági Minisztérium) is megneszel valamit... . A hihetetlen és felemelő igaz történet szereplői, a Strelzyk- és a Wetzel-család tagjai csak néhány abból a sok tízezerből, akik a szocializmus évtizedeiben nyugatra próbáltak szökni. Sokan elbuktak, de olyanok is akadtak, akiknek sikerült.","120 perc",12,23,"https://media.port.hu/images/001/126/964.jpg"),
(NULL,"Vissza a jövőbe",NULL,"Marty McFly átlagos kamasznak látszik, de van egy őrült barátja, Doki, aki megépítette a plutónium meghajtású időgépet. Dokit váratlanul halálos támadás éri, s Marty is csak az új találmánnyal nyer egérutat. Arra azonban ő sem számít, hogy 1955-be utazik vissza, épp abba az időszakba, amikor szülei is a padot koptatják. A bajt csak fokozza, hogy majdani anyja Marty megérkezése óta ügyet sem vet majdani apjára, ami beláthatalan következményekkel járhat a jövőben. Ha életben akar maradni, el kell érnie, hogy szülei egymásba szeressenek és el kell távolítania az anyját molesztáló Biffet.","111 perc",12,24,"https://upload.wikimedia.org/wikipedia/hu/2/2a/Vissza_a_j%C3%B6v%C5%91be_filmplak%C3%A1t.png"),
(NULL,"Vissza a jövőbe 2.",NULL,"Marty és Doki 2015-ben tett lélegzetelállító utazása úgy tűnik, megoldotta a McFly család néhány jövőbeni problémáját. Amikor azonban visszatérnek a jelenbe, hamarosan rá kell jönniük, hogy valaki fenekestül felforgatta az időt és rémséges körülményeket teremtett az 1985-ös Hill Valley-ben. Az egyetlen remény: megint visszautazni 1955-be, ahol meg kell állítani Biffet, a család esküdt ellenségét.","104 perc",12,24,"https://www.mafab.hu/static/profiles/2014/292/23/2410_28.jpg"),
(NULL,"Az ördög jobb és bal keze",NULL,"Trinity hosszú útról tér éppen haza, ám egy kis nézeteltérése támad az egyik útszéli kocsmában. Nem nagy ügy, lepuffant két semmirekellő fejvadászt, az útonállók sebesült foglyát meg befuvarozza a városkába, ahol éppen bátyjával kötözködik három elvetemült fickó. Csupán azon akad fenn, miért visel seriffcsillagot a bátyja. A seriff nem örül különösebben testvérének, mert ismeri őt. Ahol ő eddig feltűnt, ott mindig történt valami. Most sincs másként, az 'ördög jobb kezének' nevezett öcsköst bosszantják a helybéli hatalmasság pökhendi emberei, akik szüntelenül zaklatják a környék mormon telepeseit azért, hogy távozásra bírva őket, megkaparinthassák földjeiket.","113 perc",12,25,"https://www.rocky.hu/imgcache/10537/200.jpg"),
(NULL,"A Jó, a Rossz és a Csúf",NULL,"A polgárháború idején sajátos módját választja a pénzkeresetnek a mexikói Tuco és társa, Joe, akit Szőkének neveznek. A Tuco fejére kitűzött vérdíjak begyűjtéséből élnek. Szőke leszállítja a banditát a seriffnek, majd megmenti az akasztófától. Azután jöhet a következő város. Az üzlet virágzik, ám a két fickó összemarakodik az osztozkodásnál. A sivatagban egy kirabolt pénzszállító kocsira bukkannak, ám amikor Tuco le akar számolni társával, kiderül, hogy a haldokló tiszt elmondta Szőkének, hol rejtették el az aranyat. Tuco így kénytelen megint társulni Szőkével, ám az arany utáni hajszába a brutális Angyalszem is bekapcsolódik.","155 perc",16,25,"https://www.mafab.hu/static/2020/191/10/2891_1594370795.4575.jpg");

INSERT INTO alkalmazott (idalkalmazott,alkalmazottNev,jelszo,email,admin,token) VALUES 
(NULL, "Admin", SHA2("Admin", 256), "havlagb1@gmail.com", 1, NULL),
(NULL, "Kis Pista", SHA2("123456", 256), "kispista@gmail.com", 0, NULL);


INSERT INTO esemenyek (esemenyid,esemenynev,datum,kep_url) VALUES
(NULL,"Esemény",'2025-12-11',"https://cdn.pixabay.com/photo/2017/08/06/08/55/key-chain-2590442_1280.jpg");

INSERT INTO osszekoto (eid,fid) VALUES
(1,11);

INSERT INTO vetitesek (idvetitesek,vetitesDATUM,vetites_idtetitoterem,vetites_idfilmek) VALUES
(NULL,'2025-12.11 10:00:00',3,11);

INSERT INTO ulesek (ules_id,vetitoterem_idtetitoterem,vetites_vetitesID,sor,szekszam,foglalt) VALUES
(null,3,1,"A",1,0),
(null,3,1,"A",2,0),
(null,3,1,"A",3,0),
(null,3,1,"A",4,0),
(null,3,1,"A",5,0),
(null,3,1,"B",1,0),
(null,3,1,"B",2,0),
(null,3,1,"B",3,0),
(null,3,1,"B",4,0),
(null,3,1,"B",5,0),
(null,3,1,"B",6,0),
(null,3,1,"C",1,0),
(null,3,1,"C",2,0),
(null,3,1,"C",3,0),
(null,3,1,"C",4,0),
(null,3,1,"C",5,0),
(null,3,1,"C",6,0),
(null,3,1,"C",7,0),
(null,3,1,"D",1,0),
(null,3,1,"D",2,0),
(null,3,1,"D",3,0),
(null,3,1,"D",4,0),
(null,3,1,"D",5,0),
(null,3,1,"D",6,0),
(null,3,1,"D",7,0),
(null,3,1,"D",8,0),
(null,3,1,"E",1,0),
(null,3,1,"E",2,0),
(null,3,1,"E",3,0),
(null,3,1,"E",4,0),
(null,3,1,"E",5,0),
(null,3,1,"E",6,0),
(null,3,1,"E",7,0),
(null,3,1,"E",8,0),
(null,3,1,"E",9,0),
(null,3,1,"F",1,0),
(null,3,1,"F",2,0),
(null,3,1,"F",3,0),
(null,3,1,"F",4,0),
(null,3,1,"F",5,0),
(null,3,1,"F",6,0),
(null,3,1,"F",7,0),
(null,3,1,"F",8,0),
(null,3,1,"F",9,0),
(null,3,1,"F",10,0);

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS UpdateToken(IN id int, token TEXT)
BEGIN
      UPDATE alkalmazott SET alkalmazott.token = token WHERE alkalmazott.idalkalmazott = id;
END

DELIMITER ;


DELIMITER //

CREATE PROCEDURE if NOT EXISTS userLogin(IN email VARCHAR(255), password VARCHAR(255))
BEGIN
      SELECT admin,idalkalmazott,alkalmazottNev,email,token FROM alkalmazott WHERE alkalmazott.email = email AND alkalmazott.jelszo = SHA2(password,256);
END

DELIMITER ;


DELIMITER //


SELECT SHA2("Admin",256)

SELECT * from alkalmazott WHERE email = "havlagb1@gmail.com" AND jelszo = sha2("Admin",256);

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS alkalmazottREG(IN nev VARCHAR(255), password VARCHAR(255), email VARCHAR(255))
BEGIN
    INSERT INTO alkalmazott (`alkalmazottNev`,jelszo,email,admin) VALUES(nev,SHA2(password,256),email,0);
END

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS alkalmazottTOR(IN id INT)
BEGIN
    DELETE FROM alkalmazott WHERE idalkalmazott = id;
END

DELIMITER ;


DELIMITER //

CREATE PROCEDURE IF NOT EXISTS alkalmazottMOD(IN nev VARCHAR(255), password VARCHAR(255), email VARCHAR(255), id INT)
BEGIN
    UPDATE alkalmazott SET `alkalmazottNev`=nev,jelszo=SHA2(password,256),`email`=email WHERE idalkalmazott = id;
END

DELIMITER //

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS filmREG(IN nev VARCHAR(255),szereplok LONGTEXT, leiras TEXT, hossz VARCHAR(10), korhatar VARCHAR(2), filmKategoria INT, keplink TEXT)
BEGIN
    INSERT INTO filmek (`filmnev`,foszereplok,`filmdescription`,`filmhossz`,`filmkorhatár`,`film_kategoriaid`,film_keplink) VALUES(nev,szereplok,leiras,hossz,korhatar,filmKategoria,keplink);
END

DELIMITER ;



DELIMITER //

CREATE PROCEDURE IF NOT EXISTS filmMOD(IN nev VARCHAR(255),szereplok LONGTEXT,leiras TEXT, hossz VARCHAR(10), korhatar VARCHAR(2), filmKategoria INT, keplink TEXT, id INT)
BEGIN
    UPDATE filmek SET `filmnev`= nev,foszereplok = szereplok, filmdescription = leiras, filmhossz = hossz, `filmkorhatár` = korhatar, `film_kategoriaid` = filmKategoria, film_keplink = keplink WHERE idfilmek = id;
END

DELIMITER //


DELIMITER //

CREATE PROCEDURE IF NOT EXISTS filmTOR(IN id INT)
BEGIN
    DELETE FROM filmek WHERE idfilmek = id;
END

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS szovegKeres(IN nev VARCHAR(255))
BEGIN
    SELECT idfilmek, filmnev, filmdescription, filmhossz, filmkorhatár, film_kategoriaid, film_keplink FROM filmek WHERE filmnev LIKE CONCAT('%',nev,'%');
END

DELIMITER ;


DELIMITER //

CREATE PROCEDURE IF NOT EXISTS vetitesek()
BEGIN
  SELECT
  vetitesek.`idvetitesek`,filmek.filmnev
  FROM
  vetitesek
  INNER join filmek ON vetitesek.`vetites_idfilmek` = filmek.idfilmek
  WHERE
 vetitesek.`vetitesdatum` >= CURDATE();
END

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS vetitesINFO(IN id INT)
BEGIN
  SELECT
  DATE_FORMAT(vetitesek.`vetitesdatum`,"%Y.%m.%d %H:%i:%s") as "datum",vetitoterem.`terem`,filmek.film_keplink
  FROM
  vetitesek
  INNER JOIN vetitoterem ON vetitesek.`vetites_idtetitoterem` = vetitoterem.`idtetitoterem`
  INNER JOIN filmek ON filmek.idfilmek = vetitesek.vetites_idfilmek
  WHERE vetitesek.`idvetitesek` = id;
END
DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS vetitesULESEK(IN id INT)
BEGIN
  SELECT
  ulesek.ules_id, ulesek.sor, ulesek.szekszam, ulesek.foglalt
  FROM
  ulesek
  INNER JOIN vetitesek ON `idvetitesek`= ulesek.`vetites_vetitesid`
  WHERE vetitesek.`idvetitesek` = id;
END
DELIMITER ;


DELIMITER //

CREATE PROCEDURE IF NOT EXISTS vetitesREG(IN datum DATETIME, teremid INT, filmid INT)
BEGIN
  INSERT INTO vetitesek(`vetitesdatum`,`vetites_idtetitoterem`,`vetites_idfilmek`) VALUE(datum,teremid,filmid);
END

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS vetitesMOD(IN datum DATETIME, filmid INT, vetitesid INT)
BEGIN
    UPDATE vetitesek SET `vetitesDATUM`= datum, `vetites_idfilmek`=filmid WHERE `idvetitesek`= vetitesid;
END

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS vetitesTOR(IN vetitesid INT)
BEGIN
    DELETE FROM vetitesek WHERE `idvetitesek` = vetitesid;
END

DELIMITER ;


DELIMITER //

CREATE Procedure IF NOT EXISTS ulesREG1(IN MAXid INT)
BEGIN
INSERT INTO ulesek VALUES
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",1,0),
(null,1,MAXid,"A",2,0),
(null,1,MAXid,"A",3,0),
(null,1,MAXid,"A",4,0),
(null,1,MAXid,"A",5,0),
(null,1,MAXid,"A",6,0),
(null,1,MAXid,"B",1,0),
(null,1,MAXid,"B",2,0),
(null,1,MAXid,"B",3,0),
(null,1,MAXid,"B",4,0),
(null,1,MAXid,"B",5,0),
(null,1,MAXid,"B",6,0),
(null,1,MAXid,"B",7,0),
(null,1,MAXid,"C",1,0),
(null,1,MAXid,"C",2,0),
(null,1,MAXid,"C",3,0),
(null,1,MAXid,"C",4,0),
(null,1,MAXid,"C",5,0),
(null,1,MAXid,"C",6,0),
(null,1,MAXid,"C",7,0),
(null,1,MAXid,"C",8,0),
(null,1,MAXid,"D",1,0),
(null,1,MAXid,"D",2,0),
(null,1,MAXid,"D",3,0),
(null,1,MAXid,"D",4,0),
(null,1,MAXid,"D",5,0),
(null,1,MAXid,"D",6,0),
(null,1,MAXid,"D",7,0),
(null,1,MAXid,"D",8,0),
(null,1,MAXid,"D",9,0),
(null,1,MAXid,"E",1,0),
(null,1,MAXid,"E",2,0),
(null,1,MAXid,"E",3,0),
(null,1,MAXid,"E",4,0),
(null,1,MAXid,"E",5,0),
(null,1,MAXid,"E",6,0),
(null,1,MAXid,"E",7,0),
(null,1,MAXid,"E",8,0),
(null,1,MAXid,"E",9,0),
(null,1,MAXid,"E",10,0),
(null,1,MAXid,"F",1,0),
(null,1,MAXid,"F",2,0),
(null,1,MAXid,"F",3,0),
(null,1,MAXid,"F",4,0),
(null,1,MAXid,"F",5,0),
(null,1,MAXid,"F",6,0),
(null,1,MAXid,"F",7,0),
(null,1,MAXid,"F",8,0),
(null,1,MAXid,"F",9,0),
(null,1,MAXid,"F",10,0),
(null,1,MAXid,"F",11,0);
END

DELIMITER ;

DELIMITER //

CREATE Procedure IF NOT EXISTS ulesREG2(IN MAXid INT)
BEGIN
INSERT INTO ulesek VALUES
(null,2,MAXid,"A",1,0),
(null,2,MAXid,"A",2,0),
(null,2,MAXid,"A",3,0),
(null,2,MAXid,"A",4,0),
(null,2,MAXid,"A",5,0),
(null,2,MAXid,"A",6,0),
(null,2,MAXid,"B",1,0),
(null,2,MAXid,"B",2,0),
(null,2,MAXid,"B",3,0),
(null,2,MAXid,"B",4,0),
(null,2,MAXid,"B",5,0),
(null,2,MAXid,"B",6,0),
(null,2,MAXid,"B",7,0),
(null,2,MAXid,"C",1,0),
(null,2,MAXid,"C",2,0),
(null,2,MAXid,"C",3,0),
(null,2,MAXid,"C",4,0),
(null,2,MAXid,"C",5,0),
(null,2,MAXid,"C",6,0),
(null,2,MAXid,"C",7,0),
(null,2,MAXid,"C",8,0),
(null,2,MAXid,"D",1,0),
(null,2,MAXid,"D",2,0),
(null,2,MAXid,"D",3,0),
(null,2,MAXid,"D",4,0),
(null,2,MAXid,"D",5,0),
(null,2,MAXid,"D",6,0),
(null,2,MAXid,"D",7,0),
(null,2,MAXid,"D",8,0),
(null,2,MAXid,"D",9,0),
(null,2,MAXid,"E",1,0),
(null,2,MAXid,"E",2,0),
(null,2,MAXid,"E",3,0),
(null,2,MAXid,"E",4,0),
(null,2,MAXid,"E",5,0),
(null,2,MAXid,"E",6,0),
(null,2,MAXid,"E",7,0),
(null,2,MAXid,"E",8,0),
(null,2,MAXid,"E",9,0),
(null,2,MAXid,"E",10,0),
(null,2,MAXid,"F",1,0),
(null,2,MAXid,"F",2,0),
(null,2,MAXid,"F",3,0),
(null,2,MAXid,"F",4,0),
(null,2,MAXid,"F",5,0),
(null,2,MAXid,"F",6,0),
(null,2,MAXid,"F",7,0),
(null,2,MAXid,"F",8,0),
(null,2,MAXid,"F",9,0),
(null,2,MAXid,"F",10,0),
(null,2,MAXid,"F",11,0);
END;
DELIMITER ;

DELIMITER //

CREATE Procedure IF NOT EXISTS ulesREG3(IN MAXid INT)
BEGIN
INSERT INTO ulesek VALUES
(null,3,MAXid,"A",1,0),
(null,3,MAXid,"A",2,0),
(null,3,MAXid,"A",3,0),
(null,3,MAXid,"A",4,0),
(null,3,MAXid,"A",5,0),
(null,3,MAXid,"B",1,0),
(null,3,MAXid,"B",2,0),
(null,3,MAXid,"B",3,0),
(null,3,MAXid,"B",4,0),
(null,3,MAXid,"B",5,0),
(null,3,MAXid,"B",6,0),
(null,3,MAXid,"C",1,0),
(null,3,MAXid,"C",2,0),
(null,3,MAXid,"C",3,0),
(null,3,MAXid,"C",4,0),
(null,3,MAXid,"C",5,0),
(null,3,MAXid,"C",6,0),
(null,3,MAXid,"C",7,0),
(null,3,MAXid,"D",1,0),
(null,3,MAXid,"D",2,0),
(null,3,MAXid,"D",3,0),
(null,3,MAXid,"D",4,0),
(null,3,MAXid,"D",5,0),
(null,3,MAXid,"D",6,0),
(null,3,MAXid,"D",7,0),
(null,3,MAXid,"D",8,0),
(null,3,MAXid,"E",1,0),
(null,3,MAXid,"E",2,0),
(null,3,MAXid,"E",3,0),
(null,3,MAXid,"E",4,0),
(null,3,MAXid,"E",5,0),
(null,3,MAXid,"E",6,0),
(null,3,MAXid,"E",7,0),
(null,3,MAXid,"E",8,0),
(null,3,MAXid,"E",9,0),
(null,3,MAXid,"F",1,0),
(null,3,MAXid,"F",2,0),
(null,3,MAXid,"F",3,0),
(null,3,MAXid,"F",4,0),
(null,3,MAXid,"F",5,0),
(null,3,MAXid,"F",6,0),
(null,3,MAXid,"F",7,0),
(null,3,MAXid,"F",8,0),
(null,3,MAXid,"F",9,0),
(null,3,MAXid,"F",10,0);
END;
DELIMITER ;

DELIMITER //


CREATE Procedure IF NOT EXISTS ulesREG4(IN MAXid INT)
BEGIN
INSERT INTO ulesek VALUES
(null,4,MAXid,"A",1,0),
(null,4,MAXid,"A",2,0),
(null,4,MAXid,"A",3,0),
(null,4,MAXid,"A",4,0),
(null,4,MAXid,"A",5,0),
(null,4,MAXid,"B",1,0),
(null,4,MAXid,"B",2,0),
(null,4,MAXid,"B",3,0),
(null,4,MAXid,"B",4,0),
(null,4,MAXid,"B",5,0),
(null,4,MAXid,"B",6,0),
(null,4,MAXid,"C",1,0),
(null,4,MAXid,"C",2,0),
(null,4,MAXid,"C",3,0),
(null,4,MAXid,"C",4,0),
(null,4,MAXid,"C",5,0),
(null,4,MAXid,"C",6,0),
(null,4,MAXid,"C",7,0),
(null,4,MAXid,"D",1,0),
(null,4,MAXid,"D",2,0),
(null,4,MAXid,"D",3,0),
(null,4,MAXid,"D",4,0),
(null,4,MAXid,"D",5,0),
(null,4,MAXid,"D",6,0),
(null,4,MAXid,"D",7,0),
(null,4,MAXid,"D",8,0),
(null,4,MAXid,"E",1,0),
(null,4,MAXid,"E",2,0),
(null,4,MAXid,"E",3,0),
(null,4,MAXid,"E",4,0),
(null,4,MAXid,"E",5,0),
(null,4,MAXid,"E",6,0),
(null,4,MAXid,"E",7,0),
(null,4,MAXid,"E",8,0),
(null,4,MAXid,"E",9,0),
(null,4,MAXid,"F",1,0),
(null,4,MAXid,"F",2,0),
(null,4,MAXid,"F",3,0),
(null,4,MAXid,"F",4,0),
(null,4,MAXid,"F",5,0),
(null,4,MAXid,"F",6,0),
(null,4,MAXid,"F",7,0),
(null,4,MAXid,"F",8,0),
(null,4,MAXid,"F",9,0),
(null,4,MAXid,"F",10,0);
END;
DELIMITER ;

DELIMITER //

SELECT idvetitesek, vetites_idtetitoterem AS teremszam 
FROM vetitesek 
WHERE idvetitesek = (SELECT MAX(idvetitesek) FROM vetitesek)

DELIMITER ;
DELIMITER //

CREATE PROCEDURE IF NOT EXISTS ulesTOR(IN vetitesid INT)
BEGIN
    DELETE FROM ulesek WHERE `vetites_vetitesid` = vetitesid;
END

DELIMITER ;




DELIMITER //

CREATE PROCEDURE IF NOT EXISTS ulesFOGLAL(IN ulesid INT)
BEGIN
    UPDATE `ulesek` SET `foglalt`= 1 WHERE ules_id = ulesid;
END

DELIMITER ;



DELIMITER //

CREATE PROCEDURE IF NOT EXISTS jegyekLEK()
BEGIN
    SELECT jegyid,jegynev,ar FROM jegyek;
END

DELIMITER ;


DELIMITER //

CREATE PROCEDURE IF NOT EXISTS jegyVASARLAS(IN emailcim VARCHAR(255), vetitesid INT,ulesek VARCHAR(100), osszeg INT(11), jegyek TEXT)
BEGIN
  INSERT INTO vasarlasok(`email`,`vetites`,`ulesek`,`fizetett(Ft)`,`jegyek`) VALUE(emailcim,vetitesid,ulesek,osszeg,jegyek);
END

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS vetitesFELSOROL()
  SELECT filmek.filmnev as nev,vetitesek.`vetitesdatum` as datum, vetitesek.`vetites_idtetitoterem` as terem, filmek.film_keplink as keplink, vetitesek.idvetitesek
  FROM vetitesek
  INNER JOIN filmek ON vetitesek.`vetites_idfilmek` = filmek.idfilmek
  WHERE vetitesek.`vetitesdatum` >= CURDATE();

DELIMITER ;



DELIMITER //

CREATE PROCEDURE IF NOT EXISTS filmINFO(IN filmid INT)
BEGIN
  SELECT filmnev,foszereplok, filmdescription, filmhossz, filmkorhatár as kor
  FROM filmek
  WHERE idfilmek = filmid;
END

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS esemenyek()
BEGIN
  SELECT esemenyek.esemenyid, esemenyek.esemenynev, esemenyek.datum, esemenyek.kep_url AS link
  FROM esemenyek
  WHERE esemenyek.datum >= CURDATE();
END

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS esemenyekFILMEK(IN eseid INT)
BEGIN
  SELECT filmek.filmnev
  FROM esemenyek
  INNER JOIN osszekoto ON esemenyek.esemenyid = osszekoto.eid
  INNER JOIN filmek ON osszekoto.fid = filmek.idfilmek
  WHERE esemenyek.esemenyid = eseid;
END

DELIMITER //
CREATE PROCEDURE IF NOT EXISTS esemenyFILMinsert(IN esid INT, filmid INT)
BEGIN
    insert INTO osszekoto(eid,fid) VALUES(esid,filmid);
END

DELIMITER //
CREATE PROCEDURE IF NOT EXISTS esemenyREG(IN nev VARCHAR(150), idopont DATE, keplink TEXT)
BEGIN
    insert INTO esemenyek (`esemenynev`, datum, kep_url) VALUES (nev,idopont,keplink);
END
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS esemenyMOD(IN nev VARCHAR(150), idopont DATE, keplink TEXT, eid INT)
BEGIN
  UPDATE esemenyek SET `esemenynev` = nev, datum = idopont, kep_url = keplink WHERE esemenyid = eid;
END
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS esemenyTOR(IN eid INT)
BEGIN
  DELETE FROM esemenyek WHERE esemenyid = eid;
END

DELIMITER //
CREATE PROCEDURE IF NOT EXISTS osszekotoTOR(IN eseid INT)
BEGIN
  DELETE FROM osszekoto WHERE osszekoto.eid = eseid;
END
