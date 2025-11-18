from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional

class Member(BaseModel):
    name: str
    email: EmailStr
    phone: str
    student_id: str
    university: str
    major: str

class Team(BaseModel):
    name: str
    login_email: EmailStr

class Leader(Member):
    pass

class UserCreate(BaseModel):
    team: Team
    leader: Leader
    members: Optional[List[Member]] = None
    password: str

class UserInDB(UserCreate):
    hashed_password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str
