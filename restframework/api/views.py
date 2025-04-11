from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import User, TodoList
from .serializers import UserSerializer, TodoListSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

import bcrypt

# Auth
def get_tokens_for_user(user):
    """Generate JWT tokens for a user"""
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    """
    Example protected view that requires authentication.
    """
    return Response({'message': f'Hello, {request.user.username}! This is a protected view.'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def user_register(request):
    """
    Register a new user.
    Example JSON:
    {
        "username": "john_doe",
        "password": "your_password",
        "email": "john@example.com"
    }
    """
    data = request.data.copy()

    hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    data['password'] = hashed_password.decode('utf-8')

    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        user = serializer.save()  
        tokens = get_tokens_for_user(user)
        return Response({'user': serializer.data, 'tokens': tokens}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_login(request):
    """
    Log in a user.
    Example JSON:
    {
        "email": "john@example.com",
        "password": "your_password"
    }
    """
    try:
        user = User.objects.get(email=request.data['email'])
    except User.DoesNotExist:
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_404_NOT_FOUND)

    if bcrypt.checkpw(request.data['password'].encode('utf-8'), user.password.encode('utf-8')):
        tokens = get_tokens_for_user(user)
        return Response({
            'message': 'Login successful',
            'user_id': user.id,
            'username': user.username,
            'email': user.email,
            'tokens': tokens
        }, status=status.HTTP_200_OK)
    
    return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    """
    Logout a user by blacklisting the refresh token.
    """
    try:
        refresh_token = request.data['refresh']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


# Users
@api_view(['GET', 'POST'])
def user_list(request):
    """
    List all users or create a new user.

    Example JSON for creating a user:
    {
        "username": "john_doe",
        "password": "your_password",
        "email": "john@example.com"
    }
    """
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        user.delete()
        return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

# TodoList Views
@api_view(['GET', 'POST'])
def todo_list(request):
    """
    List all users or create a new user.

    Example JSON for creating a user:
    {
        "user": 1,
        "title": "Finish Homework",
        "content": "Complete the math homework before 6 PM.",
        "is_completed": false
    }
    """
    if request.method == 'GET':
        todos = TodoList.objects.all()
        serializer = TodoListSerializer(todos, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = TodoListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def todo_detail(request, pk):
    try:
        todo = TodoList.objects.get(pk=pk)
    except TodoList.DoesNotExist:
        return Response({'error': 'Todo not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TodoListSerializer(todo)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = TodoListSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
