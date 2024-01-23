# COMP306 Term Project 
## Contributors: Ahmet Uyar, Gülbarin Maçin, Aslı Gülseren 

<b>Architecture</b>: React App powered with FastAPI and MySQL 

# Guide on how to run this backend and frontend web project 

## Install requirements.txt 
1. Initially create a python virtual environment using <code>python -m venv [venv_name]</code> (name it venv or add your environments name to gitignore)
2. Activate the virtual environment. (the activate script is inside the virtual environment folder /Scripts/activate)
3. Install the dependencies by running <code>pip install -r requirements.txt</code>

## Steps to initalize database and run fastAPI server. 
1. Please connect to your MySQL Workbench session and create a database called royar (execute "CREATE DATABASE royar" in MySQL session).
2. Change the config details in <code>db_init.py</code> and execute the script.
3. By now you should see your tables created in MySQL workbench, head on and start the FastAPI server by typing <code>uvicorn main:app --reload</code> in the terminal.
4. Navigate to localhost:8000/docs/ you will see the created endpoints. Test them after you have populated the database.

## Populate the database. 
1. Please run db_populate.py after setting your config just as the previous steps. If an error occurs, you can refer to resources/ directory for inserts.sql where you can manually run the sql script in your sql server our workbench.

## Start the frontend server
1. Please navigate to frontend/ directory and run <code>npm install</code> so you install the dependencies. If you do not have node package manager install please refer to node.js official website to install it.
2. After installation of the dependencies (you should see a <code>node_modules/</code> directory inside frontend) please run <code>rpm run dev</code> to start the server

## Please make sure your FastAPI server is created on localhost:8000 and your React server on localhost:5173. 

<b>Note</b>: Please navigate to the /analytics page manually in the react app when you try to test it. 
