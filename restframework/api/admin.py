from django.contrib import admin
from .models import User, TodoList

admin.site.register(User)
admin.site.register(TodoList)
