import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")

client = AsyncIOMotorClient(MONGO_URI)
database = client.optivisionlab
user_collection = database.get_collection("users")
