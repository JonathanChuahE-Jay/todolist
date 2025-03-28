from django.urls import path
from .views import user_list, user_detail, user_register, user_login, user_logout, todo_list, todo_detail

urlpatterns = [
    path('users/', user_list, name='user_list'),
    path('user/<int:pk>/', user_detail, name='user_detail'),
    path('register/', user_register, name='user_register'),
    path('login/', user_login, name='user_login'),
    path('logout/', user_logout, name='user_logout'),
    path('todos/', todo_list, name='todo_list'),
    path('todos/<int:pk>/', todo_detail, name='todo_detail'),
]
