from django.db import models

class Contact(models.Model):
    name = models.TextField(max_length=20,default="")
    lastname = models.TextField(max_length=20,default="")
    email = models.CharField( max_length=20,default="")
    message = models.TextField(max_length=20,default="")
    
