from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.v1.routes import router as api_router
from db import init_db

app = FastAPI(title="Snowboard Length Recommender")

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")

if __name__ == "__main__":
    init_db()
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
