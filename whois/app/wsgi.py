# import sys, os
# print("path----------: ", os.getcwd(), sys.path)
# sys.path.append(os.getcwd())
from app import app

if __name__ == "__main__":
  app.run()