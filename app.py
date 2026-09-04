from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from models import db, Category
from config import Config

# Import blueprints
from routes.auth import auth_bp
from routes.expenses import expenses_bp
from routes.incomes import incomes_bp
from routes.categories import categories_bp
from routes.summary import summary_bp

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
db.init_app(app)
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(expenses_bp, url_prefix='/api/expenses')
app.register_blueprint(incomes_bp, url_prefix='/api/incomes')
app.register_blueprint(categories_bp, url_prefix='/api/categories')
app.register_blueprint(summary_bp, url_prefix='/api/summary')

# Create tables and initial data
with app.app_context():
    db.create_all()
    if not Category.query.first():
        default_categories = [
            Category(name="Food", type="expense", icon="utensils", color="red"),
            Category(name="Transport", type="expense", icon="car", color="blue"),
            Category(name="Salary", type="income", icon="dollar-sign", color="green"),
        ]
        db.session.add_all(default_categories)
        db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)
