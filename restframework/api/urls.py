from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import  protected_view, user_list, user_detail, user_register, user_login, user_logout, todo_list, todo_detail

urlpatterns = [
    path('users/', user_list, name='user_list'),
    path('user/<int:pk>/', user_detail, name='user_detail'),
    path('register/', user_register, name='user_register'),
    path('login/', user_login, name='user_login'),
    path('logout/', user_logout, name='user_logout'),
    path('todos/', todo_list, name='todo_list'),
    path('todos/<int:pk>/', todo_detail, name='todo_detail'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('protected/', protected_view, name='protected_view'),
]
