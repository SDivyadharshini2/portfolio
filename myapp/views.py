from django.shortcuts import render
from .models import Contact
def home_view(request):
    return render(request, 'index.html')
def contact_view(request):
    if request.method == "POST":
        name = request.POST.get('name')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        contact = Contact(name=name, lastname=lastname, email=email, message=message)
        contact.save()
    return render(request, 'index.html')
