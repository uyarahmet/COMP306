from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()

# CORS policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL configuration
db_config = {
    "user": "root",
    "password": "Bilal-ahmet23",
    "host": "localhost",
    "database": "royar",
    "port": 3306,
}

# Function to create a MySQL connection and cursor
def create_connection():
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    return connection, cursor

# Function to close the connection and cursor
def close_connection(connection, cursor):
    cursor.close()
    connection.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI app with MySQL integration!"}

@app.get("/admin/{admin_id}")
def read_admin(admin_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Admin WHERE Id = {admin_id}")
    admin_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not admin_data:
        raise HTTPException(status_code=404, detail="Admin not found")

    return {"admin_data": admin_data}

@app.get("/listings/{listing_id}")
def read_listing(listing_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Listing WHERE Lsid = {listing_id}")
    listing_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not listing_data:
        raise HTTPException(status_code=404, detail="Listing not found")

    return {"listing_data": listing_data}

@app.get("/home/{home_id}")
def read_home(home_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Home WHERE Hid = {home_id}")
    home_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not home_data:
        raise HTTPException(status_code=404, detail="Home not found")

    return {"home_data": home_data}

@app.get("/land/{land_id}")
def read_land(land_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Land WHERE Lid = {land_id}")
    land_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not land_data:
        raise HTTPException(status_code=404, detail="Land not found")

    return {"land_data": land_data}

@app.get("/hotel/{hotel_id}")
def read_hotel(hotel_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Hotel WHERE Htid = {hotel_id}")
    hotel_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not hotel_data:
        raise HTTPException(status_code=404, detail="Hotel not found")

    return {"hotel_data": hotel_data}

@app.get("/commercial_property/{property_id}")
def read_commercial_property(property_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Commercial_Property WHERE Cid = {property_id}")
    property_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not property_data:
        raise HTTPException(status_code=404, detail="Commercial Property not found")

    return {"property_data": property_data}

@app.get("/apartment/{apartment_id}")
def read_apartment(apartment_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Apartment WHERE Hid = {apartment_id}")
    apartment_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not apartment_data:
        raise HTTPException(status_code=404, detail="Apartment not found")

    return {"apartment_data": apartment_data}

@app.get("/villa/{villa_id}")
def read_villa(villa_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Villa WHERE Hid = {villa_id}")
    villa_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not villa_data:
        raise HTTPException(status_code=404, detail="Villa not found")

    return {"villa_data": villa_data}

@app.get("/realtor/{realtor_id}")
def read_realtor(realtor_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Realtor WHERE Id = {realtor_id}")
    realtor_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not realtor_data:
        raise HTTPException(status_code=404, detail="Realtor not found")

    return {"realtor_data": realtor_data}

@app.get("/secretary/{secretary_id}")
def read_secretary(secretary_id: int):
    connection, cursor = create_connection()
    cursor.execute(f"SELECT * FROM Secretary WHERE Id = {secretary_id}")
    secretary_data = cursor.fetchone()
    close_connection(connection, cursor)

    if not secretary_data:
        raise HTTPException(status_code=404, detail="Secretary not found")

    return {"secretary_data": secretary_data}

### Essential Use 

@app.get("/all_listings")
def get_listings_with_details():
    connection, cursor = create_connection()
    
    query = """
    SELECT *
    FROM Listing
    """
    
    cursor.execute(query)
    all_listings = cursor.fetchall()
    
    close_connection(connection, cursor)

    return {"all_listings": all_listings}



### 5 ADVANCED QUERIES ###

# 1:
@app.get("/listings_with_details")
def get_listings_with_details():
    connection, cursor = create_connection()
    
    query = """
    SELECT *
    FROM Listing
    JOIN Contains ON Listing.Lsid = Contains.Lsid
    LEFT JOIN Home ON Contains.Hid = Home.Hid
    LEFT JOIN Land ON Contains.Lid = Land.Lid
    LEFT JOIN Hotel ON Contains.Htid = Hotel.Htid
    LEFT JOIN Commercial_Property ON Contains.Cid = Commercial_Property.Cid
    JOIN Admin ON Listing.Id = Admin.Id;

    """
    
    cursor.execute(query)
    listings_with_details = cursor.fetchall()
    
    close_connection(connection, cursor)

    return {"listings_with_details": listings_with_details}

# 2: Find the average price per area for each property type (Home, Land, Hotel, Commercial Property).
@app.get("/average_price_per_area")
def get_average_price_per_area():
    connection, cursor = create_connection()
    query = """
    SELECT
        CASE
            WHEN Home.Hid IS NOT NULL THEN 'Home'
            WHEN Land.Lid IS NOT NULL THEN 'Land'
            WHEN Hotel.Htid IS NOT NULL THEN 'Hotel'
            WHEN Commercial_Property.Cid IS NOT NULL THEN 'Commercial Property'
        END AS property_type,
        AVG(Listing.Lsprice_per_area) AS avg_price_per_area
    FROM Listing
    LEFT JOIN Contains ON Listing.Lsid = Contains.Lsid
    LEFT JOIN Home ON Contains.Hid = Home.Hid
    LEFT JOIN Land ON Contains.Lsid = Land.Lid
    LEFT JOIN Hotel ON Contains.Lsid = Hotel.Htid
    LEFT JOIN Commercial_Property ON Contains.Lsid = Commercial_Property.Cid
    GROUP BY property_type;
    """
    cursor.execute(query)
    average_price_per_area = cursor.fetchall()
    close_connection(connection, cursor)

    return {"average_price_per_area": average_price_per_area}


# 3: 
@app.get("/homes_above_avg_price_in_neighborhood")
def get_homes_above_avg_price_in_neighborhood():
    connection, cursor = create_connection()
    query = """
    SELECT Home.Hid, Home.Hneighborhood, Listing.Lsprice
    FROM Home
    JOIN Contains ON Home.Hid = Contains.Hid
    JOIN Listing ON Contains.Lsid = Listing.Lsid
    WHERE Listing.Lsprice > (
    SELECT AVG(L.Lsprice)
    FROM Home H
    JOIN Contains C ON H.Hid = C.Hid
    JOIN Listing L ON C.Lsid = L.Lsid
    WHERE H.Hneighborhood = Home.Hneighborhood)
    ORDER BY Home.Hneighborhood, Listing.Lsprice DESC;
    """
    cursor.execute(query)
    homes_above_avg_price_in_neighborhood = cursor.fetchall()
    close_connection(connection, cursor)
    return {"homes_above_avg_price_in_neighborhood": homes_above_avg_price_in_neighborhood}


# 4: Find the total number of listings for each city.
@app.get("/total_listings_per_city")
def get_total_listings_per_city():
    connection, cursor = create_connection()
    query = """
    SELECT Hcity, COUNT(*) AS total_listings
    FROM Listing
    JOIN Contains ON Listing.Lsid=Contains.Lsid
    JOIN Home ON Contains.Hid = Home.Hid
    GROUP BY Hcity;
    """
    cursor.execute(query)
    total_listings_per_city = cursor.fetchall()
    close_connection(connection, cursor)

    return {"total_listings_per_city": total_listings_per_city}

# 5: 
@app.get("/average_price_of_homes_with_more_than_twobathrooms_and_inside_site")
def average_price_of_homes_with_more_than_twobathrooms_and_inside_site():
    connection, cursor = create_connection()
    
    query = """
    SELECT 
        AVG(Listing.Lsprice) AS AveragePrice, 
        Home.Hbathroom_num, 
        Home.His_inside_site
    FROM Home
    JOIN Contains ON Home.Hid = Contains.Hid
    JOIN Listing ON Contains.Lsid = Listing.Lsid
    GROUP BY Home.Hbathroom_num, Home.His_inside_site
    HAVING Home.Hbathroom_num >= 2 AND Home.His_inside_site = TRUE;
    """
    
    cursor.execute(query)
    average_price_of_homes_with_more_than_twobathrooms_and_inside_site = cursor.fetchall()
    
    close_connection(connection, cursor)

    return {"average_price_of_homes_with_more_than_twobathrooms_and_inside_site": average_price_of_homes_with_more_than_twobathrooms_and_inside_site}
