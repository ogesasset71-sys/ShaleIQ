from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: EmailStr
    company: str
    position: str
    phone: Optional[str] = None
    project_type: str
    budget: Optional[str] = None
    timeline: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")

class ContactFormCreate(BaseModel):
    full_name: str
    email: EmailStr
    company: str
    position: str
    phone: Optional[str] = None
    project_type: str
    budget: Optional[str] = None
    timeline: str
    message: str

# Newsletter Subscription Models
class NewsletterSubscription(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="active")

class NewsletterSubscriptionCreate(BaseModel):
    email: EmailStr

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(form_data: ContactFormCreate):
    try:
        contact_dict = form_data.dict()
        contact_obj = ContactFormSubmission(**contact_dict)
        result = await db.contact_submissions.insert_one(contact_obj.dict())
        logger.info(f"Contact form submitted successfully: {result.inserted_id}")
        return contact_obj
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact", response_model=List[ContactFormSubmission])
async def get_contact_submissions():
    try:
        submissions = await db.contact_submissions.find().to_list(1000)
        return [ContactFormSubmission(**submission) for submission in submissions]
    except Exception as e:
        logger.error(f"Error retrieving contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve contact submissions")

# Newsletter Subscription Endpoints
@api_router.post("/newsletter", response_model=NewsletterSubscription)
async def subscribe_newsletter(subscription_data: NewsletterSubscriptionCreate):
    try:
        # Check if email already exists
        existing_subscription = await db.newsletter_subscriptions.find_one({"email": subscription_data.email})
        if existing_subscription:
            logger.info(f"Email already subscribed: {subscription_data.email}")
            return NewsletterSubscription(**existing_subscription)
        
        subscription_dict = subscription_data.dict()
        subscription_obj = NewsletterSubscription(**subscription_dict)
        result = await db.newsletter_subscriptions.insert_one(subscription_obj.dict())
        logger.info(f"Newsletter subscription successful: {result.inserted_id}")
        return subscription_obj
    except Exception as e:
        logger.error(f"Error subscribing to newsletter: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to subscribe to newsletter")

@api_router.get("/newsletter", response_model=List[NewsletterSubscription])
async def get_newsletter_subscriptions():
    try:
        subscriptions = await db.newsletter_subscriptions.find().to_list(1000)
        return [NewsletterSubscription(**subscription) for subscription in subscriptions]
    except Exception as e:
        logger.error(f"Error retrieving newsletter subscriptions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve newsletter subscriptions")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
