from fastapi import FastAPI, HTTPException
import mysql.connector

app = FastAPI()

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
