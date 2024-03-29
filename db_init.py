import mysql.connector

# Kindly change these with your credentials in your local environment.
config = { 
    "user": "root",
    "password": "Bilal-ahmet23",
    "host": "localhost",
    "database": "royar",
    "port": 3306,
}

connection = mysql.connector.connect(**config)
cursor = connection.cursor(buffered=True)

create_table_query = """
CREATE TABLE Admin (
    Id INT NOT NULL,
    Fname VARCHAR(30),
    Lname VARCHAR(30),
    PRIMARY KEY (Id)
);

CREATE TABLE Home (
    Hid INT NOT NULL,
    Hroom_num VARCHAR(16),
    Hcity VARCHAR(255),
    Hneighborhood VARCHAR(255),
    Hfor_rent BOOLEAN,
    Hfor_sale BOOLEAN,
    Harea_brut REAL,
    Hcombi_type VARCHAR(128),
    Hlang REAL,
    Hlong REAL,
    Harea_net REAL,
    Hage_of_building INT,
    Hbathroom_num INT,
    His_inside_site BOOLEAN,
    Hcurrent_use VARCHAR(255),
    PRIMARY KEY(Hid)
);

CREATE TABLE Listing (
    Lsid INT NOT NULL,
    Lsdate DATE,
    Lsdays_since_published INT,
    Lsprice REAL,
    Lsprice_per_area REAL,
    Lsfrom_who VARCHAR(90),
    Lsland_title_status VARCHAR(128),
    Lsdescription VARCHAR(500),
    Id INT,
    PRIMARY KEY (Lsid),
    FOREIGN KEY (Id) REFERENCES Admin(Id)
);

-- Continue with tables having foreign key dependencies
CREATE TABLE Land (
    Lid INT NOT NULL,
    Larea REAL,
    Lblock VARCHAR(50),
    Lparcel VARCHAR(50),
    Lzoning_status VARCHAR(50),
    PRIMARY KEY(Lid)
);

CREATE TABLE Hotel (
    Htid INT NOT NULL,
    Htname VARCHAR(255),
    Htlocation VARCHAR(255),
    PRIMARY KEY(Htid)
);

CREATE TABLE Commercial_Property (
    Cid INT NOT NULL,
    Cfloor_num_of_listing INT,
    Ctotal_floor_num INT,
    Carea_net REAL,
    Carea_brut REAL,
    Cage_of_building INT,
    Croom_num INT,
    PRIMARY KEY(Cid)
);

CREATE TABLE Apartment (
	Hid INT NOT NULL,
    Afloor_num_of_whole_apt INT,
    Afloor_num_of_listing INT,
    Abalcony_exists BOOLEAN,
    Aelevator_exists BOOLEAN,
    Aautopark_type VARCHAR(50),
    Aautopark_exists BOOLEAN,
    PRIMARY KEY(Hid),
    FOREIGN KEY (Hid) REFERENCES Home(Hid)
);

CREATE TABLE Villa (
	Hid INT NOT NULL, 
    Vpool_exists BOOLEAN,
    Vtotal_floor_num INT,
    Vopen_area REAL,
    PRIMARY KEY(Hid),
    FOREIGN KEY (Hid) REFERENCES Home(Hid)
);

CREATE TABLE Realtor (
	Id INT NOT NULL,
    PRIMARY KEY(Id),
    FOREIGN KEY (Id) REFERENCES Admin(Id)
);

CREATE TABLE Secretary (
	Id INT NOT NULL,
    PRIMARY KEY(Id),
    FOREIGN KEY (Id) REFERENCES Admin(Id)
);

CREATE TABLE Contains (
    Lsid INT,
    Hid INT,
    Cid INT,
    Htid INT,
    Lid INT,
    PRIMARY KEY(Lsid),
    FOREIGN KEY (Lsid) REFERENCES Listing(Lsid),
    FOREIGN KEY (Hid) REFERENCES Home(Hid),
    FOREIGN KEY (Cid) REFERENCES Commercial_Property (Cid),
    FOREIGN KEY (Htid) REFERENCES Hotel(Htid),
    FOREIGN KEY (Lid) REFERENCES Land(Lid)
);
"""

try:
    cursor.execute(create_table_query, multi=True)

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    connection.commit()
    cursor.close()
    connection.close()



