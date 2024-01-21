# COMP306 Term Project 
## Contributors: Ahmet Uyar, Gülbarin Maçin, Aslı Gülseren 

# Guide on how to run this backend project 

## Install requirements.txt 
1. Initially create a python virtual environment using <code>python -m venv [venv_name]</code> (name it venv or add your environments name to gitignore)
2. Activate the virtual environment. (the activate script is inside the virtual environment folder /Scripts/activate)
3. Install the dependencies by running <code>pip install -r requirements.txt</code>

## Steps to initalize database and run fastAPI server. 
1. Please connect to your MySQL Workbench session and create a database called royar (execute "CREATE DATABASE royar" in MySQL session).
2. Change the config details in <code>db_init.py</code> and execute the script.
3. By now you should see your tables created in MySQL workbench, head on and start the FastAPI server by typing <code>uvicorn main:app --reload</code> in the terminal.
4. Navigate to localhost:8000/docs/ you will see the created endpoints. Test them after you have populated the database. 
