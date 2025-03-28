from django.db import models
import bcrypt

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=128)
    email = models.EmailField(max_length=255, unique=True)
    
    def save(self, *args, **kwargs):
        if not self.pk: 
            self.password = bcrypt.hashpw(self.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        super().save(*args, **kwargs)


    def __str__(self):
        return self.username


class TodoList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content  = models.TextField()
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title